// i18n
import { useTranslation } from "react-i18next";

// Icons
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
          <Mail width="16" height="16" />
          {t("callToAction.button")}
        </a>
      </div>
    </section>
  );
}
