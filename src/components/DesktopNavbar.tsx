import { useNavItems } from "../hooks/useNavItems";
import { NavLinks } from "./NavLinks";
import { SelectLanguage } from "./SelectLanguage";
import { ToggleTheme } from "./ToggleTheme";

export const DesktopNavbar = () => {
  const navItems = useNavItems();

  return (
    <header className="sticky shadow-lg md:shadow-none z-50 my-3 rounded-md backdrop-blur-sm bg-transparent px-3 lg:px-0">
      <nav className="max-w-screen-xl mx-auto flex justify-between">
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
