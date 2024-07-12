// React
import { useEffect, useState } from "react";

// i18n
import { useTranslation } from "react-i18next";

// Icons
import { Lang } from "../../icons/Lang";

// Styles
import styles from "./SelectLanguage.module.css";

export function SelectLanguage() {
  const { i18n } = useTranslation();
  const [selectedLang, setSelectedLang] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const lang = localStorage.getItem("language");
    if (lang) {
      setSelectedLang(lang);
      i18n.changeLanguage(lang);
    }
  }, [i18n]);

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
          {selectedLang ? selectedLang.toUpperCase() : "Select Language"}
        </button>
        <div className={styles.selectIconContainer}>
          <Lang />
        </div>
      </div>
      <div
        className={`${styles.modalBackdrop} ${modalOpen ? styles.open : ""}`}
      >
        <div className={styles.modalContent}>
          <span className={styles.closeButton} onClick={closeModal}>
            &times;
          </span>
          <h2>Select Language</h2>
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
