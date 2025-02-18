// Hooks
import { useTranslation } from "react-i18next";

// Components
import { Seo } from "@/components/Seo";

export function Home() {
  const { t } = useTranslation();

  return (
    <section className="relative mt-6 space-y-4">
      <Seo
        title={t("siteConfig.home.title")}
        description={t("siteConfig.home.description")}
      />
    </section>
  );
}
