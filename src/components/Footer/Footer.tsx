// i18n
import { useTranslation } from "react-i18next";

// Styles
import styles from "./Footer.module.css";

// Constants
import { CONTACTS } from "../../constants/contact";

// Icons
import { Chevron } from "../../icons/Chevron";

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
          {CONTACTS.map((item, index: number) => (
            <li key={index} className={styles.footerListItem}>
              <a href={item.href} target="_blank">
                {item.title}
              </a>
              <Chevron />
            </li>
          ))}
        </ul>
      </div>
      <div>
        <p>{t("footer.builtIn")}</p>
      </div>
    </footer>
  );
}
