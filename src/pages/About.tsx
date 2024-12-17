// Hooks
import { useTranslation } from "react-i18next";

// Components
import { Seo } from "@/components/Seo";

// Sections
import { Contacts } from "@/sections/Contacts";
import { Prologe } from "@/sections/Prologe";
import { Stack } from "@/sections/Stack";

// Types
import { Testimonies } from "@/sections/Testimonies";

export function About() {
  const { t } = useTranslation();

  return (
    <section className="min-h-[60dvh] flex flex-col justify-center gap-10">
      <Seo
        title={t("siteConfig.about.title")}
        description={t("siteConfig.about.description")}
      />
      <Prologe />
      <Contacts />
      <Testimonies />
      <Stack />
    </section>
  );
}
