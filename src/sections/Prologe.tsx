import { Trans, useTranslation } from "react-i18next";

export function Prologe() {
  const { t } = useTranslation();

  return (
    <div className="space-y-10">
      <h1 className="text-4xl font-bold my-2">{t("pages.about.title")}</h1>
      <h2>
        <Trans
          i18nKey={t("pages.about.greeting")}
          components={{ span: <span className="text-accent" /> }}
        />
      </h2>
      <p>
        <Trans
          i18nKey={t("pages.about.intro")}
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
