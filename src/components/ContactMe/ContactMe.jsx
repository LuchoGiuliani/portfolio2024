import React from "react";

import Button from "../Button/Button";
import { useLanguage } from "../../context/LanguageContext";

import styles from "./contactMe.module.css"

const ContactMe = () => {
  const {currentLanguage} = useLanguage()
  return (
    <section
      className={`z-[9999] mt-6 max-w-[680px] m-auto rounded-[20px] box-shadow flex flex-wrap gap-4 justify-between p-6 items-center   bg-gradient-to-r from-[#7b7d7e] to-[#546A7B]`}
    >
      <div className="z-10">
        <h2 className="text-white text-2xl mb-4">{currentLanguage === "en" ? "Connect with me" : "Contacto"}</h2>
        <p className={` max-w-[420px] text-white font-medium tracking-wide `}>
          {currentLanguage === "en" ? "I am always eager to take on new challenges and collaborate with like-minded professionals to create innovative and impactful solutions.":
          "No pierdas la oportunidad de contactarnos y conocernos, me interesan los nuevos desafios, el trabajo en equipo y las ideas innovadoras."}
        </p>
      </div>
      <div className="z-[9999]">
        <Button />
      </div>
    </section>
  );
};

export default ContactMe;
