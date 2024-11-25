// Hooks
import { useLanguage } from "@/contexts/LanguageContext.tsx";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { useTranslation } from "react-i18next";

// Icons
import { X } from "@/icons/X.tsx";
import { Lang } from "../icons/Lang.tsx";

// Utils
import { modalVariants } from "@/constants/animations.ts";

export function SelectLanguage() {
  const { t } = useTranslation();
  const { language, changeLanguage } = useLanguage();
  const [modalOpen, setModalOpen] = useState(false);

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
        <span className="text-xs">{language.toUpperCase()}</span>
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
                    language === "en" ? "bg-primary-foreground" : ""
                  }`}
                  onClick={() => {
                    changeLanguage("en");
                    closeModal();
                  }}
                >
                  English
                </button>
                <button
                  className={`p-2 rounded-md hover:bg-primary-foreground duration-100 ${
                    language === "es" ? "bg-primary-foreground" : ""
                  }`}
                  onClick={() => {
                    changeLanguage("es");
                    closeModal();
                  }}
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
