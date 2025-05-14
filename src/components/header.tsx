// Hooks
import { useTranslation } from 'react-i18next';

// Types
import { type Navigation } from '@/types';

export function Header() {
  const { t } = useTranslation('ui');
  const navigation = t('navigation', { returnObjects: true }) as Navigation[];

  return (
    <header>
      <a href="/">nacho</a>
      <nav>
        <ul>
          {navigation.map((item, index) => (
            <li key={index}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
