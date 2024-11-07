// Hooks
import { useTranslation } from "react-i18next";

// Icons
import { Mail } from "@/icons/Mail.tsx";

export function CallToAction() {
  const { t } = useTranslation();

  return (
    <div
      className="flex items-center justify-between py-12">
      <div className="space-y-2">
        <h3 className="text-3xl font-bold">{t("components.callToAction.title")}</h3>
        <h4 className="text-muted-foreground">{t("components.callToAction.subtitle")}</h4>
      </div>
      <div>
        <a
          href="mailto:ignaciofigueroadev@gmail.com"
          className="flex items-center gap-2 px-6 py-2 rounded-md text-sm bg-primary hover:bg-primary-foreground duration-100 border-[1px] border-border"
        >
          <Mail
            height="16"
            width="16" />
          {t("components.callToAction.link")}
        </a>
      </div>
    </div>
  )
}