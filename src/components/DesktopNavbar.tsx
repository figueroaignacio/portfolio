// Hooks
import { useNavItems } from "../hooks/useNavItems";

// Components
import { NavLinks } from "./NavLinks";
import { SelectLanguage } from "./SelectLanguage";
import { ToggleTheme } from "./ToggleTheme";

export const DesktopNavbar = () => {
  const navItems = useNavItems();

  return (
    <header className="sticky top-0 left-0 px-3 py-3 lg:px-0 backdrop-blur-sm z-20 border-b border-border border-dashed">
      <nav className="max-w-3xl mx-auto flex justify-between">
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
