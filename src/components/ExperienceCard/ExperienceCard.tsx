interface ExperienceCardProps {
  company: string;
  workItems: string[];
  date: string;
  position: string;
}

// Styles
import styles from "./ExperienceCard.module.css";

export function ExperienceCard({
  company,
  position,
  date,
  workItems,
}: ExperienceCardProps) {
  return (
    <article className={styles.experienceBox}>
      <header className={styles.experienceInfo}>
        <div>
          <h3 className={styles.experienceTitle}>{company}</h3>
          <h4 className={styles.position}>{position}</h4>
        </div>
        <time className={styles.date} dateTime={date}>
          {date}
        </time>
      </header>
      {workItems.length > 0 && (
        <ul className={styles.experienceWorkItems}>
          {workItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </article>
  );
}
