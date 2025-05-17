import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

const enModules = import.meta.glob('./en/*.json', { eager: true }) as Record<
  string,
  { default: Record<string, unknown> }
>;
const esModules = import.meta.glob('./es/*.json', { eager: true }) as Record<
  string,
  { default: Record<string, unknown> }
>;

const getNamespace = (path: string) => path.split('/').pop()!.replace('.json', '');

const en: Record<string, Record<string, unknown>> = {};
const es: Record<string, Record<string, unknown>> = {};

for (const path in enModules) {
  en[getNamespace(path)] = enModules[path].default;
}

for (const path in esModules) {
  es[getNamespace(path)] = esModules[path].default;
}

const namespaces = Object.keys(en);

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: import.meta.env.DEV,
    ns: namespaces,
    interpolation: { escapeValue: false },
    resources: {
      en,
      es,
    },
  });

export default i18n;
