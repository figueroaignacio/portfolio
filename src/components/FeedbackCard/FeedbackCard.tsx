interface FeedbackCardProps {
  avatar?: string;
  name: string;
  role: string;
  description: string;
}

// Styles
import styles from "./FeedbackCard.module.css";

export function FeedbackCard({
  avatar,
  description,
  name,
  role,
}: FeedbackCardProps) {
  return (
    <div className={`${styles.feedbackCard} fade`}>
      <div className={styles.feedbackProfile}>
        <img src={avatar} alt={name} className={styles.feedbackAvatar} />
        <div>
          <h3>{name}</h3>
          <span>{role}</span>
        </div>
      </div>
      <p>{description}</p>
    </div>
  );
}
