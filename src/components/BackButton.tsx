// Hooks
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";

// Icons
import { ArrowLeftIcon } from "./Icons";

export function BackButton() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleBack = () => {
    if (document.startViewTransition) {
      document.startViewTransition(() => {
        navigate(-1);
      });
    } else {
      navigate(-1);
    }
  };

  return (
    <button
      onClick={handleBack}
      className="flex items-center gap-x-3 text-muted-foreground mb-5 cursor-pointer underline"
    >
      <ArrowLeftIcon /> <span>{t("components.backButton")}</span>
    </button>
  );
}
