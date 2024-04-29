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
        <p>{t("footer.paragraph")}</p>
      </div>
      <div>
        <h2 className={styles.footerTitle}>{t("footer.contactTitle")}</h2>
        <ul className={styles.footerList}>
          <li className={styles.footerListItem}>
            <a href="mailto:ignaciofigueroadev@gmail.com" target="_blank">
              Mail
            </a>
            <img src="/icons/chevron.svg" alt="" />
          </li>
          <li className={styles.footerListItem}>
            <a
              href="https://www.linkedin.com/in/ignacio-figueroa-0a1ba0263/"
              target="_blank"
            >
              LinkedIn
            </a>
            <img src="/icons/chevron.svg" alt="" />
          </li>
          <li className={styles.footerListItem}>
            <a href="https://github.com/figueroaignacio" target="_blank">
              Github
            </a>
            <img src="/icons/chevron.svg" alt="" />
          </li>
        </ul>
      </div>
      <div>
        <p>{t("footer.builtIn")}</p>
      </div>
    </footer>
  );
}
