// Hooks
import { useTranslation } from "react-i18next";

// Components
import { CVCallToAction } from "@/components/CVCallToAction";
import { Seo } from "@/components/Seo";
import { Separator } from "@/components/Separator";
import { LatestExperience } from "@/pages/LatestExperience";
import { Prologe } from "@/sections/Prologe";
import { Stack } from "@/sections/Stack";
import { Testimonies } from "@/sections/Testimonies";

export function AboutPage() {
  const { t } = useTranslation();

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
      <Prologe />
      <Separator className="py-12" />
      <LatestExperience />
      <Separator className="py-12" />
      <CVCallToAction />
      <Separator className="py-12" />
      <Testimonies />
      <Separator className="py-12" />
      <Stack />
    </section>
  );
}
