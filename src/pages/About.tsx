// Hooks
import { useTranslation } from "react-i18next";

// Components
import { AboutCard } from "@/components/AboutCard";
import { Seo } from "@/components/Seo";

export function About() {
  const { t } = useTranslation();

  const aboutSections = [
    {
      title: t("pages.about.title"),
      description: t("pages.about.greeting"),
    },
    {
      title: t("pages.about.whatIUse"),
      description: t("pages.about.intro"),
    },
    {
      title: t("pages.about.myAspirations"),
      description: t("pages.about.collaboration"),
    },
  ];

  return (
    <section>
      <Seo
        title={t("siteConfig.about.title")}
        description={t("siteConfig.about.description")}
      />
      {aboutSections.map((section, index) => (
        <AboutCard
          key={index}
          title={section.title}
          description={section.description}
        />
      ))}
    </section>
  );
}
