// Components
import { ActiveToWork } from "../../components/ActiveToWork/ActiveToWork";
import {
  FramerDiv,
  FramerH1,
  FramerH2,
  FramerParagraph,
} from "../../components/Framer";
import { SelectLanguage } from "../../components/SelectLanguage/SelectLanguage";

// Hooks
import { useTranslation } from "react-i18next";

// Icons
import { Location } from "../../icons/Location";

// Constants
import {
  FADE_DOWN_ANIMATION_VARIANTS,
  FADE_LEFT_ANIMATION_VARIANTS,
} from "../../constants/animations";

// Styles
import style from "./Hero.module.css";

export function Hero() {
  const { t } = useTranslation();

  return (
    <section className={style.heroSection}>
      <SelectLanguage />
      <ActiveToWork />
      <div>
        <FramerH1
          className={style.heroTitle}
          variants={FADE_LEFT_ANIMATION_VARIANTS}
        >
          {t("hero.title")}
        </FramerH1>
        <FramerH2 variants={FADE_LEFT_ANIMATION_VARIANTS}>
          {t("hero.subtitle")}
        </FramerH2>
        <FramerParagraph
          variants={FADE_DOWN_ANIMATION_VARIANTS}
          className={style.heroDescription}
        >
          {t("hero.description")}
        </FramerParagraph>
      </div>
      <FramerDiv
        className={style.heroLocation}
        variants={FADE_DOWN_ANIMATION_VARIANTS}
      >
        <div className={style.heroLocationBox}>
          <Location />
          <address>
            <span>{t("hero.location")}</span>
          </address>
        </div>
      </FramerDiv>
    </section>
  );
}
