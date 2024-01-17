import React from "react";
import styles from "../style";
import Button from "./Button";
import { useLanguage } from "../context/LanguageContext";

const ContactMe = () => {
  const {currentLanguage} = useLanguage()
  return (
    <section
      className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} m-12 sm:flex-row flex-col bg-[#393D3F] rounded-[20px] box-shadow`}
    >
      <div className="flex-1 flex flex-col">
        <h2 className={styles.heading2}>{currentLanguage === "en" ? "Connect with me" : "Contacto"}</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5 `}>
          {currentLanguage === "en" ? "I am always eager to take on new challenges and collaborate with like-minded professionals to create innovative and impactful solutions.":
          "No pierdas la oportunidad de contactarnos y conocernos, me interesan los nuevos desafios, el trabajo en equipo y las ideas innovadoras."}
         
        </p>
      </div>
      <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
        <Button />
      </div>
    </section>
  );
};

export default ContactMe;
