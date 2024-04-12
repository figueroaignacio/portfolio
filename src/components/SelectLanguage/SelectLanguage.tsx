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

  useEffect(() => {
    const lang = localStorage.getItem("language");
    if (lang) {
      setSelectedLang(lang);
      i18n.changeLanguage(lang);
    }
  }, [i18n]);

  const changeLanguage = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const lang = event.target.value;
    i18n.changeLanguage(lang);
    setSelectedLang(lang);
    localStorage.setItem("language", lang);
  };

  return (
    <div className={styles.selectContainer}>
      <select
        className={styles.selectBox}
        value={selectedLang || undefined}
        onChange={changeLanguage}
      >
        <option value="en">English</option>
        <option value="es">Español</option>
      </select>
      <div className={styles.selectIconContainer}>
        <Lang />
      </div>
    </div>
  );
}
