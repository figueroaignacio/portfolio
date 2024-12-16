// Hooks
import { useTranslation } from "react-i18next";

// Components
import { Seo } from "@/components/Seo";

// Sections
import { CallToAction } from "@/sections/CallToAction";
import { Hero } from "@/sections/Hero";
import { LatestExperience } from "@/sections/LatestExperience";
import { MainProjects } from "@/sections/MainProjects";

export function Home() {
  const { t } = useTranslation();

  return (
    <section className="space-y-14">
      <Seo
        title={t("siteConfig.home.title")}
        description={t("siteConfig.home.description")}
      />
      <Hero />
      <LatestExperience />
      <CallToAction />
      <MainProjects />
    </section>
  );
}
