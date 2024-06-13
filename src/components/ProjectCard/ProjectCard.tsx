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
  image,
}: ProjectCardProps) {
  return (
    <>
      <img src={image} alt="Image project" className={styles.projectImage} />
      <a
        href={url}
        title={name}
        className={`${styles.projectCard}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <h3 className={styles.projectsName}>{name}</h3>
        <p className={styles.projectDescription}>{description}</p>
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
    </>
  );
}
