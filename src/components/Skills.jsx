import React from "react";
import { skillsCard, skills } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";
import { useLanguage } from "../context/LanguageContext";
const SkillCard = ({ icon, title, content, index }) => {

  const {currentLanguage} = useLanguage()
  return(
  <div
    className={`flex flex-row p-6 rounded-[20px]  ${
      index !== skillsCard.length - 1 ? "mb-6" : "mb-0"
    } feature-card `}
  >
    <div
      className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
    >
      <img src={icon} alt="icon" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3 ">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px] mb-1">
        {content}
      </p>
    </div>
  </div>
);}

const Skills = () => {
  const {currentLanguage} = useLanguage()
  return (
    <div className="z-[9999] flex  justify-center items-center ">
      <section id="skills" className="flex  gap-6 justify-center  p-6 sm:h-screen z-[9999]">
        <div className={`   flex flex-col gap-4`}>
          <h2 className={`   ${styles.heading2}`}>
            {currentLanguage === "en" ?  "Skills" : "Habilidades"}
          </h2>
          <p className={`${styles.paragraph} max-w-[470px] `}>
            {currentLanguage === "en" ? " As a front-end developer, I am always open to new ideas and willing to collaborate with my team members to find the best possible solution."
                                      : " Como desarrollador estoy siempre buscando nuevos desafios y nuevas herramientas para aprender y aplicar a los trabajos que fui desarrollando  "}
           
          </p>
          <Button className="mt-10 z-[9999]" />
        </div>

        <div className={` max-w-[460px]`}>
          {/* {skillsCard.map((feature, index) => (
            <SkillCard key={feature.id} {...feature} index={index} />
          ))} */}
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

      <section>
      </section>
    </div>
  );
};

export default Skills;
