// Components
import { ExperienceCard } from "../../components/ExperienceCard/ExperienceCard";

// i18n
import { useTranslation } from "react-i18next";

// Styles
import styles from "./Experience.module.css";

type ExperiencePlace = {
  company: string;
  date: string;
  description: string;
  position: string;
};

export function Experience() {
  const { t } = useTranslation();
  const experienceData: ExperiencePlace[] = t("experience.places", {
    returnObjects: true,
  });

  return (
    <section className={styles.experienceBox}>
      <h2 className={styles.experienceTitle}>{t("experience.title")}</h2>
      <div>
        {experienceData.map((place: ExperiencePlace, index: number) => (
          <ExperienceCard
            position={place.position}
            key={index}
            company={place.company}
            date={place.date}
            description={place.description}
          />
        ))}
      </div>
    </section>
  );
}
