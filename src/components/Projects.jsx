import React, { useEffect } from "react";
import { feedback } from "../constants";
import styles from "../style";
import FeedbackCard from "./FeedbackCard";
import { useLanguage } from "../context/LanguageContext";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)

const Projects = () => {

const {currentLanguage} = useLanguage();
useEffect(() => {
  const animation = gsap.to("#projects", {
    scrollTrigger: {
     
      trigger: "#projects",
      start: "top top",
      end: "bottom bottom",
      scrub: 0.5, // Ajusta este valor según tus necesidades
    },
    backgroundColor: "#27292B",
    duration: 1,
    ease: "ease",
    immediateRender: false, // Evita que la animación se aplique de inmediato
  });

  // Devuelve una función de limpieza para detener la animación al desmontar el componente
  return () => animation.kill();
}, []);




  return (
    <section
      id="projects"
      className={`z-[9999] testimonial-section ${styles.paddingY} ${styles.flexCenter} flex-col relative`}
    >
      <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient">
        {" "}
      </div>
      <div className="w-full flex items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1] px-16">
        <h1 className={styles.heading2}>
        {currentLanguage === "en" ? "Project i build" : "Proyectos"}
        </h1>
        <div className="w-full md:mt-0 mt-6">
          <p className={`${styles.paragraph} text-left `}>
            {currentLanguage === "en"
              ? "I was able to learn how to work in a team, solve problems, search for documentation, build an application from scratch, implement a database, and other things that will be reflected in my work."
              : "Gracias a estos proyectos aprendí como trabajar en equipo, arrancar un proyecto desde cero, implementar una base de datos y darle estilo a una aplicación"}
          </p>
        </div>
      </div>
      <div className="flex flex-wrap  justify-center w-full feedback-container relative z-[1]">
        {feedback.map((card) => (
          <FeedbackCard key={card.id} {...card} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
