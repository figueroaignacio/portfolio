// Components

// i18n
import { useTranslation } from "react-i18next";

// Icons
import { LinkedIn } from "../../icons/LinkedIn";
import { Mail } from "../../icons/Mail";

// Styles
import styles from "./CallToAction.module.css";

export function CallToAction() {
  const { t } = useTranslation();

  return (
    <section className={styles.section}>
      <div>
        <h2 className={styles.title}>{t("callToAction.title")}</h2>
        <h3>{t("callToAction.subtitle")}</h3>
      </div>
      <div className={styles.buttonGroup}>
        <a href="" className={styles.button}>
          <Mail />
          Mail
        </a>
        <a href="" className={styles.button}>
          <LinkedIn />
          LinkedIn
        </a>
      </div>
    </section>
  );
}
