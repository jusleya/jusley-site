import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './i18n/en/translation.json';
import pt from './i18n/pt/translation.json';

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    pt: { translation: pt },
  },
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
