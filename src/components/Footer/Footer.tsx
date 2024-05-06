// i18n
import { useTranslation } from "react-i18next";

// Styles
import styles from "./Footer.module.css";

// Icons
import { Chevron } from "../../icons/Chevron";
import { Github } from "../../icons/Github";
import { LinkedIn } from "../../icons/LinkedIn";
import { Mail } from "../../icons/Mail";

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
              <Mail />
              Mail
            </a>
            <Chevron />
          </li>
          <li className={styles.footerListItem}>
            <a
              href="https://www.linkedin.com/in/ignacio-figueroa-0a1ba0263/"
              target="_blank"
            >
              <LinkedIn />
              LinkedIn
            </a>
            <Chevron />
          </li>
          <li className={styles.footerListItem}>
            <a href="https://github.com/figueroaignacio" target="_blank">
              <Github />
              Github
            </a>
            <Chevron />
          </li>
        </ul>
      </div>
      <div>
        <p>{t("footer.builtIn")}</p>
      </div>
    </footer>
  );
}
