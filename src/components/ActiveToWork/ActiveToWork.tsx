// i18n
import { useTranslation } from "react-i18next";

// Styles
import styles from "./ActiveToWork.module.css";

export function ActiveToWork() {
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <span>{t("activeToWork.title")}</span>
      <div className={styles.pulsatingDot} />
    </div>
  );
}
