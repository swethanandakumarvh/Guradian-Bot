import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect, useRef } from 'react';
import ReactMarkdown from 'react-markdown';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { storage } from '../lib/storage';
import { sendChatMessage } from '../lib/api';
import { MapPinIcon, ShareIcon, MicrophoneIcon } from '@heroicons/react/24/outline';
import Map, { Marker } from 'react-map-gl';
const LANGUAGES = [
    { code: 'en', name: 'English' },
    { code: 'hi', name: 'हिंदी' },
    { code: 'ta', name: 'தமிழ்' }
];
const SYSTEM_PROMPT = `You are GuardianBot, an AI emergency response assistant. Your role is to:
1. Help people report emergencies and incidents
2. Provide immediate safety guidance
3. Collect relevant information (location, situation details)
4. Offer emotional support
5. Guide users through the emergency response process

Always maintain a calm, professional tone. For serious emergencies, emphasize the importance of contacting emergency services first.`;
export default function ChatSupport() {
    const { t, i18n } = useTranslation();
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const [location, setLocation] = useState(null);
    const [isRecording, setIsRecording] = useState(false);
    const [recognition, setRecognition] = useState(null);
    const messagesEndRef = useRef(null);
    useEffect(() => {
        // Initialize Web Speech API
        if ('webkitSpeechRecognition' in window) {
            const recognition = new window.webkitSpeechRecognition();
            recognition.continuous = false;
            recognition.interimResults = false;
            recognition.lang = i18n.language;
            recognition.onresult = (event) => {
                const transcript = event.results[0][0].transcript;
                setInput(transcript);
            };
            recognition.onerror = (event) => {
                console.error('Speech recognition error:', event.error);
                setIsRecording(false);
            };
            recognition.onend = () => {
                setIsRecording(false);
            };
            setRecognition(recognition);
        }
        // Load initial messages
        const savedMessages = storage.getChatMessages();
        if (savedMessages.length === 0) {
            const initialMessage = {
                role: 'assistant',
                content: t('chat.initialMessage'),
                created_at: new Date().toISOString()
            };
            storage.saveChatMessage(initialMessage);
            setMessages([initialMessage]);
        }
        else {
            setMessages(savedMessages);
        }
    }, [i18n.language]);
    useEffect(() => {
        scrollToBottom();
    }, [messages]);
    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };
    const toggleVoiceInput = () => {
        if (!recognition) {
            toast.error('Speech recognition is not supported in your browser');
            return;
        }
        if (isRecording) {
            recognition.stop();
        }
        else {
            recognition.start();
            setIsRecording(true);
        }
    };
    const speakMessage = (text) => {
        if ('speechSynthesis' in window) {
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.lang = i18n.language;
            window.speechSynthesis.speak(utterance);
        }
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!input.trim())
            return;
        const userMessage = {
            content: input,
            role: 'user',
            created_at: new Date().toISOString()
        };
        setMessages(prev => [...prev, userMessage]);
        storage.saveChatMessage(userMessage);
        setInput('');
        setIsTyping(true);
        const apiMessages = [
            { role: 'system', content: SYSTEM_PROMPT },
            ...messages.map(msg => ({ role: msg.role, content: msg.content })),
            { role: 'user', content: input }
        ];
        try {
            const response = await sendChatMessage(apiMessages);
            if (response) {
                const botResponse = {
                    content: response,
                    role: 'assistant',
                    created_at: new Date().toISOString()
                };
                setMessages(prev => [...prev, botResponse]);
                storage.saveChatMessage(botResponse);
                speakMessage(response);
            }
        }
        catch (error) {
            toast.error('Failed to get response. Please try again.');
        }
        finally {
            setIsTyping(false);
        }
    };
    const shareLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                const newLocation = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };
                setLocation(newLocation);
                const locationMessage = {
                    role: 'user',
                    content: `📍 Location shared: ${newLocation.lat}, ${newLocation.lng}`,
                    created_at: new Date().toISOString()
                };
                setMessages(prev => [...prev, locationMessage]);
                storage.saveChatMessage(locationMessage);
                toast.success('Location shared successfully');
            }, () => toast.error('Could not get your location'));
        }
    };
    return (_jsx("div", { className: "min-h-screen bg-gray-900", children: _jsx("div", { className: "max-w-6xl mx-auto h-screen flex flex-col", children: _jsxs("div", { className: "flex-1 flex flex-col bg-gray-800 shadow-xl rounded-lg m-4", children: [_jsxs("div", { className: "px-6 py-4 border-b border-gray-700 flex justify-between items-center", children: [_jsxs("div", { children: [_jsx("h1", { className: "text-2xl font-bold text-white", children: "Emergency Response Chat" }), _jsx("p", { className: "text-gray-400", children: "We're here to help 24/7" })] }), _jsx("div", { className: "flex items-center gap-4", children: _jsx("select", { value: i18n.language, onChange: (e) => i18n.changeLanguage(e.target.value), className: "bg-gray-700 text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500", children: LANGUAGES.map((lang) => (_jsx("option", { value: lang.code, children: lang.name }, lang.code))) }) })] }), _jsx("div", { className: "flex-1 overflow-y-auto px-6 py-4", children: _jsxs("div", { className: "space-y-6", children: [messages.map((message, index) => (_jsx("div", { className: `flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`, children: _jsx("div", { className: `max-w-[80%] rounded-2xl px-6 py-4 ${message.role === 'user'
                                            ? 'bg-primary-600 text-white'
                                            : 'bg-gray-700 text-gray-100'}`, children: _jsx(ReactMarkdown, { className: "prose prose-invert prose-lg", components: {
                                                p: ({ node, ...props }) => _jsx("p", { className: "text-lg", ...props })
                                            }, children: message.content }) }) }, index))), isTyping && (_jsx("div", { className: "flex justify-start", children: _jsx("div", { className: "bg-gray-700 rounded-2xl px-6 py-4", children: _jsxs("div", { className: "flex space-x-2", children: [_jsx("div", { className: "w-3 h-3 bg-gray-400 rounded-full animate-bounce" }), _jsx("div", { className: "w-3 h-3 bg-gray-400 rounded-full animate-bounce delay-100" }), _jsx("div", { className: "w-3 h-3 bg-gray-400 rounded-full animate-bounce delay-200" })] }) }) })), _jsx("div", { ref: messagesEndRef })] }) }), location && (_jsx("div", { className: "px-6 py-4 border-t border-gray-700", children: _jsx("div", { className: "h-48 rounded-lg overflow-hidden", children: _jsx(Map, { initialViewState: {
                                    latitude: location.lat,
                                    longitude: location.lng,
                                    zoom: 14
                                }, mapStyle: "mapbox://styles/mapbox/dark-v10", mapboxAccessToken: import.meta.env.VITE_MAPBOX_TOKEN, children: _jsx(Marker, { latitude: location.lat, longitude: location.lng, children: _jsx(MapPinIcon, { className: "h-8 w-8 text-primary-500" }) }) }) }) })), _jsxs("div", { className: "px-6 py-4 border-t border-gray-700", children: [_jsxs("div", { className: "flex space-x-4 mb-4", children: [_jsxs("button", { onClick: shareLocation, className: "flex items-center gap-2 px-6 py-3 bg-gray-700 hover:bg-gray-600 text-gray-200 rounded-xl transition-colors text-lg", children: [_jsx(MapPinIcon, { className: "h-6 w-6" }), t('chat.shareLocation')] }), _jsxs("button", { className: "flex items-center gap-2 px-6 py-3 bg-gray-700 hover:bg-gray-600 text-gray-200 rounded-xl transition-colors text-lg", children: [_jsx(ShareIcon, { className: "h-6 w-6" }), t('chat.shareMedia')] }), _jsxs("button", { onClick: toggleVoiceInput, className: `flex items-center gap-2 px-6 py-3 ${isRecording ? 'bg-red-600 hover:bg-red-700' : 'bg-gray-700 hover:bg-gray-600'} text-gray-200 rounded-xl transition-colors text-lg`, children: [_jsx(MicrophoneIcon, { className: `h-6 w-6 ${isRecording ? 'animate-pulse' : ''}` }), isRecording ? t('chat.voiceStop') : t('chat.voiceStart')] })] }), _jsxs("form", { onSubmit: handleSubmit, className: "flex space-x-4", children: [_jsx("input", { type: "text", value: input, onChange: (e) => setInput(e.target.value), placeholder: t('chat.placeholder'), className: "flex-1 bg-gray-700 text-gray-100 placeholder-gray-400 text-lg rounded-xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-primary-500" }), _jsx("button", { type: "submit", className: "bg-primary-600 hover:bg-primary-500 text-white px-8 py-4 rounded-xl transition-colors text-lg font-medium", disabled: !input.trim() || isTyping, children: t('chat.send') })] })] })] }) }) }));
}
