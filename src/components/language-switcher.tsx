import { useTranslation } from 'react-i18next';

export function LanguageSwitcher() {
  const { i18n } = useTranslation();

  function handleLanguageChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const newLanguage = e.target.value;
    i18n.changeLanguage(newLanguage);
  }

  return (
    <select
      value={i18n.language}
      onChange={handleLanguageChange}
      className="bg-background border-border focus:border-ring appearance-none rounded-md border px-3 py-2 text-xs shadow-sm focus:ring-2 focus:outline-none"
    >
      <option value="en">English</option>
      <option value="es">Español</option>
    </select>
  );
}
