// Hooks
import { useNavItems } from "../hooks/useNavItems";

// Components
import { NavLinks } from "./NavLinks";

export const MobileNavbar = () => {
  const navItems = useNavItems();

  return (
    <header className="fixed bottom-5 left-0 right-0 z-20 m-2 rounded-2xl backdrop-blur-2xl bg-slate-200/75 dark:bg-[#111317]/20 md:bottom-5 md:flex md:py-4 lg:hidden">
      <nav className="max-w-screen-xl mx-auto px-4">
        <NavLinks
          navItems={navItems}
          className="flex justify-around md:justify-start items-center space-x-1 md:space-x-4 py-5 md:py-0"
        />
      </nav>
    </header>
  );
};
