// Hooks
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

// Icons
import { Lang } from "../icons/Lang.tsx";

export function SelectLanguage() {
  const { i18n, t } = useTranslation();
  const [selectedLang, setSelectedLang] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const lang = localStorage.getItem("language");
    if (lang) {
      setSelectedLang(lang);
      i18n.changeLanguage(lang);
    }
  }, [i18n]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setModalOpen(false);
      }
    };

    if (modalOpen) {
      window.addEventListener("keydown", handleKeyDown);
    } else {
      window.removeEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [modalOpen]);

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    setSelectedLang(lang);
    localStorage.setItem("language", lang);
    setModalOpen(false);
  };

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <div className="flex items-center justify-center">
        <button
          onClick={openModal}
          className="flex items-center gap-2 p-2 text-gray-600 bg-gray-200 rounded-lg hover:bg-gray-300"
        >
          <Lang />
          {selectedLang ? selectedLang.toUpperCase() : ""}
        </button>
      </div>
      {modalOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
          onClick={closeModal}
        >
          <div
            className="bg-white p-6 rounded-lg shadow-lg max-w-sm mx-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">
                {t("selectLanguage.title")}
              </h2>
              <button
                className="text-gray-500 hover:text-gray-700"
                onClick={closeModal}
              >
                &times;
              </button>
            </div>
            <div className="flex gap-2">
              <button
                className={`p-2 rounded-lg ${
                  selectedLang === "en"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
                onClick={() => changeLanguage("en")}
              >
                English
              </button>
              <button
                className={`p-2 rounded-lg ${
                  selectedLang === "es"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
                onClick={() => changeLanguage("es")}
              >
                Español
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
