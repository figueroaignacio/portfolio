// Hooks
import { useTranslation } from "react-i18next";

// Components
import { Seo } from "@/components/Seo";
import { Separator } from "@/components/Separator";
import { LatestExperience } from "./LatestExperience";

export function About() {
  const { t } = useTranslation();

  const aboutTexts = [
    {
      description: t("pages.about.greeting"),
    },
    {
      description: t("pages.about.intro"),
    },
    {
      description: t("pages.about.expandingKnowledge"),
    },
    {
      description: t("pages.about.collaboration"),
    },
  ];

  return (
    <section className="relative space-y-4">
      <Seo
        title={t("siteConfig.about.title")}
        description={t("siteConfig.about.description")}
      />
      <div className="space-y-4">
        <h1>{t("pages.about.title")}</h1>
        <h2 className="font-bold text-xl">Ignacio Figueroa</h2>
      </div>
      <div className="space-y-5 text-sm text-muted-foreground">
        {aboutTexts.map((text, index) => (
          <p key={index}>{text.description}</p>
        ))}
      </div>
      <Separator className="py-12" />
      <LatestExperience />
    </section>
  );
}
