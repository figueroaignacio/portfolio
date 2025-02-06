// Hooks
import { useTranslation } from "react-i18next";

// Components
import { useLocation } from "react-router-dom";
import { TransitionLink } from "./TransitionLink";

type NavItem = {
  label: string;
  href: string;
};

export function Navbar() {
  const { t } = useTranslation();
  const navItems = t("ui.navigation", { returnObjects: true }) as NavItem[];

  const location = useLocation();
  const pathname = location.pathname;

  return (
    <header className="sticky top-4">
      <nav className="border border-border rounded-md backdrop-blur-2xl px-3 py-2">
        <ul className="flex items-start gap-12 justify-around">
          {navItems.map((navItem, index) => (
            <li key={index}>
              <TransitionLink
                to={navItem.href}
                className={`hover:underline text-xs lg:text-sm ${
                  pathname === navItem.href ? "underline" : ""
                }`}
              >
                {navItem.label}
              </TransitionLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
