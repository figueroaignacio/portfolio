// i18n
import { useTranslation } from "react-i18next";

// Icons
import { LinkedIn } from "../../icons/LinkedIn";
import { Mail } from "../../icons/Mail";

// Styles
import styles from "./CTA.module.css";

export function CTA() {
  const { t } = useTranslation();

  return (
    <section className={styles.section}>
      <div>
        <h2 className={styles.title}>{t("callToAction.title")}</h2>
        <h3>{t("callToAction.subtitle")}</h3>
      </div>
      <div className={styles.buttonGroup}>
        <a href="mailto:ignaciofigueroadev@gmail.com" className={styles.button}>
          <Mail />
          Mail
        </a>
        <a
          href="https://www.linkedin.com/in/ignacio-figueroa-0a1ba0263/"
          className={styles.button}
          target="_blank"
        >
          <LinkedIn />
          LinkedIn
        </a>
      </div>
    </section>
  );
}
