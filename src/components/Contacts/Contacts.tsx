import { Github } from "../../icons/Github";
import { LinkedIn } from "../../icons/LinkedIn";
import { Mail } from "../../icons/Mail";

import styles from "./Contacts.module.css";

import { CONTACTS } from "../../constants/contact";

export function Contacts() {
  return (
    <section className={styles.contactsSection}>
      <h2 className={styles.contactsTitle}>Contacto</h2>
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
