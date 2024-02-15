import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

import { perfil } from "../../assets";

import styles from "./hero.module.css";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };
    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 10,
      y: mousePosition.y - 10,
    },
    text: {
      height: 80,
      width: 80,
      x: mousePosition.x - 45,
      y: mousePosition.y - 45,
      mixBlendMode: "multiply",
    },
  };
  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");

  useEffect(() => {
    gsap.to(".hero_image", {
      scrollTrigger: {
        trigger: ".hero_section",
        start: "top 250",
        end: "bottom top",
        scrub: true,
      },
      yPercent: 150,
    });
  }, []);

  return (
    <section
      className="hero_section flex flex-col px-6 pt-6 h-screen "
      onMouseEnter={textEnter}
      onMouseLeave={textLeave}
    >
      <motion.div
        className="cursor"
        variants={variants}
        animate={cursorVariant}
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
      >
        <h1
          id="title_h1"
          className={`${styles.title_name} text-white font-thin font-sans tracking-tight text-6xl md:text-6xl lg:text-8xl text-center  `}
        >
          LUCIANO GIULIANI
        </h1>
      </motion.div>
      <div className="">
        <h1 className="text-white font-thin font-sans tracking-tight text-2xl lg:text-6xl absolute left-0 bottom-50 sm:bottom-0 p-2 mt-12 sm:mt-0">
          WEB <br /> DEVELOPER
        </h1>
        <h1 className="text-white font-thin font-sans tracking-tight text-2xl lg:text-6xl absolute right-[10px] sm:right-0 bottom-46 sm:bottom-0 p-2 mt-14 sm:mt-0">
          DESIGNER
        </h1>
      </div>

      <div className="flex justify-center h-screen items-end overflow-hidden relative">
        <img
          src={perfil}
          alt="perfil"
          className="object-cover h-[380px] w-[380px] lg:h-[580px] lg:w-[580px] hero_image absolute bottom-32"
        />
      </div>
    </section>
  );
};

export default Hero;
