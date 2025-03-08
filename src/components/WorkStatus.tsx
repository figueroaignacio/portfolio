import { useTranslation } from "react-i18next";

export function WorkStatus() {
  const { t } = useTranslation();

  return (
    <div className="fixed z-30 top-5 ml-6 flex items-center gap-2 px-3 py-1.5 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-full">
      <span className="relative flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
      </span>
      <span className="text-xs">{t("components.workStatus")}</span>
    </div>
  );
}
