import React, { useEffect,useState } from "react";
import { projects } from "../../constants";

import ProjectsCard from "../ProjectsCard/ProjectsCard";
import { useLanguage } from "../../context/LanguageContext";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import {motion} from "framer-motion"



import styles from "./projects.module.css"



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
      className="z-[9999] relative"
    >
    
      <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient">
        {" "}
      </div>
      <div className="flex items-center justify-between gap-6 md:flex-row flex-col py-12 relative z-[1] px-12">
        <h1 className="text-white text-3xl tracking-wide">
        {currentLanguage === "en" ? "PROJECTS I BUILD" : "PROYECTOS"}
        </h1>
        <div className="w-full md:mt-0 mt-6 max-w-[420px]">
          <p className="text-right text-white text-2xl">
            {currentLanguage === "en"
              ? "I was able to learn how to work in a team, solve problems, search for documentation, build an application from scratch, implement a database, and other things that will be reflected in my work."
              : "Gracias a estos proyectos aprendí como trabajar en equipo, arrancar un proyecto desde cero, implementar una base de datos y darle estilo a una aplicación"}
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 sm:flex flex-wrap  justify-between w-full relative z-[1] pb-12 px-1">
        {projects.map((card) => (
          <ProjectsCard key={card.id} {...card} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
