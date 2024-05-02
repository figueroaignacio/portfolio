// Components
import { SelectLanguage } from "../SelectLanguage/SelectLanguage";

// Icons
import { Github } from "../../icons/Github";
import { LinkedIn } from "../../icons/LinkedIn";
import { Mail } from "../../icons/Mail";

// Styles
import style from "./Contacts.module.css";

export function Contacts() {
  return (
    <div className={style.contactsBox}>
      <a
        href="mailto:figueroaignaciodev@gmail.com"
        target="_blank"
        className={style.contactItem}
      >
        <Mail />
      </a>
      <a
        href="https://www.linkedin.com/in/ignacio-figueroa-0a1ba0263/"
        target="_blank"
        className={style.contactItem}
      >
        <LinkedIn />
      </a>
      <a
        href="https://github.com/figueroaignacio/"
        target="_blank"
        className={style.contactItem}
      >
        <Github />
      </a>
      <SelectLanguage />
    </div>
  );
}
