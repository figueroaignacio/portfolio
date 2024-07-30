// i18n
import { useTranslation } from "react-i18next";

// Components
import { FramerSection } from "../../components/Framer";

// Constants
import { FADE_DOWN_ANIMATION_VARIANTS } from "../../constants/animations";

// Styles
import styles from "./About.module.css";

export function About() {
  const { t } = useTranslation();

  return (
    <FramerSection
      className={styles.aboutBox}
      variants={FADE_DOWN_ANIMATION_VARIANTS}
    >
      <h2 className={styles.aboutTitle}>{t("aboutMe.title")}</h2>
      <p>{t("aboutMe.description")}</p>
    </FramerSection>
  );
}
