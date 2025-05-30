// Predefined chat responses and flow logic
export const chatResponses = {
    greeting: {
        en: "Hi there! I'm Guardian Bot — here to assist in emergencies, offer support, or connect you with help. How can I help you today?",
        hi: "नमस्ते! मैं गार्डियन बॉट हूं — आपातकालीन स्थिति में सहायता, समर्थन या मदद के लिए यहां हूं। आज मैं आपकी कैसे मदद कर सकता हूं?",
        ta: "வணக்கம்! நான் கார்டியன் பாட் — அவசரகால உதவி, ஆதரவு அல்லது உதவி தொடர்பு கொள்ள இங்கே இருக்கிறேன். இன்று நான் எப்படி உதவ முடியும்?"
    },
    options: {
        en: ["🔘 Report an Emergency", "🔘 Check Nearby Alerts", "🔘 Offer Help", "🔘 Mental Support", "🔘 Talk to Human"],
        hi: ["🔘 आपातकाल की रिपोर्ट करें", "🔘 आस-पास की चेतावनियां देखें", "🔘 मदद की पेशकश करें", "🔘 मानसिक सहायता", "🔘 मनुष्य से बात करें"],
        ta: ["🔘 அவசரநிலை அறிக்கை", "🔘 அருகிலுள்ள எச்சரிக்கைகள்", "🔘 உதவி வழங்க", "🔘 மன ஆதரவு", "🔘 மனிதருடன் பேச"]
    },
    emergency: {
        types: {
            en: ["🔥 Fire", "💧 Flood", "🕳️ Road Damage", "⚠️ Hazard", "📍 Other"],
            hi: ["🔥 आग", "💧 बाढ़", "🕳️ सड़क क्षति", "⚠️ खतरा", "📍 अन्य"],
            ta: ["🔥 தீ", "💧 வெள்ளம்", "🕳️ சாலை சேதம்", "⚠️ ஆபத்து", "📍 மற்றவை"]
        },
        confirmation: {
            en: "Thanks! I've reported the issue. Nearby residents have been alerted and help is on the way. Stay safe. 💙",
            hi: "धन्यवाद! मैंने समस्या की रिपोर्ट कर दी है। आस-पास के निवासियों को सूचित कर दिया गया है और मदद आ रही है। सुरक्षित रहें। 💙",
            ta: "நன்றி! பிரச்சினையை அறிவித்துள்ளேன். அருகிலுள்ள குடியிருப்பாளர்களுக்கு தெரிவிக்கப்பட்டுள்ளது மற்றும் உதவி வருகிறது. பாதுகாப்பாக இருங்கள். 💙"
        }
    },
    mental_support: {
        initial: {
            en: "I'm here for you. Would you like some calming messages, or to talk to someone?",
            hi: "मैं आपके लिए यहां हूं। क्या आप कुछ शांत संदेश चाहेंगे, या किसी से बात करना चाहेंगे?",
            ta: "நான் உங்களுக்காக இங்கே இருக்கிறேன். சில அமைதியான செய்திகள் வேண்டுமா, அல்லது யாருடனாவது பேச வேண்டுமா?"
        },
        calming: {
            en: "Breathe with me — in... out... you're safe. Help is on the way.",
            hi: "मेरे साथ सांस लें — अंदर... बाहर... आप सुरक्षित हैं। मदद आ रही है।",
            ta: "என்னுடன் மூச்சு விடுங்கள் — உள்ளே... வெளியே... நீங்கள் பாதுகாப்பாக இருக்கிறீர்கள். உதவி வருகிறது."
        }
    }
};
export function getResponse(key, language = 'en') {
    const paths = key.split('.');
    let current = chatResponses;
    for (const path of paths) {
        if (current[path]) {
            current = current[path];
        }
        else {
            return chatResponses.greeting[language];
        }
    }
    return current[language] || current.en;
}
