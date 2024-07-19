// Components
import { FadeUp } from "../../components/FramerAnimations/FadeUp";
import { SelectLanguage } from "../../components/SelectLanguage/SelectLanguage";

// i18n
import { useTranslation } from "react-i18next";

// Icons
import { Location } from "../../icons/Location";

// Styles
import style from "./Hero.module.css";

export function Hero() {
  const { t } = useTranslation();

  return (
    <section className={style.heroSection}>
      <div>
        <FadeUp delay={0.3}>
          <h1 className={style.heroTitle}>{t("hero.title")}</h1>
        </FadeUp>
        <FadeUp delay={0.4}>
          <p>{t("hero.description")}</p>
        </FadeUp>
      </div>
      <FadeUp delay={0.5}>
        <div className={style.heroLocation}>
          <div className={style.heroLocationBox}>
            <Location />
            <address>
              <span>{t("hero.location")}</span>
            </address>
          </div>
          <SelectLanguage />
        </div>
      </FadeUp>
    </section>
  );
}
