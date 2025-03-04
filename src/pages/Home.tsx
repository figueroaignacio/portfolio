// Hooks
import { useTranslation } from "react-i18next";

// Components
import { Seo } from "@/components/Seo";
import { Contact } from "@/sections/Contact";
import { Hero } from "@/sections/Hero";
import { LatestNotes } from "@/sections/LatestNotes";
import { LatestProjects } from "@/sections/LatestProjects";

export function HomePage() {
  const { t } = useTranslation();

  return (
    <section className="relative space-y-20">
      <Seo
        title={t("siteConfig.home.title")}
        description={t("siteConfig.home.description")}
      />
      <Hero />
      <LatestNotes />
      <LatestProjects />
      <Contact />
    </section>
  );
}
