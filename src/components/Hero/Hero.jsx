import { useEffect } from "react";
import { perfil, dialogEN, dialogES } from "../../assets";
import SplitType from "split-type";
import { gsap } from "gsap";
import { useLanguage } from "../../context/LanguageContext";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

import styles from "./hero.module.css"

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const { currentLanguage } = useLanguage();

  useEffect(() => {
    gsap.to(".char", {
      stroke: "1px solid rgba(255, 255, 255, 0.7)",
    });
    gsap.to(".hero_image2", {
      scrollTrigger: {
        trigger: ".hero_section",
        start: "top 250",
        end: "bottom top",
        scrub: true,
      },
      yPercent: 150,
    });
    gsap.to(".hero_image3", {
      scrollTrigger: {
        trigger: ".hero_section",
        start: "top 100",
        end: "bottom top",
        scrub: true,
      },
      opacity: 0,
      rotate: 90,
    });
    gsap.to(".hero_image3", {
      blur: 2,
      delay: 1,
      duration: 0.4,
    });
  }, []);
  const text2 = new SplitType("#title2_hero");
  console.log(text2);

  useEffect(() => {
    const text = new SplitType("#title_h1");
    const staggerDuration = 0.4;
    const animationDuration = 1.2;
    const characters = document.querySelectorAll(".char");
    
 
    // gsap.to(characters, {
    //   opacity:0, 
    //   duration: animationDuration,
    //   ease: "bounce.out",
    //   stagger: staggerDuration,
    // });
  

    // gsap.to(characters, {
    //   scrollTrigger: {
    //     trigger: ".hero_section",
    //     start: "top",
    //     end: "bottom top",
    //     scrub: true,
    //   },
    //   opacity: 0,
    //   rotate: 90,
    //   y: 400,
    //   color: "#fff",
    //   stagger: {
    //     amount: 1, // Ajusta el valor según tu preferencia
    //     grid: [1, characters.length],
    //     from: "start",
    //   },
    // });
  }, []);

  return (
    <section className="hero_section flex flex-col px-6 pt-6  h-screen">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}>
        <h1 id="title_h1" className="text-white font-thin font-sans tracking-tight text-6xl md:text-6xl lg:text-8xl text-center mb-2 ">
          LUCIANO GIULIANI
        </h1>
        </motion.div>
      <div  className="">
        <h1 className="text-white font-thin font-sans tracking-tight  text-2xl lg:text-6xl absolute left-0 bottom-50 sm:bottom-0 p-6">
          WEB <br /> DEVELOPER
        </h1>
        <h1 className="text-white font-thin font-sans tracking-tight  text-2xl lg:text-6xl absolute right-[-10px] sm:right-0 bottom-20 sm:bottom-0 p-6">
          DESIGNER
        </h1>
        {/* <div>
          <h1
            id="title_h1"
            className="text-5xl  sm:text-start  sm:text-8xl sm:h-screen tracking-wide title_hero hidden mt-4 md:mt-0 md:block  text-[#546A7B]"
          >
            DESIGNER.
          </h1>
        </div> */}
        {/* <div>
          <h1
            id="title2_hero"
            className="text-5xl mt-6 sm:text-start lg:text-[96px] md:text-7xl  sm:text-6xl h-screen tracking-wide title2_hero opacity-0   text-[#f9f9fa] absolute  top-32 z-50 "
          >
           LUCIANO GIULIANI
          </h1>
        </div> */}
        {/* <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{delay:4, duration: 4.5 }}
        >
          <div className="absolute bottom-56 right-4 sm:bottom-[9rem] sm:right-[22rem] hero_image3   lg:block ">
            {currentLanguage === "en" ? (
              <img src={dialogEN} className="w-[400px] md:w-[620px] sm:w-[400px] px-8 " />
            ) : (
              <img src={dialogES} />
            )}
          </div>
        </motion.div> */}
      </div>
      <div className="flex  justify-center h-screen items-end overflow-hidden relative">
        <img
          src={perfil}
          alt="perfil"
          className="object-cover  h-[380px] w-[380px] lg:h-[580px] lg:w-[580px] hero_image2 absolute  bottom-32"
        />
      </div>
    </section>
  );
};

export default Hero;
