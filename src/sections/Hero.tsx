// Components
import { Chevron, User } from "@/components/Icons.tsx";
import { Trans, useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export function Hero() {
  const { t } = useTranslation();

  const links: { href: string; label: string; icon: React.ReactNode }[] = [
    {
      label: t("sections.home.links.projects.label"),
      href: "/projects",
      icon: <Chevron />,
    },
    {
      label: t("sections.home.links.about.label"),
      href: "/about",
      icon: <User />,
    },
  ];

  return (
    <div className="min-h-[60dvh] flex flex-col justify-center gap-y-3">
      <h1 className="text-4xl font-bold">{t("sections.home.title")}</h1>
      <h2 className="text-lg">
        <Trans
          i18nKey="sections.home.subtitle"
          components={{ span: <span className="text-accent" /> }}
        />
      </h2>
      <div className="flex gap-x-2">
        {links.map((link, index) => (
          <div key={index}>
            <Link
              to={link.href}
              className="flex items-center gap-2 px-6 py-2 rounded-md text-sm bg-primary hover:bg-primary-foreground duration-100 border-[1px] border-border shadow-md"
            >
              {link.label}
              {link.icon}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
