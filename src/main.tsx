import React from "react";
import ReactDOM from "react-dom/client";

// Components
import { Providers } from "./components/Providers.tsx";

// CSS
import "../src/styles/index.css";

// Font
import "@fontsource-variable/onest";

// Router
import { RouterProvider } from "react-router";
import { router } from "./components/Router.tsx";

// Locales config
import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en/en.json";
import es from "./locales/es/es.json";

const language = localStorage.getItem("language") || "es";

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
    <Providers>
      <RouterProvider router={router} />
    </Providers>
  </React.StrictMode>
);
