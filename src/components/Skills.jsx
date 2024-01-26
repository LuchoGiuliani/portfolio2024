import React from "react";
import { skillsCard, skills } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";
import { useLanguage } from "../context/LanguageContext";


const Skills = () => {
  const {currentLanguage} = useLanguage()
  return (
    <div className="">
      <section id="skills" className="sm:flex justify-center gap-6     p-6 sm:h-screen z-[9999]">
        <div className={`   flex flex-col gap-2`}>
          <h2 className={`   ${styles.heading2}`}>
            {currentLanguage === "en" ?  "Skills" : "Habilidades"}
          </h2>
          <p className={`${styles.paragraph} sm:max-w-[470px] `}>
            {currentLanguage === "en" ? " As a front-end developer, I am always open to new ideas and willing to collaborate with my team members to find the best possible solution."
                                      : " Como desarrollador estoy siempre buscando nuevos desafios y nuevas herramientas para aprender y aplicar a los trabajos que fui desarrollando  "}
           
          </p>
          <Button className=" z-[9999]" />
        </div>

        <div className={` max-w-[460px]`}>
        <section className={` `}>
          <div className={`flex   flex-wrap  gap-1`}>
            {skills.map((skill) => (
              <div
                key={skill.id}
                className={` flex-1  sm:min-w-[192px] min-w-[120px]`}
              >
                <img
                  src={skill.logo}
                  alt="skill logo"
                  className="sm:w-[97px] w-[100px] object-contain img_skills"
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
