// Components
import { Badge } from "../Badge/Badge";

// i18n
import { useTranslation } from "react-i18next";

// Styles
import styles from "./Skills.module.css";

type mySkills = {
  skill: string;
  icon: string;
};

export function Skills() {
  const { t } = useTranslation();

  const skills: mySkills[] = t("skills.mySkills", {
    returnObjects: true,
  });

  return (
    <section className={styles.skillsBox}>
      <h2 className={styles.skillsTitle}>{t("skills.title")}</h2>
      <div className={styles.skills}>
        {skills.map((skill: mySkills, index: number) => (
          <div key={index}>
            <Badge skill={skill.skill} icon={skill.icon} />
          </div>
        ))}
      </div>
    </section>
  );
}
