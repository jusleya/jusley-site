import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './i18n/en/translation.json';
import pt from './i18n/pt/translation.json';

// eslint-disable-next-line @typescript-eslint/no-floating-promises
i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    pt: { translation: pt },
  },
  lng: 'pt',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
  detection: {
    order: ['localStorage', 'navigator'],
    caches: ['localStorage'],
  },
});

export default i18n;
