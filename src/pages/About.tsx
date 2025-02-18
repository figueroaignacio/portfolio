// Hooks
import { useTranslation } from "react-i18next";

// Components
import { Seo } from "@/components/Seo";
import { Separator } from "@/components/Separator";
import { LatestExperience } from "./LatestExperience";

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
    <section className="relative mt-6 space-y-4">
      <Seo
        title={t("siteConfig.about.title")}
        description={t("siteConfig.about.description")}
      />
      <div className="space-y-4">
        <h1>{t("pages.about.title")}</h1>
        <h2 className="font-bold text-xl">Ignacio Figueroa</h2>
      </div>
      <div className="space-y-5 text-sm text-muted-foreground">
        <p>{t("pages.about.greeting")}</p>
        <p>{t("pages.about.intro")}</p>
        <p>{t("pages.about.expandingKnowledge")}</p>
        <p>{t("pages.about.collaboration")}</p>
      </div>
      <Separator className="py-12" />
      <LatestExperience />
    </section>
  );
}
