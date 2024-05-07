// Components
import { SelectLanguage } from "../SelectLanguage/SelectLanguage";

// Icons
import { Github } from "../../icons/Github";
import { LinkedIn } from "../../icons/LinkedIn";
import { Mail } from "../../icons/Mail";

// Styles
import styles from "./Contacts.module.css";

// Constants
import { CONTACTS } from "../../constants/contact";

export function Contacts() {
  return (
    <ul className={styles.contactsBox}>
      {CONTACTS.map((contact, index) => {
        let iconComponent;
        switch (contact.icon) {
          case "mail":
            iconComponent = <Mail />;
            break;
          case "linkedin":
            iconComponent = <LinkedIn />;
            break;
          case "github":
            iconComponent = <Github />;
            break;
          default:
            iconComponent = null;
        }
        return (
          <li key={index}>
            <a
              href={contact.href}
              className={styles.contactItem}
              target="_blank"
            >
              {iconComponent}
            </a>
          </li>
        );
      })}
      <SelectLanguage />
    </ul>
  );
}
