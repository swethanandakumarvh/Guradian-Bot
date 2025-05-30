import toast from 'react-hot-toast';
import { getResponse } from './chatResponses';
const DEMO_ALERTS = [
    {
        id: '1',
        type: 'Fire',
        location: 'ABC Street',
        time: '20 mins ago',
        status: 'active'
    },
    {
        id: '2',
        type: 'Flood',
        location: 'XYZ Park',
        time: '5 hrs ago',
        status: 'monitoring'
    },
    {
        id: '3',
        type: 'Road Damage',
        location: '3rd Avenue',
        time: '2 hrs ago',
        status: 'reported'
    }
];
let currentEmergency = {};
export async function sendChatMessage(messages, language = 'en') {
    try {
        const lastMessage = messages[messages.length - 1].content.toLowerCase();
        // Simulate API processing time
        await new Promise(resolve => setTimeout(resolve, 1000));
        if (lastMessage.includes('emergency') || lastMessage === '1') {
            currentEmergency = { id: Math.random().toString(36).substr(2, 9) };
            return getResponse('emergency.type', language);
        }
        if (lastMessage.includes('alerts') || lastMessage.includes('nearby') || lastMessage === '3') {
            const alerts = DEMO_ALERTS.map(alert => `${alert.type} at ${alert.location} (${alert.time})`).join('\n');
            return `Here are the latest alerts:\n\n${alerts}`;
        }
        return getResponse('greeting', language);
    }
    catch (error) {
        console.error('Chat error:', error);
        toast.error('Failed to process message. Please try again.');
        return null;
    }
}
