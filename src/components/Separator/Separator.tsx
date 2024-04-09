// Styles
import styles from "./Separator.module.css";

export function Separator() {
  return (
    <div className={styles.container}>
      <div className={styles.border} />
      <span className={styles.content}>O</span>
      <div className={styles.border} />
    </div>
  );
}
