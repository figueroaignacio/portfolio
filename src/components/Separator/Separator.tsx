// Components
import { FramerDiv } from "../Framer";

// Constants
import { FADE_DOWN_ANIMATION_VARIANTS } from "../../constants/animations";

// Styles
import styles from "./Separator.module.css";

export function Separator() {
  return (
    <FramerDiv
      variants={FADE_DOWN_ANIMATION_VARIANTS}
      className={styles.container}
    >
      <div className={styles.border} />
    </FramerDiv>
  );
}
