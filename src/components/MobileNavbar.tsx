// Hooks
import { useNavItems } from "../hooks/useNavItems";

// Components
import { NavLinks } from "./NavLinks";

export const MobileNavbar = () => {
  const navItems = useNavItems();

  return (
    <nav className="fixed bottom-2 left-0 right-0 z-20 mx-2 rounded-2xl backdrop-blur-2xl bg-slate-[#dde3ea] dark:bg-[#111317]/20 md:py-4 md:hidden">
      <div className="max-w-screen-xl mx-auto px-4">
        <NavLinks
          navItems={navItems}
          className="flex justify-around md:justify-start items-center space-x-1 md:space-x-4 py-5 md:py-0"
        />
      </div>
    </nav>
  );
};
