// Hooks
import { useTranslation } from "react-i18next";

// Components
import { ExperienceCard } from "../../components/ExperienceCard/ExperienceCard";
import { FramerH2 } from "../../components/Framer";

// Constants
import { FADE_DOWN_ANIMATION_VARIANTS } from "../../constants/animations";

// Styles
import styles from "./Experience.module.css";

type ExperiencePlace = {
  company: string;
  date: string;
  workItems: string[];
  position: string;
};

export function Experience() {
  const { t } = useTranslation();

  const experienceData: ExperiencePlace[] = t("experience.places", {
    returnObjects: true,
  });

  return (
    <section className={styles.experienceBox}>
      <FramerH2
        variants={FADE_DOWN_ANIMATION_VARIANTS}
        className={styles.experienceTitle}
      >
        {t("experience.title")}
      </FramerH2>
      <FramerH2 variants={FADE_DOWN_ANIMATION_VARIANTS}>
        {experienceData.map((place: ExperiencePlace, index: number) => (
          <ExperienceCard
            position={place.position}
            key={index}
            company={place.company}
            date={place.date}
            workItems={place.workItems}
          />
        ))}
      </FramerH2>
    </section>
  );
}
