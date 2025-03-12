// React
import React from "react";

// Providers
import { LanguageProvider } from "@/hooks/contexts/LanguageContext";
import { ThemeProvider } from "@/hooks/contexts/ThemeContext";

interface ProvidersProps {
  children: React.ReactNode;
}

export const Providers: React.FC<ProvidersProps> = ({ children }) => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <LanguageProvider>{children}</LanguageProvider>
    </ThemeProvider>
  );
};
