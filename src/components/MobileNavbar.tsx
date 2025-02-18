import { useNavItems } from "../hooks/useNavItems";
import { NavLinks } from "./NavLinks";

export const MobileNavbar = () => {
  const navItems = useNavItems();

  return (
    <header className="fixed md:sticky md:top-4 bottom-5 left-0 right-0 md:bottom-auto shadow-lg md:shadow-none z-50 bg-card m-2 rounded-md backdrop-blur-sm opacity-70 lg:bg-transparent lg:hidden">
      <nav className="max-w-screen-xl mx-auto px-4">
        <NavLinks
          navItems={navItems}
          className="flex justify-around md:justify-start items-center space-x-1 md:space-x-4 py-5 md:py-0"
        />
      </nav>
    </header>
  );
};
