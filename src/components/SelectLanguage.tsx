// Hooks
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { AnimatePresence, motion } from "framer-motion";

// Icons
import { Lang } from "../icons/Lang.tsx";
import { X } from "@/icons/X.tsx";

// Utils
import { modalVariants } from "@/constants/animations.ts"

export function SelectLanguage() {
  const { i18n, t } = useTranslation();
  const [selectedLang, setSelectedLang] = useState<string | null>("en");
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const lang = localStorage.getItem("ui.language");
    if (lang) {
      setSelectedLang(lang);
      i18n.changeLanguage(lang);
    } else {
      i18n.changeLanguage("en");
    }
  }, [i18n]);

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    setSelectedLang(lang);
    localStorage.setItem("ui.language.selectLanguage.title", lang);
    setModalOpen(false);
  };

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <button
        onClick={openModal}
        className="flex items-center gap-2 px-4 py-2 rounded-md bg-primary hover:bg-primary-foreground duration-100 border-[1px] border-border"
      >
        <Lang />
        <span className="text-xs">{selectedLang ? selectedLang.toUpperCase() : ""}</span>
      </button>
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center backdrop-blur-md z-30"
            onClick={closeModal}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              className="bg-card border-[1px] border-border p-6 rounded-lg max-w-sm w-full mx-4"
              onClick={(e) => e.stopPropagation()}
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">
                  {t("ui.language.selectLanguage.title")}
                </h2>
                <button onClick={closeModal}>
                  <X />
                </button>
              </div>
              <div className="flex flex-col gap-y-2">
                <button
                  className={`p-2 rounded-md hover:bg-primary-foreground duration-100 ${
                    selectedLang === "en" ? "bg-primary-foreground font-bold" : ""
                  }`}
                  onClick={() => changeLanguage("en")}
                >
                  English
                </button>
                <button
                  className={`p-2 rounded-md hover:bg-primary-foreground duration-100 ${
                    selectedLang === "es" ? "bg-primary-foreground" : ""
                  }`}
                  onClick={() => changeLanguage("es")}
                >
                  Español
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
