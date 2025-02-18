import type React from "react";
import { useLocation } from "react-router-dom";
import type { NavItem } from "../lib/definitions";
import { TransitionLink } from "./TransitionLink";

interface NavLinksProps {
  navItems: NavItem[];
  className?: string;
}

export const NavLinks: React.FC<NavLinksProps> = ({ navItems, className }) => {
  const location = useLocation();

  return (
    <ul className={className}>
      {navItems.map((navItem, index) => (
        <li key={index}>
          <TransitionLink
            to={navItem.href}
            className={`p-2 rounded-full transition-colors duration-200 flex flex-col md:flex-row items-center ${
              location.pathname === navItem.href ? "" : ""
            }`}
            aria-label={navItem.label}
          >
            {navItem.icon}
          </TransitionLink>
        </li>
      ))}
    </ul>
  );
};
