// Hooks
import { useTranslation } from 'react-i18next';

// Components
import { Link } from 'react-router';
import { LanguageSwitcher } from './language-switcher';
import { ToggleTheme } from './toggle-theme';

// Types
import { type Navigation } from '@/types';

export function Header() {
  const { t } = useTranslation('ui');
  const navigation = t('navigation', { returnObjects: true }) as Navigation[];

  return (
    <header className="border-border border-b">
      <div className="container">
        <Link to="/">nacho</Link>
        <ToggleTheme />
        <LanguageSwitcher />
        <nav>
          <ul>
            {navigation.map((item, index) => (
              <li key={index}>
                <Link to={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
