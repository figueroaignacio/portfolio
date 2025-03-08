import { useTranslation } from "react-i18next";

import { FileText } from "./Icons";

export function CVCallToAction() {
  const { t } = useTranslation();

  return (
    <div className="w-full mx-auto rounded-xl overflow-hidden bg-card border border-border">
      <div className="p-6 text-centermd:text-left">
        <div className="mb-8 md:mb-0 md:mr-8">
          <h2 className="text-xl font-bold mb-4">
            {t("components.cvCallToAction.title")}
          </h2>
          <p className="text-sm max-w-lg">
            {t("components.cvCallToAction.text")}
          </p>
        </div>
        <a
          href={t("components.cvCallToAction.href")}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-x-3 underline mt-5"
        >
          {t("components.cvCallToAction.label")}
          <FileText />
        </a>
      </div>
    </div>
  );
}
