// Hooks
import { useTranslation } from "react-i18next";

// Components
import { EducationItem } from "@/components/EducationItem";
import { Seo } from "@/components/Seo";

// Definitions
import { Education } from "@/lib/definitions";
import { Certifications } from "@/sections/Certifications";

export function EducationPage() {
  const { t } = useTranslation();
  const education = t("pages.education.items", {
    returnObjects: true,
  }) as Education[];

  return (
    <section className="relative space-y-12" id="education">
      <Seo
        title={t("siteConfig.education.title")}
        description={t("siteConfig.education.description")}
      />
      <h2 className="mb-5">{t("pages.education.title")}</h2>
      <ul className="space-y-12">
        {education.map((item, index) => (
          <li key={index}>
            <EducationItem
              institution={item.institution}
              title={item.title}
              description={item.description}
              endYear={item.endYear}
              startYear={item.startYear}
              status={item.status}
            />
          </li>
        ))}
      </ul>
      <Certifications />
    </section>
  );
}
