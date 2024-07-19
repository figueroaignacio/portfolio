// i18n
import { useTranslation } from "react-i18next";

// Icons
import { Github } from "../../icons/Github";
import { LinkedIn } from "../../icons/LinkedIn";
import { Mail } from "../../icons/Mail";

// Styles
import styles from "./Contacts.module.css";

// Constants
import { CONTACTS } from "../../constants/contact";

export function Contacts() {
  const { t } = useTranslation();

  return (
    <section className={styles.contactsSection}>
      <h2 className={styles.contactsTitle}>{t("contact.title")}</h2>
      <p>{t("contact.description")}</p>
      <div className={styles.contactsBox}>
        {CONTACTS.map((contact, index) => {
          let iconComponent;
          switch (contact.icon) {
            case "mail":
              iconComponent = <Mail width="32" height="32" />;
              break;
            case "linkedin":
              iconComponent = <LinkedIn width="32" height="32" />;
              break;
            case "github":
              iconComponent = <Github width="32" height="32" />;
              break;
            default:
              iconComponent = null;
          }
          return (
            <a
              href={contact.href}
              target="_blank"
              className={styles.contactsItem}
              key={index}
            >
              {iconComponent}
            </a>
          );
        })}
      </div>
    </section>
  );
}
