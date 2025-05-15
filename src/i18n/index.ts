import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

const namespaces = ['pages', 'ui', 'sections'];

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: import.meta.env.DEV,
    ns: namespaces,
    interpolation: { escapeValue: false },
    resources: {
      en: {
        pages: await import('./en/pages.json'),
        ui: await import('./en/ui.json'),
        sections: await import('./en/sections.json'),
      },
      es: {
        pages: await import('./es/pages.json'),
        ui: await import('./es/ui.json'),
        sections: await import('./es/sections.json'),
      },
    },
  });

export default i18n;
