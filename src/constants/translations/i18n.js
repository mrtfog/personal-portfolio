import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import ES from "./translation-es";
import EN from "./translation-en";

i18n.use(LanguageDetector)
    .use(initReactI18next)
    .init({
        compatibilityзSON: "v3",
        resources: {
            es: { translation: ES },
            en: { translation: EN },
        },
        fallbackLng: "en",
        lng: "en",
        debug: true,
        interpolation: {
            escapeValue: false,
        },
        react: {
            bindI18n: "languageChanged",
            useSuspense: true,
        },
    });

export default i18n;
