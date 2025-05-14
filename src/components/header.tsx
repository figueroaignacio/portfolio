import useMediaQuery from '@/hooks/use-media-query';
import { HamburgerMenuIcon } from '@radix-ui/react-icons';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router';
import { LanguageSwitcher } from './language-switcher';
import { ToggleTheme } from './toggle-theme';

// Types
import { type Navigation } from '@/types';

export function Header() {
  const { isMobile } = useMediaQuery();
  const { t } = useTranslation('ui');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = t('navigation', { returnObjects: true }) as Navigation[];

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  if (isMobile) {
    return (
      <header className="border-border border-b py-4">
        <div className="container flex items-center justify-between">
          <Link to="/">nacho</Link>
          <button onClick={toggleMenu}>
            <HamburgerMenuIcon className="size-5" />
          </button>
          {isMenuOpen && (
            <div
              className="fixed top-0 left-0 z-40 h-full w-full backdrop-blur-sm"
              onClick={closeMenu}
            ></div>
          )}
          <div
            className={`bg-card border-border fixed top-0 right-0 z-50 h-full w-64 transform border-l shadow-lg transition-all duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
          >
            <div className="flex justify-end p-4">
              <button onClick={closeMenu}>
                <span className="text-2xl">×</span>
              </button>
            </div>
            <nav className="mt-8">
              <ul className="space-y-8 p-4">
                {navigation.map((item, index) => (
                  <li key={index}>
                    <Link to={item.href} className="block">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="mt-8 flex flex-col space-y-4 px-4">
              <ToggleTheme />
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </header>
    );
  }

  return (
    <header className="border-border border-b py-4">
      <div className="container flex items-center justify-between">
        <Link to="/">nacho</Link>

        <nav className="flex space-x-4">
          <ul className="flex">
            {navigation.map((item, index) => (
              <li key={index} className="p-2">
                <Link to={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
          <ToggleTheme />
          <LanguageSwitcher />
        </nav>
      </div>
    </header>
  );
}
