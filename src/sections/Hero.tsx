// Components
import { useTranslation } from "react-i18next";

export function Hero() {
  const { t } = useTranslation();

  return (
    <section className="relative">
      <div className="px-5 space-y-5">
        <div>
          <h1 className="text-3xl font-bold">Ignacio Figueroa</h1>
          <p className="text-thin text-muted-foreground">Fullstack Developer</p>
        </div>
        <p className="text-muted-foreground text-sm">
          {t("sections.hero.introduction")}
        </p>
      </div>
    </section>
  );
}
