// Hooks
import { useTranslation } from "react-i18next";

// Components
import { Link, useLocation } from "react-router-dom";

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
    <header className="sticky mb-10 top-4 px-2 lg:flex lg:justify-normal lg:px-0">
      <nav className="border border-border rounded-md backdrop-blur-2xl px-7 py-2">
        <ul className="flex items-start gap-12 justify-around">
          {navItems.map((navItem, index) => (
            <li key={index}>
              <Link
                to={navItem.href}
                className={`text-sm duration-100 ${
                  pathname === navItem.href ? "underline" : ""
                }`}
              >
                {navItem.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
