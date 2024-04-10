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
    <article className={styles.experienceCard}>
      <div className={styles.experienceCompany}>
        <h3 className={styles.experienceCompanyName}>{company}</h3>
        <p className={styles.experienceDate}>{date}</p>
      </div>
      <div className={styles.experienceDescriptionBox}>
        <h4>{position}</h4>
        <p>{description}</p>
      </div>
    </article>
  );
}
