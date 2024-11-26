import { useContext } from "react";
import { LanguageContext } from "./contexts/LanguageContext";

export const useLanguage = () => {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useI18n debe usarse dentro de un I18nProvider");
  }

  return context;
};
