// Hooks
import { useTranslation } from "react-i18next";
import { useState } from "react";

// Components
import { Link } from "react-router-dom";
import { SelectLanguage } from "@/components/SelectLanguage.tsx";

// Icons
import { Menu } from "@/icons/Menu.tsx";
import { X } from "@/icons/X.tsx";

type NavItem = {
  label: string;
  href: string;
};

export function Navbar() {
  const { t } = useTranslation();
  const navItems = t('ui.navigation', { returnObjects: true }) as NavItem[];
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <header className="flex justify-between items-center p-4 z-20">
        <Link to="/" className="text-xl font-bold">
          Ignacio Figueroa
        </Link>
        <div className="md:hidden" onClick={toggleMenu}>
          <Menu />
        </div>
        <nav
          className={`absolute top-0 left-0 w-52 transition-transform duration-300 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:static md:flex md:items-center md:translate-x-0 md:h-auto z-30`}>
          {isOpen && (
            <div className="flex justify-end p-2">
              <button onClick={toggleMenu} aria-label="Close menu">
                <X />
              </button>
            </div>
          )}
          <ul className="flex flex-col md:flex-row md:space-x-4">
            {navItems.map((navItem, index) => (
              <li key={index}>
                <Link to={navItem.href} className="hover:underline block py-2 px-4">
                  {navItem.label}
                </Link>
              </li>
            ))}
            <li>
              <SelectLanguage />
            </li>
          </ul>
        </nav>
      </header>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-md z-10"
          onClick={toggleMenu}
        />
      )}
    </>
  );
}
