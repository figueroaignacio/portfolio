// Components

// i18n
import { useTranslation } from "react-i18next";

// Styles
import styles from "./Footer.module.css";

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className={styles.footer}>
      <div>
        <h2>{t("footer.title")}</h2>
        <p>{t("footer.subtitle")}</p>
      </div>
      <div>
        <p>{t("footer.builtIn")}</p>
      </div>
    </footer>
  );
}
