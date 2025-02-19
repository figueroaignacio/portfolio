// Hooks
import { useTranslation } from "react-i18next";

// Components
import { Link } from "react-router-dom";

export function Hero() {
  const { t } = useTranslation();

  return (
    <section className="relative">
      <div className="flex flex-col gap-y-3">
        <div>
          <h1 className="text-xl font-bold">{t("sections.hero.intro")}</h1>
        </div>
        <p className="text-muted-foreground text-sm my-5">
          {t("sections.hero.introduction")}
        </p>
        <div>
          <Link
            className="border border-border px-4 py-2 rounded-md text-xs"
            to="/about"
          >
            {t("sections.hero.ctaButton")} 👉🏽
          </Link>
        </div>
      </div>
    </section>
  );
}
