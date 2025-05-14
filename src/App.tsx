// Hooks
import { useTranslation } from 'react-i18next';

// Components
import { LanguageSwitcher } from './components/language-switcher';
import { ToggleTheme } from './components/toggle-theme';

export default function App() {
  const { t } = useTranslation('pages');

  return (
    <div>
      <h1>{t('home.title')}</h1>
      <LanguageSwitcher />
      <ToggleTheme />
    </div>
  );
}
