// Hooks
import { useTranslation } from "react-i18next";

// Components
import { ExperienceCard } from "@/components/ExperienceCard";
import { Seo } from "@/components/Seo";
import { Testimonies } from "@/sections/Testimonies";

// Types
import { Experience } from "@/lib/definitions";

export function LatestExperience() {
  const { t } = useTranslation();

  const experience = t("sections.experience.items", {
    returnObjects: true,
  }) as Experience[];

  return (
    <div>
      <Seo
        description={t("siteConfig.experience.description")}
        title={t("siteConfig.experience.title")}
      />
      <ul>
        {experience.map((item, index) => (
          <li key={index}>
            <ExperienceCard
              responsibilities={item.responsibilities}
              datetime={item.datetime}
              company={item.company}
              role={item.role}
              description={item.description}
              techStack={item.techStack}
            />
          </li>
        ))}
      </ul>
      <div className="mt-12">
        <Testimonies />
      </div>
    </div>
  );
}
