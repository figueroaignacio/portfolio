// Hooks
import { useTranslation } from "react-i18next";

// Components
import { ExperienceCard } from "@/components/ExperienceCard";

// Types
import { Experience } from "@/types/types";

export function LatestExperience() {
  const { t } = useTranslation();
  const experience = t("sections.experience.items", {
    returnObjects: true,
  }) as Experience[];

  return (
    <section>
      <h2 className="font-bold text-xl">{t("sections.experience.title")}</h2>
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
    </section>
  );
}
