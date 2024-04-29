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
        <h2>{t("footer.contactTitle")}</h2>
        <ul>
          <li>
            <a href="mailto:ignaciofigueroadev@gmail.com" target="_blank">
              Mail
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/ignacio-figueroa-0a1ba0263/"
              target="_blank"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a href="https://github.com/figueroaignacio" target="_blank">
              Github
            </a>
          </li>
        </ul>
      </div>
      <div>
        <p>{t("footer.builtIn")}</p>
      </div>
    </footer>
  );
}
