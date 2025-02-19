// Hooks
import { useTranslation } from "react-i18next";

// Components
import { Seo } from "@/components/Seo";
import { Hero } from "@/sections/Hero";
import { LatestNotes } from "@/sections/LatestNotes";
import { LatestProjects } from "@/sections/LatestProjects";

export function Home() {
  const { t } = useTranslation();

  return (
    <section className="relative mt-6 space-y-20">
      <Seo
        title={t("siteConfig.home.title")}
        description={t("siteConfig.home.description")}
      />
      <Hero />
      <LatestNotes />
      <LatestProjects />
    </section>
  );
}
