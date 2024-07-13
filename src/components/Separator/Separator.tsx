// Styles
import { FadeUp } from "../FramerAnimations/FadeUp";
import styles from "./Separator.module.css";

export function Separator() {
  return (
    <FadeUp delay={0.5}>
      <div className={styles.container}>
        <div className={styles.border} />
      </div>
    </FadeUp>
  );
}
