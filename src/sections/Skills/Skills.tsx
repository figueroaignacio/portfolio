// Components
import { Badge } from "../../components/Badge/Badge";

// i18n
import { useTranslation } from "react-i18next";

// Styles
import styles from "./Skills.module.css";

type mySkills = {
  skill: string;
  icon: string;
};

const skills = [
  { skill: "HTML", icon: "/icons/html.svg" },
  { skill: "Markdown", icon: "/icons/markdown.svg" },
  { skill: "CSS", icon: "/icons/css.svg" },
  { skill: "Material UI", icon: "/icons/mui.svg" },
  { skill: "Tailwind", icon: "/icons/tailwind.svg" },
  { skill: "CSS Modules", icon: "/icons/css.svg" },
  { skill: "Typescript", icon: "/icons/ts.svg" },
  { skill: "Javascript", icon: "/icons/js.svg" },
  { skill: "React", icon: "/icons/react.svg" },
  { skill: "Next.js", icon: "/icons/nextjs.svg" },
  { skill: "Astro", icon: "/icons/astro.svg" },
  { skill: "Sanity", icon: "/icons/sanity.svg" },
  { skill: "Git", icon: "/icons/git.svg" },
  { skill: "GitHub", icon: "/icons/github.svg" },
  { skill: "Visual Studio Code", icon: "/icons/vscode.svg" },
];

export function Skills() {
  const { t } = useTranslation();

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
