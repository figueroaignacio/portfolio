// Main
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

// CSS
import "../src/styles/animations.css";
import "../src/styles/index.css";

// Font
import "@fontsource-variable/onest";

// i18n
import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en/en.json";
import es from "./locales/es/es.json";

const language = localStorage.getItem("language") || "en";

i18next.use(initReactI18next).init({
  lng: language,
  interpolation: {
    escapeValue: false,
  },
  resources: {
    es: {
      translation: es,
    },
    en: {
      translation: en,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
