import { useTranslation } from 'react-i18next';

export function LanguageSwitcher() {
  const { i18n } = useTranslation();

  function toggleLanguage() {
    const newLanguage = i18n.language === 'en' ? 'es' : 'en';
    i18n.changeLanguage(newLanguage);
  }

  return <button onClick={toggleLanguage}>{i18n.language === 'en' ? 'ES' : 'EN'}</button>;
}
