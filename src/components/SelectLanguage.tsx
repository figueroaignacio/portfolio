// Hooks
import { useLanguage } from "@/hooks/useLanguage.tsx";
import { useState } from "react";
import { useTranslation } from "react-i18next";

// Components
import {
  ModalContent,
  ModalOverlay,
  ModalTrigger,
} from "@/components/Modal.tsx";

// Icons
import { Lang, X } from "@/components/Icons.tsx";

export function SelectLanguage() {
  const { t } = useTranslation();
  const { language, changeLanguage } = useLanguage();
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <>
      <ModalTrigger onClick={openModal}>
        <div className="flex items-center gap-3">
          <Lang />
          <span className="text-xs">{language.toUpperCase()}</span>
        </div>
      </ModalTrigger>
      <ModalOverlay isOpen={modalOpen} onClose={closeModal} />
      <ModalContent isOpen={modalOpen} onClose={closeModal}>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-sm font-semibold">
            {t("ui.language.selectLanguage.title")}
          </h2>
          <button onClick={closeModal}>
            <X />
          </button>
        </div>
        <div className="flex flex-col gap-y-2">
          <button
            className={`p-2 rounded-md hover:hover:backdrop-brightness-200 duration-100 text-sm ${
              language === "en" ? "backdrop-brightness-200" : ""
            }`}
            onClick={() => {
              changeLanguage("en");
              closeModal();
            }}
          >
            English
          </button>
          <button
            className={`p-2 rounded-md hover:backdrop-brightness-200 duration-100 text-sm ${
              language === "es" ? "backdrop-brightness-200" : ""
            }`}
            onClick={() => {
              changeLanguage("es");
              closeModal();
            }}
          >
            Español
          </button>
        </div>
      </ModalContent>
    </>
  );
}
