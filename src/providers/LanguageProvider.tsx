import { LanguageContext } from "@/contexts/LanguageContext";
import i18next from "i18next";
import React, { useState } from "react";

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [language, setLanguage] = useState(
    typeof window !== "undefined"
      ? localStorage.getItem("language") || "en"
      : "en"
  );

  const changeLanguage = (lng: string) => {
    i18next.changeLanguage(lng);
    setLanguage(lng);
    if (typeof window !== "undefined") {
      localStorage.setItem("language", lng);
    }
  };

  return (
    <LanguageContext value={{ language, changeLanguage }}>
      {children}
    </LanguageContext>
  );
};
