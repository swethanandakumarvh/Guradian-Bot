import toast from 'react-hot-toast';
import { getResponse, LanguageCode } from './chatResponses';

interface ChatMessage {
  role: string;
  content: string;
}

interface EmergencyContext {
  type?: string;
  location?: string;
  id?: string;
  status?: 'pending' | 'processing' | 'resolved';
}

interface Alert {
  id: string;
  type: string;
  location: string;
  time: string;
  status: string;
}

const DEMO_ALERTS: Alert[] = [
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

let currentEmergency: EmergencyContext = {};

export async function sendChatMessage(messages: ChatMessage[], language: LanguageCode = 'en'): Promise<string | null> {
  try {
    const lastMessage = messages[messages.length - 1].content.toLowerCase();
    
    // Simulate API processing time
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Emergency flow
    if (lastMessage.includes('emergency') || lastMessage === '1') {
      currentEmergency = { id: Math.random().toString(36).substr(2, 9) };
      return getResponse('emergency.type', language);
    }

    // Emergency type selection
    if (currentEmergency.id && !currentEmergency.type) {
      const types = ['fire', 'medical', 'crime', 'natural disaster'];
      const matchedType = types.find(type => lastMessage.includes(type));
      if (matchedType) {
        currentEmergency.type = matchedType;
        return getResponse('emergency.location', language);
      }
    }

    // Location confirmation
    if (currentEmergency.id && currentEmergency.type && !currentEmergency.location) {
      currentEmergency.location = lastMessage;
      return getResponse('emergency.confirmation', language, {
        id: currentEmergency.id,
        type: currentEmergency.type,
        location: currentEmergency.location
      });
    }
    
    if (lastMessage.includes('alerts') || lastMessage.includes('nearby') || lastMessage === '3') {
      const alerts = DEMO_ALERTS.map(alert => 
        `${alert.type} at ${alert.location} (${alert.time})`
      ).join('\n');
      return `Here are the latest alerts:\n\n${alerts}`;
    }
    
    if (lastMessage.includes('scared') || lastMessage.includes('worried') || lastMessage === '4') {
      return getResponse('mental_support.calming', language);
    }
    
    // Default response
    return getResponse('greeting', language);
  } catch (error) {
    console.error('Chat error:', error);
    toast.error('Failed to process message. Please try again.');
    return null;
  }
}