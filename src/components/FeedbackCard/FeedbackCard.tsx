interface FeedbackCardProps {
  avatar?: string;
  name: string;
  role: string;
  description: string;
  linkedInProfile: string;
}

// Icons
import { Chevron } from "../../icons/Chevron";
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
            <h3>{name}</h3>
            <span>{role}</span>
          </div>
        </div>
        <Quotes />
      </div>
      <p>{description}</p>
      <a href={linkedInProfile} target="_blank" className={styles.feedbackLink}>
        <span>See LinkedIn Profile</span>
        <Chevron />
      </a>
    </div>
  );
}
