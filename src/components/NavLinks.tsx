// Hooks
import { useLocation } from "react-router";

// Components
import { TransitionLink } from "./TransitionLink";

// Types
import type { NavItem } from "../lib/definitions";

interface NavLinksProps {
  navItems: NavItem[];
  className?: string;
}

export const NavLinks = ({ navItems, className }: NavLinksProps) => {
  const location = useLocation();

  return (
    <ul className={className}>
      {navItems.map((navItem, index) => {
        const isActive = location.pathname === navItem.href;
        const linkClass =
          "px-3 py-2.5 rounded-2xl transition-colors duration-200 flex flex-col md:flex-row items-center hover:backdrop-brightness-125 hover:bg-slate-200 dark:hover:bg-gray-600/15" +
          (isActive ? "bg-[#dde3eb] dark:bg-gray-600/15" : "");

        return (
          <li key={index} className="relative group">
            <TransitionLink
              to={navItem.href}
              className={linkClass}
              aria-label={navItem.label}
            >
              {navItem.icon}
            </TransitionLink>
            <span className="hidden lg:block absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-card px-4 border border-border py-2 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap text-xs">
              {navItem.label}
            </span>
          </li>
        );
      })}
    </ul>
  );
};
