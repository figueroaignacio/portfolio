// Hooks
import { useTranslation } from "react-i18next";

// Components
import { Seo } from "@/components/Seo";

// Sections
import { Prologe } from "@/sections/Prologe";

// Types
import { Separator } from "@/components/Separator";
import { Testimonies } from "@/sections/Testimonies";

export function About() {
  const { t } = useTranslation();

  return (
    <section>
      <Seo
        title={t("siteConfig.about.title")}
        description={t("siteConfig.about.description")}
      />
      <Prologe />
      <Separator className="my-16" />
      <Testimonies />
    </section>
  );
}
