interface BadgeProps {
  skill: string;
}

// Styles
import styles from "./Badge.module.css";

export function Badge({ skill }: BadgeProps) {
  return (
    <div className={styles.badge}>
      <span>{skill}</span>
    </div>
  );
}
