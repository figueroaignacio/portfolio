// Components

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
}

export function ProjectCard({
  description,
  github,
  name,
  url,
  technologies,
}: ProjectCardProps) {
  return (
    <a
      href={url}
      title={name}
      className={`${styles.projectCard} fade`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <h3 className={styles.projectsName}>{name}</h3>
      <p>{description}</p>
      {technologies.map((tech) => (
        <div>
          Tech Stack: <span>{tech}</span>
        </div>
      ))}
      <div className={styles.projectUrls}>
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          title="Github"
        >
          <Github />
        </a>
        <a href={url} title="Live URL">
          <Link />
        </a>
      </div>
    </a>
  );
}
