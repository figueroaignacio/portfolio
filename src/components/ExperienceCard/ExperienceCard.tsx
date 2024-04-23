// Icons
import { Building } from "../../icons/Building";

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
        <div className={styles.experienceCompanyBox}>
          <Building />
          <h3 className={styles.experienceCompanyName}>{company}</h3>
        </div>
        <p className={styles.experienceDate}>{date}</p>
      </div>
      <h4 className={styles.experiencePosition}>{position}</h4>
      <div className={styles.experienceDescriptionBox}>
        <p className={styles.experienceDescription}>{description}</p>
      </div>
    </article>
  );
}
