import type React from "react";
import { useNavItems } from "../hooks/useNavItems";
import { NavLinks } from "./NavLinks";
import { SelectLanguage } from "./SelectLanguage";
import { ToggleTheme } from "./ToggleTheme";

export const DesktopNavbar: React.FC = () => {
  const navItems = useNavItems();

  return (
    <header className="sticky shadow-lg md:shadow-none z-50 m-2 rounded-md backdrop-blur-sm opacity-70 bg-transparent">
      <nav className="max-w-screen-xl mx-auto px-4 flex justify-between">
        <NavLinks
          navItems={navItems}
          className="lg:flex justify-start items-center space-x-1 md:space-x-4 md:py-0 hidden"
        />
        <ul className="flex items-center justify-end space-x-6 w-full">
          <li>
            <ToggleTheme />
          </li>
          <li>
            <SelectLanguage />
          </li>
        </ul>
      </nav>
    </header>
  );
};
