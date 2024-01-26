import React from "react";
import { useLanguage } from "../context/LanguageContext";

const Button = () => {
  const { currentLanguage } = useLanguage();
  return (
    <a className="z-[9999] mb-8" target="_blank" href="https://wa.me/+541134936556">
      <button
        type="button"
        className={`hover:scale-110 transition delay-100 py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none  rounded-[10px] z-[9999]`}
      >
        {currentLanguage === "en" ? "Get in touch" : "Contacto"}
      </button>
    </a>
  );
};

export default Button;
