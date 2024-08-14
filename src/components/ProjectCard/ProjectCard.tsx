// Icons
import { Github } from "../../icons/Github";
import { Link } from "../../icons/Link";

// Styles
import styles from "./ProjectCard.module.css";

interface ProjectCardProps {
  name: string;
  description: string;
  github: string;
  technologies: string[];
  url: string;
  image: string;
}

export function ProjectCard({
  description,
  github,
  name,
  url,
  technologies,
}: ProjectCardProps) {
  return (
    <div className={styles.projectCard}>
      <h3 className={styles.projectsName}>{name}</h3>
      <p className={styles.projectDescription}>{description}</p>
      <div className={styles.projectSkills}>
        {technologies.map((tech) => (
          <div key={tech} className={styles.projectSkill}>
            <span>{tech}</span>
          </div>
        ))}
      </div>
      <div className={styles.projectUrls}>
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          title="Github"
          className={styles.projectUrl}
        >
          <Github width="20" height="20" />
          <span>Source Code</span>
        </a>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          title="Live Site"
          className={styles.projectUrl}
        >
          <Link width="20" height="20" />
          <span>Live Site</span>
        </a>
      </div>
    </div>
  );
}
