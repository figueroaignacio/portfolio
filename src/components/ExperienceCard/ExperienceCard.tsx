// Icons

// Interface
interface ExperienceCardProps {
  company: string;
  description: string;
  date: string;
  position: string;
}

// Styles
import styles from "./ExperienceCard.module.css";

export function ExperienceCard({
  date,
  description,
  company,
  position,
}: ExperienceCardProps) {
  return (
    <div className={styles.content}>
      <div className={styles.box}>
        <div>
          <h3 className={styles.experienceCompany}>{company}</h3>
          <h2>{position}</h2>
        </div>
        <span>{date}</span>
        <p>{description}</p>
      </div>
    </div>
  );
}
