// Hooks
import { useTranslation } from "react-i18next";
import { useState } from "react";

// Components
import { Link } from "react-router-dom";
import { Logo } from "@/components/Logo.tsx";
import { SelectLanguage } from "@/components/SelectLanguage.tsx";
import { ToggleTheme } from "@/components/ToggleTheme.tsx";

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

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <header className="flex justify-between items-center py-4 z-20">
        <div className="flex items-center gap-x-5">
          <Logo />
          <nav>
            <ul className="hidden md:flex md:items-center space-x-5">
              {navItems.map((navItem, index) => (
                <li key={index}>
                  <Link
                    to={navItem.href}
                    className="text-muted-foreground hover:text-muted font-semibold duration-100">
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
                  className="text-muted-foreground hover:text-muted font-semibold duration-100 text-xl">
                  {navItem.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      {isOpen && (
        <div
          className="fixed inset-0 backdrop-blur-md z-10"
          onClick={toggleMenu} />
      )}
    </>

  );
}
