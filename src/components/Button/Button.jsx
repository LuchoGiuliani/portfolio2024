import React from "react";
import { useLanguage } from "../../context/LanguageContext";

import styles from "./button.module.css"

const Button = () => {
  const { currentLanguage } = useLanguage();
  return (
    <a className="z-[9999] " target="_blank" href="https://wa.me/+541134936556">
      <button
        type="button"
        className={styles.button_styles}
      >
        {currentLanguage === "en" ? "Get in touch" : "Contacto"}
      </button>
    </a>
  );
};

export default Button;
