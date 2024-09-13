// Hooks
import { useTranslation } from "react-i18next";

// Components
import { FramerDiv, FramerH2, FramerParagraph } from "../Framer";

// Icons
import { Github } from "../../icons/Github";
import { LinkedIn } from "../../icons/LinkedIn";
import { Mail } from "../../icons/Mail";

// Styles
import styles from "./Contacts.module.css";

// Constants
import { FADE_DOWN_ANIMATION_VARIANTS } from "../../constants/animations";
import { CONTACTS } from "../../constants/contact";

export function Contacts() {
  const { t } = useTranslation();

  return (
    <section className={styles.contactsSection}>
      <FramerH2
        variants={FADE_DOWN_ANIMATION_VARIANTS}
        className={styles.contactsTitle}
      >
        {t("contact.title")}
      </FramerH2>
      <FramerParagraph variants={FADE_DOWN_ANIMATION_VARIANTS}>
        {t("contact.description")}
      </FramerParagraph>
      <FramerDiv
        className={styles.contactsBox}
        variants={FADE_DOWN_ANIMATION_VARIANTS}
      >
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
      </FramerDiv>
    </section>
  );
}
