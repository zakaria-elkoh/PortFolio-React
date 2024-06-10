import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import global_en from "./translations/en/global.json";
import global_es from "./translations/es/global.json";
import global_ar from "./translations/ar/global.json";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      global: global_en,
    },
    es: {
      global: global_es,
    },
    ar: {
      global: global_ar,
    },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
