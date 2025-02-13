// Hooks
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";

// Components
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
        <ul className="flex items-start justify-evenly">
          {navItems.map((navItem, index) => (
            <li key={index}>
              <TransitionLink
                to={navItem.href}
                className={`text-xs px-6 py-2 lg:text-sm  ${
                  pathname === navItem.href
                    ? "bg-gray-200 dark:bg-card rounded-sm w-full"
                    : ""
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
