// React
import { createContext, useContext, useState } from "react";

// i18n
import i18next from "i18next";

interface LanguageContextProps {
  language: string;
  changeLanguage: (lng: string) => void;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(
  undefined
);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [language, setLanguage] = useState(
    localStorage.getItem("language") || "en"
  );

  const changeLanguage = (lng: string) => {
    i18next.changeLanguage(lng);
    setLanguage(lng);
    localStorage.setItem("language", lng);
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextProps => {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useI18n debe usarse dentro de un I18nProvider");
  }

  return context;
};
