import React from "react";
import styles from "../style";
import Button from "./Button";
import { useLanguage } from "../context/LanguageContext";

const ContactMe = () => {
  const {currentLanguage} = useLanguage()
  return (
    <section
      className={`z-[9999] bg-[#393D3F] rounded-[20px] box-shadow flex flex-wrap gap-4 justify-between p-6 m-6  sm:mx-36`}
    >
      <div className=" ">
        <h2 className={styles.heading2}>{currentLanguage === "en" ? "Connect with me" : "Contacto"}</h2>
        <p className={`${styles.paragraph} max-w-[470px] `}>
          {currentLanguage === "en" ? "I am always eager to take on new challenges and collaborate with like-minded professionals to create innovative and impactful solutions.":
          "No pierdas la oportunidad de contactarnos y conocernos, me interesan los nuevos desafios, el trabajo en equipo y las ideas innovadoras."}
         
        </p>
      </div>
      <div className={`${styles.flexCenter}`}>
        <Button />
      </div>
    </section>
  );
};

export default ContactMe;
