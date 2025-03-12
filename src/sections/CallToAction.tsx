// Hooks
import { useTranslation } from "react-i18next";

// Icons
import { Mail } from "@/components/Icons.tsx";

export function CallToAction() {
  const { t } = useTranslation();

  return (
    <div className="flex items-center justify-between flex-wrap gap-y-6 py-36">
      <div className="space-y-2">
        <h3 className="text-3xl font-bold">
          {t("components.callToAction.title")}
        </h3>
        <h4 className="text-muted-foreground">
          {t("components.callToAction.subtitle")}
        </h4>
      </div>
      <div>
        <a
          href="mailto:ignaciofigueroadev@gmail.com"
          className="flex items-center gap-2 px-6 py-2 rounded-2xl text-sm bg-transparent hover:bg-card duration-100 border-[1px] border-border"
        >
          <Mail />
          {t("components.callToAction.link")}
        </a>
      </div>
    </div>
  );
}
