// Component
import { ProjectCard } from "../../components/ProjectCard/ProjectCard";

// i18n
import { useTranslation } from "react-i18next";

// Styles
import styles from "./Projects.module.css";

type MyProjects = {
  name: string;
  description: string;
  github: string;
  technologies: string[];
  url: string;
};

export function Projects() {
  const { t } = useTranslation();

  const projectsData: MyProjects[] = t("projects.myProjects", {
    returnObjects: true,
  });

  return (
    <section className={styles.projectsSection}>
      <h2 className={styles.projectsSectionTitle}>{t("projects.title")}</h2>
      <div className={styles.projectsBox}>
        {projectsData.map((project: MyProjects, index: number) => (
          <div key={index}>
            <ProjectCard
              description={project.description}
              name={project.name}
              github={project.github}
              url={project.url}
              technologies={project.technologies}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
