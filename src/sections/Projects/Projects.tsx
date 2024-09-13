// Hooks
import { useTranslation } from "react-i18next";

// Components
import { FramerDiv, FramerH2 } from "../../components/Framer";
import { ProjectCard } from "../../components/ProjectCard/ProjectCard";

// Constants
import { FADE_DOWN_ANIMATION_VARIANTS } from "../../constants/animations";

// Styles
import styles from "./Projects.module.css";

type MyProjects = {
  name: string;
  description: string;
  github: string;
  technologies: string[];
  url: string;
  image: string;
  status: string;
};

export function Projects() {
  const { t } = useTranslation();

  const projectsData: MyProjects[] = t("projects.myProjects", {
    returnObjects: true,
  });

  return (
    <section className={styles.projectsSection}>
      <FramerH2
        className={styles.projectsSectionTitle}
        variants={FADE_DOWN_ANIMATION_VARIANTS}
      >
        {t("projects.title")}
      </FramerH2>
      <div className={styles.projectsBox}>
        {projectsData.map((project: MyProjects, index: number) => (
          <FramerDiv key={index} variants={FADE_DOWN_ANIMATION_VARIANTS}>
            <ProjectCard
              description={project.description}
              name={project.name}
              github={project.github}
              url={project.url}
              technologies={project.technologies}
              image={project.image}
              disabled={project.status === "Project in mind"}
            />
          </FramerDiv>
        ))}
      </div>
    </section>
  );
}
