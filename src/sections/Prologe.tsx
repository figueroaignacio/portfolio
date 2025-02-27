import { Trans, useTranslation } from "react-i18next";

export function Prologe() {
  const { t } = useTranslation();

  return (
    <div className="space-y-5 text-sm">
      <p>{t("pages.about.greeting")}</p>
      <p>
        <Trans
          i18nKey={t("pages.about.intro")}
          components={{ span: <span className="text-accent" /> }}
        />
      </p>
      <p>
        <Trans
          i18nKey={t("pages.about.expandingKnowledge")}
          components={{ span: <span className="text-accent"></span> }}
        />
      </p>
      <p>
        <Trans
          i18nKey={t("pages.about.collaboration")}
          components={{ span: <span className="text-accent"></span> }}
        />
      </p>
    </div>
  );
}
