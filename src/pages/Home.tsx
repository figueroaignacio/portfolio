import React from "react";

// Hooks
import { useTranslation } from "react-i18next";

// Components
import { Link } from "react-router-dom";

// Icons
import { Chevron, User } from "@/components/Icons.tsx";

export function Home() {
  const { t } = useTranslation()

  const links: { href: string, label: string, icon: React.ReactNode }[] = [
    {
      href: "/projects",
      label: "Projects",
      icon: <Chevron />,
    },
    {
      href: "/about",
      label: "About me",
      icon: <User />,
    }
  ]

  return (
    <section className="min-h-[85dvh] flex flex-col justify-center gap-y-3">
      <h1 className="text-4xl font-bold">
        {t("sections.home.title")}
      </h1>
      <h2 className="text-muted-foreground">{t("sections.home.subtitle")}</h2>
      <div className="flex gap-x-2">
        {links.map((link, index) => (
          <Link
            key={index}
            to={link.href}
            className="flex items-center gap-2 px-6 py-2 rounded-md text-sm bg-primary hover:bg-primary-foreground duration-100 border-[1px] border-border">
            {link.label}
            {link.icon}
          </Link>
        ))}
      </div>
    </section>
  )
}