// Hooks
import { useTranslation } from "react-i18next";

// Components
import { TransitionLink } from "@/components/TransitionLink";
import { WorkStatus } from "@/components/WorkStatus";

export function Hero() {
  const { t } = useTranslation();

  return (
    <section className="relative space-y-5">
      <div className="flex flex-col gap-y-3">
        <h1 className="text-xl font-bold">
          {t("sections.hero.intro")}{" "}
          <span className="inline-block animate-wave">👋🏽</span>
        </h1>
        <p className="text-muted-foreground text-sm my-5 leading-6">
          {t("sections.hero.introduction")}
        </p>
        <div className="flex flex-wrap gap-y-5 items-center gap-x-2">
          <TransitionLink
            className="group border border-border px-4 py-2 rounded-2xl text-xs"
            to="/about"
          >
            {t("sections.hero.ctaButton")}
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1 group-hover:rotate-12 ml-2">
              👉🏽
            </span>
          </TransitionLink>
          <WorkStatus />
        </div>
      </div>
    </section>
  );
}
