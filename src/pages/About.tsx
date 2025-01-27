// Hooks
import { useTranslation } from "react-i18next";

// Components
import { AboutCard } from "@/components/AboutCard";
import { Seo } from "@/components/Seo";

// Sections

// Types

export function About() {
  const { t } = useTranslation();

  return (
    <section>
      <Seo
        title={t("siteConfig.about.title")}
        description={t("siteConfig.about.description")}
      />
      {Array.from({ length: 3 }).map((_, index) => (
        <div key={index}>
          <AboutCard />
        </div>
      ))}
    </section>
  );
}
