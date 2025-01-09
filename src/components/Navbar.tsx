// Hooks
import { useTranslation } from "react-i18next";

// Components
import { Link, useLocation } from "react-router-dom";

// Icons

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
    <header className="sticky inset-0 py-4 z-20 bg-background">
      <div className="flex items-center gap-x-5">
        <nav>
          <ul className="flex md:items-center space-x-5">
            {navItems.map((navItem, index) => (
              <li key={index}>
                <Link
                  to={navItem.href}
                  className={`font-semibold duration-100 ${
                    pathname === navItem.href
                      ? "text-muted underline"
                      : "text-muted-foreground hover:text-muted"
                  }`}
                >
                  {navItem.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
