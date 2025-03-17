import { useTranslation } from "react-i18next";
import { FileText } from "./Icons";

export function CVCallToAction() {
  const { t } = useTranslation();

  return (
    <div className="w-full mx-auto rounded-xl overflow-hidden border border-dashed border-border">
      <div className="p-6 md:p-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-3">
            <h2 className="text-xl font-bold">
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
            className="inline-flex items-center justify-center gap-x-2 px-5 py-2.5 rounded-2xl bg-accent hover:scale-105 transition-transform font-medium text-sm shrink-0 text-white"
          >
            {t("components.cvCallToAction.label")}
            <FileText />
          </a>
        </div>
      </div>
    </div>
  );
}
