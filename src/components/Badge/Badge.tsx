interface BadgeProps {
  skill: string;
  icon: string;
}

// Styles
import styles from "./Badge.module.css";

export function Badge({ skill, icon }: BadgeProps) {
  return (
    <div className={`${styles.badge} fade`}>
      <img src={icon} alt="Tech icon" />
      <span>{skill}</span>
    </div>
  );
}
