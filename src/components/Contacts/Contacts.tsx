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
        let IconComponent;
        switch (contact.icon) {
          case "mail":
            IconComponent = <Mail />;
            break;
          case "linkedin":
            IconComponent = <LinkedIn />;
            break;
          case "github":
            IconComponent = <Github />;
            break;
          default:
            IconComponent = null;
        }
        return (
          <li key={index}>
            <a
              href={contact.href}
              className={styles.contactItem}
              target="_blank"
            >
              {IconComponent}
            </a>
          </li>
        );
      })}
      <SelectLanguage />
    </ul>
  );
}
