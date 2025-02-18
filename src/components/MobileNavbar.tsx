import { useNavItems } from "../hooks/useNavItems";
import { NavLinks } from "./NavLinks";

export const MobileNavbar = () => {
  const navItems = useNavItems();

  return (
    <header className="fixed md:sticky md:top-4 bottom-5 left-0 right-0 md:bottom-auto z-20 m-2 rounded-md backdrop-blur-2xl bg-neutral-200/50 dark:bg-[#111317]/20 lg:hidden">
      <nav className="max-w-screen-xl mx-auto px-4">
        <NavLinks
          navItems={navItems}
          className="flex justify-around md:justify-start items-center space-x-1 md:space-x-4 py-5 md:py-0"
        />
      </nav>
    </header>
  );
};
