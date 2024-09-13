// Hooks
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

// Icons
import { Lang } from "../../icons/Lang";

// Styles
import styles from "./SelectLanguage.module.css";

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
      <div className={styles.box}>
        <button onClick={openModal} className={styles.selectLanguageButton}>
          <Lang />
          {selectedLang ? selectedLang.toUpperCase() : ""}
        </button>
      </div>
      <div
        className={`${styles.modalBackdrop} ${modalOpen ? styles.open : ""}`}
        onClick={closeModal}
      >
        <div className={styles.modalContent}>
          <div className={styles.modalTitleContainer}>
            <h2>{t("selectLanguage.title")}</h2>
            <button className={styles.modalClose} onClick={closeModal}>
              &times;
            </button>
          </div>
          <div className={styles.languageButtons}>
            <button
              className={`${styles.languageButton} ${
                selectedLang === "en" ? styles.selected : ""
              }`}
              onClick={() => changeLanguage("en")}
            >
              English
            </button>
            <button
              className={`${styles.languageButton} ${
                selectedLang === "es" ? styles.selected : ""
              }`}
              onClick={() => changeLanguage("es")}
            >
              Español
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
