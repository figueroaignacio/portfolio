// Hooks
import { useTranslation } from "react-i18next";

// Components
import { EducationItem } from "@/components/EducationItem";
import { Seo } from "@/components/Seo";

// Definitions
import { Education } from "@/lib/definitions";

export function EducationPage() {
  const { t } = useTranslation();
  const education = t("pages.education.items", {
    returnObjects: true,
  }) as Education[];

  return (
    <section className="relative space-y-8" id="education">
      <Seo
        title={t("siteConfig.education.title")}
        description={t("siteConfig.education.description")}
      />
      <h2 className="mb-5">{t("pages.education.title")}</h2>
      <div>
        {education.map((item, index) => (
          <EducationItem
            institution={item.institution}
            title={item.title}
            description={item.description}
            endYear={item.endYear}
            key={index}
            startYear={item.startYear}
            status={item.status}
          />
        ))}
      </div>
    </section>
  );
}
