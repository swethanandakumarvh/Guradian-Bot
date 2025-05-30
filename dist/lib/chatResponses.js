const chatResponses = {
    'greeting': {
        'en': 'Hello! I\'m GuardianBot, your emergency response assistant. How can I help you today?\n\n1. Report Emergency 🚨\n2. Check Safety Tips 🛡️\n3. Get Local Alerts 📢\n4. Request Support 🤝',
        'hi': 'नमस्ते! मैं गार्डियन बॉट हूं, आपका आपातकालीन सहायक। आज मैं आपकी कैसे मदद कर सकता हूं?\n\n1. आपातकाल की रिपोर्ट करें 🚨\n2. सुरक्षा टिप्स देखें 🛡️\n3. स्थानीय अलर्ट प्राप्त करें 📢\n4. सहायता का अनुरोध करें 🤝',
        'ta': 'வணக்கம்! நான் கார்டியன் பாட், உங்கள் அவசரகால உதவியாளர். இன்று நான் எப்படி உதவ முடியும்?\n\n1. அவசரநிலை அறிக்கை 🚨\n2. பாதுகாப்பு குறிப்புகள் 🛡️\n3. உள்ளூர் எச்சரிக்கைகள் 📢\n4. ஆதரவு கோரிக்கை 🤝'
    },
    'emergency': {
        'type': {
            'en': 'What type of emergency are you reporting?\n\n1. Fire 🔥\n2. Medical 🚑\n3. Crime 🚔\n4. Natural Disaster 🌪️\n5. Other ⚠️',
            'hi': 'आप किस प्रकार की आपात स्थिति की रिपोर्ट कर रहे हैं?\n\n1. आग 🔥\n2. चिकित्सा 🚑\n3. अपराध 🚔\n4. प्राकृतिक आपदा 🌪️\n5. अन्य ⚠️',
            'ta': 'எந்த வகையான அவசரநிலையை நீங்கள் புகார் செய்கிறீர்கள்?\n\n1. தீ 🔥\n2. மருத்துவம் 🚑\n3. குற்றம் 🚔\n4. இயற்கை பேரழிவு 🌪️\n5. மற்றவை ⚠️'
        },
        'location': {
            'en': 'Please share your location to help us respond quickly. You can:\n\n1. Click "Share Location" button 📍\n2. Type your address manually\n3. Describe nearby landmarks',
            'hi': 'कृपया हमें तेजी से प्रतिक्रिया करने में मदद करने के लिए अपना स्थान साझा करें। आप:\n\n1. "स्थान साझा करें" बटन पर क्लिक करें 📍\n2. अपना पता मैन्युअल रूप से टाइप करें\n3. आस-पास के लैंडमार्क का वर्णन करें',
            'ta': 'விரைவாக பதிலளிக்க உங்கள் இருப்பிடத்தை பகிரவும். நீங்கள்:\n\n1. "இருப்பிடத்தை பகிர" பொத்தானை கிளிக் செய்யவும் 📍\n2. உங்கள் முகவரியை கைமுறையாக தட்டச்சு செய்யவும்\n3. அருகிலுள்ள நிலக்குறியீடுகளை விவரிக்கவும்'
        },
        'confirmation': {
            'en': '🚨 Emergency reported! Help is on the way.\n\nEmergency ID: #{id}\nType: {type}\nLocation: {location}\n\nStay on this chat. I\'ll update you on the response status.',
            'hi': '🚨 आपातकाल रिपोर्ट किया गया! सहायता आ रही है।\n\nआपातकालीन ID: #{id}\nप्रकार: {type}\nस्थान: {location}\n\nइस चैट पर बने रहें। मैं आपको प्रतिक्रिया स्थिति के बारे में अपडेट करूंगा।',
            'ta': '🚨 அவசரநிலை புகார் செய்யப்பட்டது! உதவி வருகிறது.\n\nஅவசர ID: #{id}\nவகை: {type}\nஇடம்: {location}\n\nஇந்த அரட்டையில் இருங்கள். பதில் நிலையை நான் புதுப்பிப்பேன்.'
        }
    },
    'mental_support': {
        'calming': {
            'en': 'I understand you\'re feeling anxious. That\'s completely normal in emergency situations. Take slow, deep breaths. I\'m here with you.',
            'hi': 'मैं समझता हूं कि आप घबराए हुए हैं। आपातकालीन स्थितियों में ऐसा होना पूरी तरह से सामान्य है। धीमी, गहरी सांसें लें। मैं आपके साथ हूं।',
            'ta': 'நீங்கள் பதற்றமாக இருப்பதை நான் புரிந்து கொள்கிறேன். அவசர நிலைமைகளில் இது முற்றிலும் இயல்பானது. மெதுவாக, ஆழ்ந்த மூச்சு விடுங்கள். நான் உங்களுடன் இருக்கிறேன்.'
        }
    }
};
export function getResponse(key, language = 'en', params = {}) {
    try {
        let response = '';
        if (key.includes('.')) {
            const [category, subKey] = key.split('.');
            const categoryResponses = chatResponses[category];
            response = categoryResponses[subKey][language];
        }
        else {
            const simpleResponse = chatResponses[key];
            response = simpleResponse[language];
        }
        // Replace any parameters in the response
        Object.entries(params).forEach(([key, value]) => {
            response = response.replace(`{${key}}`, value);
        });
        return response;
    }
    catch (error) {
        console.error('Response error:', error);
        const greetingResponse = chatResponses.greeting;
        return greetingResponse[language];
    }
}
