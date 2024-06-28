interface FeedbackCardProps {
  avatar?: string;
  name: string;
  role: string;
  description: string;
  linkedInProfile: string;
}

// Icons
import { Quotes } from "../../icons/Quotes";

// Styles
import styles from "./FeedbackCard.module.css";

export function FeedbackCard({
  avatar,
  description,
  name,
  role,
  linkedInProfile,
}: FeedbackCardProps) {
  return (
    <div className={`${styles.feedbackCard} fade`}>
      <div className={styles.feedbackBox}>
        <div className={styles.feedbackProfile}>
          <img src={avatar} alt={name} className={styles.feedbackAvatar} />
          <div>
            <a
              href={linkedInProfile}
              target="_blank"
              className={styles.feedbackLink}
              title="Go to LinkedIn profile"
            >
              <h3>{name}</h3>
            </a>
            <span>{role}</span>
          </div>
        </div>
        <Quotes />
      </div>
      <p className={styles.feedbackContent}>{description}</p>
    </div>
  );
}
