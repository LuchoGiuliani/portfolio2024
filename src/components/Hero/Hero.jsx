import { useEffect } from "react";
import { perfil} from "../../assets";
import SplitType from "split-type";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

import styles from "./hero.module.css";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
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
  const text2 = new SplitType("#title2_hero");
  return (
    <section className="hero_section flex flex-col px-6 pt-6  h-screen">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
      >
        <h1
          id="title_h1"
          className={`${styles.title_name} text-white font-thin font-sans tracking-tight text-6xl md:text-6xl lg:text-8xl text-center  `}
        >
          LUCIANO GIULIANI
        </h1>
      </motion.div>
      <div className="">
        <h1 className="text-white font-thin font-sans tracking-tight  text-2xl lg:text-6xl absolute left-0 bottom-50 sm:bottom-0 p-6">
          WEB <br /> DEVELOPER
        </h1>
        <h1 className="text-white font-thin font-sans tracking-tight  text-2xl lg:text-6xl absolute right-[-10px] sm:right-0 bottom-46 sm:bottom-0 p-6">
          DESIGNER
        </h1>
      </div>
      <div className="flex  justify-center h-screen items-end overflow-hidden relative">
        <img
          src={perfil}
          alt="perfil"
          className="object-cover  h-[380px] w-[380px] lg:h-[580px] lg:w-[580px] hero_image absolute  bottom-32"
        />
      </div>
    </section>
  );
};

export default Hero;
