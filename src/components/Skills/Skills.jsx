
import {skills } from "../../constants";

import Button from "../Button/Button";
import { useLanguage } from "../../context/LanguageContext";

import styles from "./skills.module.css"

const Skills = () => {
  const {currentLanguage} = useLanguage()
  return (
    <div className="">
      <section id="skills" className="sm:flex justify-center flex-col items-center gap-8  p-6  z-[9999]">
        <div className=" items-center  flex flex-col gap-8">
          <h2 className="text-white text-3xl">
            {currentLanguage === "en" ?  "Skills" : "Habilidades"}
          </h2>
          <p className="max-w-[470px] text-white text-2xl">
            {currentLanguage === "en" ? " As a front-end developer, I am always open to new ideas and willing to collaborate with my team members to find the best possible solution."
                                      : " Como desarrollador estoy siempre buscando nuevos desafios y nuevas herramientas para aprender y aplicar a los trabajos que fui desarrollando  "}
           
          </p>
          <Button className=" z-[9999]" />
        </div>

        <div className={` max-w-[460px]`}>
        <section className={` `}>
          <div className={`flex  items-center justify-center flex-wrap  gap-4`}>
            {skills.map((skill) => (
              <div
                key={skill.id}
                className={` flex-1 min-w-fit `}
              >
                <img
                  src={skill.logo}
                  alt="skill logo"
                  className="w-20 object-contain img_skills"
                />
              </div>
            ))}
          </div>
        </section>
        </div>
      </section>
    </div>
  );
};

export default Skills;
