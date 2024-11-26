// React
import { createContext, useState } from "react";

// i18n
import i18next from "i18next";

interface LanguageContextProps {
  language: string;
  changeLanguage: (lng: string) => void;
}

export const LanguageContext = createContext<LanguageContextProps | undefined>(
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
