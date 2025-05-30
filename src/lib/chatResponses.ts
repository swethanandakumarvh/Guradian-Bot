export type LanguageCode = 'en' | 'hi' | 'ta';

type ResponseKey = 'greeting' | 'emergency.confirmation' | 'mental_support.calming';

interface ChatResponses {
  [key: string]: {
    [K in LanguageCode]: string;
  };
}

const chatResponses: ChatResponses = {
  'greeting': {
    'en': 'Hello! I\'m here to help. How can I assist you today?',
    'hi': 'नमस्ते! मैं मदद करने के लिए यहां हूं। मैं आज आपकी कैसे सहायता कर सकता हूं?',
    'ta': 'வணக்கம்! நான் உதவ இங்கே இருக்கிறேன். இன்று நான் உங்களுக்கு எப்படி உதவ முடியும்?'
  },
  'emergency.confirmation': {
    'en': 'I understand you\'re reporting an emergency. Please stay calm. I\'m alerting emergency services. Can you provide your exact location?',
    'hi': 'मैं समझता हूं कि आप एक आपातकालीन स्थिति की रिपोर्ट कर रहे हैं। कृपया शांत रहें। मैं आपातकालीन सेवाओं को सूचित कर रहा हूं। क्या आप अपना सटीक स्थान बता सकते हैं?',
    'ta': 'நீங்கள் அவசர நிலையை புகார் செய்கிறீர்கள் என்பதை நான் புரிந்து கொள்கிறேன். அமைதியாக இருங்கள். நான் அவசர சேவைகளை எச்சரிக்கிறேன். உங்கள் துல்லியமான இடத்தை வழங்க முடியுமா?'
  },
  'mental_support.calming': {
    'en': 'I understand you\'re feeling anxious. That\'s completely normal in emergency situations. Take slow, deep breaths. I\'m here with you.',
    'hi': 'मैं समझता हूं कि आप घबराए हुए हैं। आपातकालीन स्थितियों में ऐसा होना पूरी तरह से सामान्य है। धीमी, गहरी सांसें लें। मैं आपके साथ हूं।',
    'ta': 'நீங்கள் பதற்றமாக இருப்பதை நான் புரிந்து கொள்கிறேன். அவசர நிலைமைகளில் இது முற்றிலும் இயல்பானது. மெதுவாக, ஆழ்ந்த மூச்சு விடுங்கள். நான் உங்களுடன் இருக்கிறேன்.'
  }
};

export function getResponse(key: ResponseKey, language: LanguageCode = 'en'): string {
  try {
    if (key.includes('.')) {
      const [category, subKey] = key.split('.');
      return chatResponses[category][subKey][language];
    }
    return chatResponses[key][language];
  } catch (error) {
    console.error('Response error:', error);
    return chatResponses.greeting[language];
  }
}