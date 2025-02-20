import type { NavItem } from "../lib/definitions";
import { TransitionLink } from "./TransitionLink";

interface NavLinksProps {
  navItems: NavItem[];
  className?: string;
}

export const NavLinks = ({ navItems, className }: NavLinksProps) => {
  return (
    <ul className={className}>
      {navItems.map((navItem, index) => (
        <li key={index} className="relative group">
          <TransitionLink
            to={navItem.href}
            className="p-2 rounded-full transition-colors duration-200 flex flex-col md:flex-row items-center"
            aria-label={navItem.label}
          >
            {navItem.icon}
          </TransitionLink>
          <span className="hidden lg:block absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-card px-4 border border-border py-2 rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap text-xs">
            {navItem.label}
          </span>
        </li>
      ))}
    </ul>
  );
};
