// Components
import { Contacts } from "../Contacts/Contacts";

// i18n
import { useTranslation } from "react-i18next";

// Icons
import World from "../../icons/World";

// Styles
import style from "./Hero.module.css";

export function Hero() {
  const { t } = useTranslation();

  return (
    <section className={style.heroSection}>
      <div>
        <h1 className={style.heroTitle}>{t("hero.title")}</h1>
        <p>{t("hero.description")}</p>
      </div>
      <div className={style.heroLocation}>
        <World />
        <span>{t("hero.location")}</span>
      </div>
      <Contacts />
    </section>
  );
}
