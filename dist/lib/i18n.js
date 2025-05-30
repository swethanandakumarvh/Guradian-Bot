import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';
i18n
    .use(HttpBackend)
    .use(initReactI18next)
    .init({
    fallbackLng: 'en',
    debug: true,
    interpolation: {
        escapeValue: false,
    },
    resources: {
        en: {
            translation: {
                chat: {
                    placeholder: 'Type your message...',
                    shareLocation: 'Share Location',
                    shareMedia: 'Share Media',
                    send: 'Send',
                    voiceStart: 'Start Voice',
                    voiceStop: 'Stop Voice',
                    initialMessage: "Hello! I'm your GuardianBot assistant. To help you better, could you:\n\n1. Share your location\n2. Describe what happened\n3. Any immediate help needed?\n\nOur team will guide you through the process. 🛡️"
                }
            }
        },
        hi: {
            translation: {
                chat: {
                    placeholder: 'अपना संदेश लिखें...',
                    shareLocation: 'स्थान साझा करें',
                    shareMedia: 'मीडिया साझा करें',
                    send: 'भेजें',
                    voiceStart: 'आवाज़ शुरू करें',
                    voiceStop: 'आवाज़ बंद करें',
                    initialMessage: "नमस्ते! मैं आपका गार्डियन बॉट सहायक हूं। बेहतर मदद के लिए, क्या आप:\n\n1. अपना स्थान साझा कर सकते हैं\n2. क्या हुआ वर्णन करें\n3. कोई तत्काल सहायता चाहिए?\n\nहमारी टीम आपकी मदद करेगी। 🛡️"
                }
            }
        },
        ta: {
            translation: {
                chat: {
                    placeholder: 'உங்கள் செய்தியை தட்டச்சு செய்யவும்...',
                    shareLocation: 'இருப்பிடத்தை பகிரவும்',
                    shareMedia: 'மீடியாவை பகிரவும்',
                    send: 'அனுப்பு',
                    voiceStart: 'குரல் தொடங்கு',
                    voiceStop: 'குரல் நிறுத்து',
                    initialMessage: "வணக்கம்! நான் உங்கள் கார்டியன் பாட் உதவியாளர். சிறப்பாக உதவ, நீங்கள்:\n\n1. உங்கள் இருப்பிடத்தை பகிரவும்\n2. என்ன நடந்தது என்பதை விவரிக்கவும்\n3. உடனடி உதவி தேவையா?\n\nஎங்கள் குழு உங்களுக்கு வழிகாட்டும். 🛡️"
                }
            }
        }
    }
});
export default i18n;
