import i18n from 'i18next';
import {initReactI18next} from 'react-i18next'; 
import RNLanguageDetector from '@os-team/i18next-react-native-language-detector';
import ES from './translation-es'; 
import EN from './translation-en';

i18n.use(RNLanguageDetector).use(initReactI18next);
if (!i18n.isInitialized) {

    i18n.init({
    compatibilityзSON: 'v3',
    resources: {
        es: {translation: ES},
        en: {translation: EN},
    }, 
    fallbackLng: 'es',
    lng: 'es',
    debug: true,
    interpolation: {
        escapeValue: false,
    },
});
}

export default i18n;