// Hooks
import { useTranslation } from "react-i18next";
import { useState } from "react";

// Components
import { Link, useLocation } from "react-router-dom"
import { SelectLanguage } from "@/components/SelectLanguage.tsx";
import { ToggleTheme } from "@/components/ToggleTheme.tsx";
import { Container } from "@/components/Container.tsx";

// Icons
import { Menu } from "@/icons/Menu.tsx";
import { X } from "@/icons/X.tsx";

type NavItem = {
  label: string;
  href: string;
};

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const { t } = useTranslation();
  const navItems = t('ui.navigation', { returnObjects: true }) as NavItem[];

  const location = useLocation();
  const pathname = location.pathname;

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="sticky inset-0 py-4 z-20 bg-background">
      <Container className="flex justify-between items-center">
        <div className="flex items-center gap-x-5">
          <nav>
            <ul className="hidden md:flex md:items-center space-x-5">
              {navItems.map((navItem, index) => (
                <li key={index}>
                  <Link
                    to={navItem.href}
                    className={`text-muted-foreground hover:text-muted font-semibold duration-100 ${pathname === navItem.href ? "text-muted" : ""}`}
                  >
                    {navItem.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="flex items-center gap-x-3">
          <ToggleTheme />
          <SelectLanguage />
          <div
            className="md:hidden"
            onClick={toggleMenu}>
            <Menu />
          </div>
        </div>
        <nav className={`w-60 absolute top-0 left-0 transition-transform bg-background md:bg-transparent min-h-dvh md:min-h-0 duration-300 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:static md:hidden z-30`}>
          <div className="flex justify-end p-2">
            <button
              onClick={toggleMenu}
              aria-label="Close menu"
              className="md:hidden">
              <X />
            </button>
          </div>
          <ul className="flex flex-col space-y-8 rounded-md ml-5 mt-6">
            {navItems.map((navItem, index) => (
              <li key={index}>
                <Link
                  to={navItem.href}
                  onClick={toggleMenu}
                  className={`text-muted-foreground hover:text-muted font-semibold duration-100 ${pathname === navItem.href ? "text-muted" : ""}`}
                >
                  {navItem.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
      {isOpen && (
        <div
          className="fixed inset-0 backdrop-blur-md z-10"
          onClick={toggleMenu} />
      )}
    </header>

  );
}
