import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { format } from 'date-fns';
import { useDropzone } from 'react-dropzone';
import toast from 'react-hot-toast';
import { storage } from '../lib/storage';
import { MapPinIcon, HeartIcon, ShareIcon, ChatBubbleLeftIcon } from '@heroicons/react/24/outline';
import Map, { Marker } from 'react-map-gl';
const DEMO_POSTS = [
    {
        id: '1',
        caption: '🚨 Safety First! Important flood safety tips:\n\n1. Stay informed about weather updates\n2. Keep emergency contacts handy\n3. Prepare an emergency kit\n4. Know your evacuation route\n5. Keep important documents waterproof',
        hashtags: ['#SafetyFirst', '#FloodPreparedness', '#CommunitySupport'],
        created_at: '2025-05-25T10:00:00Z',
        media_url: 'https://images.pexels.com/photos/1200547/pexels-photo-1200547.jpeg',
        location: { lat: 12.9716, lng: 77.5946 }
    },
    {
        id: '2',
        caption: '🎯 Fundraising Goal: $10,000 for Emergency Response Equipment\n\nHelp us upgrade our community emergency response capabilities! Every donation counts.',
        hashtags: ['#CommunityFundraising', '#EmergencyPreparedness'],
        created_at: '2025-05-24T15:30:00Z',
        donation_goal: 10000,
        donation_current: 5600
    },
    {
        id: '3',
        caption: '📦 Food Drive Success! Thank you to everyone who contributed to our emergency food bank. Together we collected over 1000 pounds of non-perishable items!',
        hashtags: ['#FoodDrive', '#CommunitySupport', '#Gratitude'],
        created_at: '2025-05-23T09:15:00Z',
        media_url: 'https://images.pexels.com/photos/6590920/pexels-photo-6590920.jpeg'
    }
];
export default function CommunityHub() {
    const [posts, setPosts] = useState([]);
    const [newPost, setNewPost] = useState({
        caption: '',
        hashtags: ''
    });
    const [files, setFiles] = useState([]);
    const [viewport, setViewport] = useState({
        latitude: 12.9716,
        longitude: 77.5946,
        zoom: 12
    });
    const [showDonationModal, setShowDonationModal] = useState(false);
    const [selectedPost, setSelectedPost] = useState(null);
    useEffect(() => {
        const savedPosts = storage.getPosts();
        if (savedPosts.length === 0) {
            DEMO_POSTS.forEach(post => storage.savePost(post));
            setPosts(DEMO_POSTS);
        }
        else {
            setPosts(savedPosts);
        }
    }, []);
    const onDrop = (acceptedFiles) => {
        setFiles(acceptedFiles);
    };
    const { getRootProps, getInputProps } = useDropzone({
        onDrop,
        accept: {
            'image/*': ['.jpeg', '.jpg', '.png'],
            'video/*': ['.mp4', '.mov']
        },
        maxFiles: 1
    });
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const post = storage.savePost({
                caption: newPost.caption,
                hashtags: newPost.hashtags.split(' ').filter(tag => tag.startsWith('#')),
                created_at: new Date().toISOString()
            });
            setPosts(prev => [post, ...prev]);
            toast.success('Post created successfully!');
            setNewPost({ caption: '', hashtags: '' });
            setFiles([]);
            document.getElementById('createPost')?.close();
        }
        catch (error) {
            toast.error('Failed to create post. Please try again.');
        }
    };
    const handleDonate = (post) => {
        setSelectedPost(post);
        setShowDonationModal(true);
    };
    const submitDonation = (amount) => {
        const updatedPosts = posts.map(post => {
            if (post.id === selectedPost.id) {
                return {
                    ...post,
                    donation_current: (post.donation_current || 0) + amount
                };
            }
            return post;
        });
        setPosts(updatedPosts);
        storage.updatePosts(updatedPosts);
        setShowDonationModal(false);
        toast.success(`Thank you for your donation of $${amount}!`);
    };
    return (_jsxs("div", { className: "min-h-screen bg-gray-900", children: [_jsxs("div", { className: "max-w-4xl mx-auto px-4 py-8", children: [_jsxs("div", { className: "flex justify-between items-center mb-8", children: [_jsx("h1", { className: "text-3xl font-bold text-white", children: "Community Hub" }), _jsx("button", { onClick: () => document.getElementById('createPost')?.showModal(), className: "btn bg-primary-600 hover:bg-primary-500 text-white", children: "Create Post" })] }), _jsx("div", { className: "grid gap-6", children: posts.map((post) => (_jsxs("div", { className: "bg-gray-800 rounded-lg overflow-hidden border border-gray-700", children: [post.media_url && (_jsx("img", { src: post.media_url, alt: "", className: "w-full h-[400px] object-cover" })), _jsxs("div", { className: "p-6", children: [_jsxs("div", { className: "flex items-center gap-4 mb-4", children: [_jsx("div", { className: "h-10 w-10 rounded-full bg-primary-600 flex items-center justify-center", children: _jsx("span", { className: "text-white font-semibold", children: "GB" }) }), _jsxs("div", { children: [_jsx("h3", { className: "text-white font-semibold", children: "GuardianBot" }), _jsx("p", { className: "text-sm text-gray-400", children: format(new Date(post.created_at), 'MMM d, yyyy') })] })] }), _jsx("p", { className: "text-gray-300 mb-4 whitespace-pre-line", children: post.caption }), post.donation_goal && (_jsxs("div", { className: "mb-6 bg-gray-700 rounded-lg p-4", children: [_jsxs("div", { className: "flex justify-between text-sm text-gray-300 mb-2", children: [_jsxs("span", { children: ["Raised: $", post.donation_current || 0] }), _jsxs("span", { children: ["Goal: $", post.donation_goal] })] }), _jsx("div", { className: "w-full bg-gray-600 rounded-full h-2.5", children: _jsx("div", { className: "bg-primary-600 h-2.5 rounded-full", style: { width: `${(post.donation_current / post.donation_goal) * 100}%` } }) }), _jsxs("button", { onClick: () => handleDonate(post), className: "mt-4 btn bg-primary-600 hover:bg-primary-500 text-white w-full flex items-center justify-center gap-2", children: [_jsx(HeartIcon, { className: "w-5 h-5" }), "Donate Now"] })] })), post.location && (_jsx("div", { className: "mb-6 rounded-lg overflow-hidden h-48", children: _jsx(Map, { ...viewport, onMove: evt => setViewport(evt.viewport), mapStyle: "mapbox://styles/mapbox/dark-v10", mapboxAccessToken: import.meta.env.VITE_MAPBOX_TOKEN, children: _jsx(Marker, { latitude: post.location.lat, longitude: post.location.lng, children: _jsx(MapPinIcon, { className: "h-6 w-6 text-primary-500" }) }) }) })), _jsx("div", { className: "flex flex-wrap gap-2 mb-4", children: post.hashtags.map((tag, index) => (_jsx("span", { className: "bg-primary-600/20 text-primary-400 text-sm px-3 py-1 rounded-full", children: tag }, index))) }), _jsx("div", { className: "flex justify-between items-center border-t border-gray-700 pt-4", children: _jsxs("div", { className: "flex gap-6", children: [_jsxs("button", { className: "text-gray-400 hover:text-primary-400 flex items-center gap-2", children: [_jsx(HeartIcon, { className: "w-5 h-5" }), _jsx("span", { children: "Like" })] }), _jsxs("button", { className: "text-gray-400 hover:text-primary-400 flex items-center gap-2", children: [_jsx(ChatBubbleLeftIcon, { className: "w-5 h-5" }), _jsx("span", { children: "Comment" })] }), _jsxs("button", { className: "text-gray-400 hover:text-primary-400 flex items-center gap-2", children: [_jsx(ShareIcon, { className: "w-5 h-5" }), _jsx("span", { children: "Share" })] })] }) })] })] }, post.id))) })] }), _jsxs("dialog", { id: "createPost", className: "modal bg-gray-800 rounded-lg p-6 max-w-xl w-full", children: [_jsx("h2", { className: "text-xl font-semibold text-white mb-4", children: "Create a Post" }), _jsxs("form", { onSubmit: handleSubmit, className: "space-y-4", children: [_jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium text-gray-300", children: "Caption" }), _jsx("textarea", { className: "w-full bg-gray-700 border-gray-600 rounded-lg p-3 text-white", rows: 3, value: newPost.caption, onChange: (e) => setNewPost({ ...newPost, caption: e.target.value }), required: true })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium text-gray-300", children: "Hashtags" }), _jsx("input", { type: "text", className: "w-full bg-gray-700 border-gray-600 rounded-lg p-3 text-white", value: newPost.hashtags, onChange: (e) => setNewPost({ ...newPost, hashtags: e.target.value }), placeholder: "#community #safety" })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium text-gray-300", children: "Media" }), _jsxs("div", { ...getRootProps(), className: "border-2 border-dashed border-gray-600 rounded-lg p-6 text-center cursor-pointer", children: [_jsx("input", { ...getInputProps() }), _jsx("p", { className: "text-gray-400", children: "Drag & drop a photo or video, or click to select" })] })] }), _jsxs("div", { className: "flex justify-end gap-4 mt-6", children: [_jsx("button", { type: "button", onClick: () => document.getElementById('createPost')?.close(), className: "btn bg-gray-700 hover:bg-gray-600 text-white", children: "Cancel" }), _jsx("button", { type: "submit", className: "btn bg-primary-600 hover:bg-primary-500 text-white", children: "Post" })] })] })] }), showDonationModal && (_jsx("div", { className: "fixed inset-0 bg-black/50 flex items-center justify-center p-4", children: _jsxs("div", { className: "bg-gray-800 rounded-lg p-6 max-w-sm w-full", children: [_jsx("h3", { className: "text-lg font-semibold text-white mb-4", children: "Make a Donation" }), _jsx("div", { className: "grid grid-cols-2 gap-4 mb-4", children: [10, 25, 50, 100].map((amount) => (_jsxs("button", { onClick: () => submitDonation(amount), className: "btn bg-primary-600/20 hover:bg-primary-600/30 text-primary-400", children: ["$", amount] }, amount))) }), _jsx("button", { onClick: () => setShowDonationModal(false), className: "btn bg-gray-700 hover:bg-gray-600 text-white w-full", children: "Cancel" })] }) }))] }));
}
