// Hooks
import { useTranslation } from 'react-i18next';

// Components
import { Link } from 'react-router';

// Types
import { type Navigation } from '@/types';

export function Header() {
  const { t } = useTranslation('ui');
  const navigation = t('navigation', { returnObjects: true }) as Navigation[];

  return (
    <header>
      <Link to="/">nacho</Link>
      <nav>
        <ul>
          {navigation.map((item, index) => (
            <li key={index}>
              <Link to={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
