import { LanguageProvider } from "@/contexts/LanguageContext";
import { ThemeProvider } from "@/contexts/ThemeContext";
import React from "react";

interface AppProvidersProps {
  children: React.ReactNode;
}

export const Providers: React.FC<AppProvidersProps> = ({ children }) => {
  return (
    <ThemeProvider>
      <LanguageProvider>{children}</LanguageProvider>
    </ThemeProvider>
  );
};
