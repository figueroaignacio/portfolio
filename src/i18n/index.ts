import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

const namespaces = ['ui', 'components', 'config'];

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: import.meta.env.DEV,
    ns: namespaces,
    defaultNS: 'ui',
    interpolation: { escapeValue: false },
    resources: {
      en: {
        pages: await import('./en/pages.json'),
      },
      es: {
        pages: await import('./es/pages.json'),
      },
    },
  });

export default i18n;
