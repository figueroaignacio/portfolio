// Components
import { Badge } from "../Badge/Badge";

// i18n
import { useTranslation } from "react-i18next";

// Styles
import styles from "./Skills.module.css";

export function Skills() {
  const { t } = useTranslation();

  const skills: string[] = t("skills.mySkills", {
    returnObjects: true,
  });

  return (
    <section className={styles.skillsBox}>
      <h2 className={styles.skillsTitle}>{t("skills.title")}</h2>
      <div className={styles.skills}>
        {skills.map((skill: string, index: number) => (
          <div key={index}>
            <Badge skill={skill} />
          </div>
        ))}
      </div>
    </section>
  );
}
