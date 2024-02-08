import { useEffect } from "react";
import { perfil, dialogEN, dialogES } from "../assets";
import SplitType from "split-type";
import { gsap } from "gsap";
import { useLanguage } from "../context/LanguageContext";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

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

  useEffect(() => {
    const text = new SplitType("#title_h1");
    const text2 = new SplitType("#title2_hero");
    const characters = document.querySelectorAll(".char");

    const title2 = document.querySelector("#title2_hero");
    const chars = title2.querySelectorAll(".char");

    gsap.to(title2, {
      opacity: 1,
      delay: 4, // Aplicar un retraso progresivo para cada elemento
      duration: 3,
    });

    gsap.to(characters[0], {
      yPercent: 370,
      delay: 0.4,
      duration: 1.2,
      ease: "bounce.out",
    });
    gsap.to(characters[1], {
      yPercent: 380,
      delay: 0.8,
      duration: 1.4,
      ease: "bounce.out",
    });
    gsap.to(characters[2], {
      yPercent: 390,
      delay: 1.2,
      duration: 1.2,
      ease: "bounce.out",
    });
    gsap.to(characters[3], {
      yPercent: 400,
      delay: 1.6,
      duration: 1.4,
      ease: "bounce.out",
    });
    gsap.to(characters[4], {
      yPercent: 410,
      delay: 2,
      duration: 1.2,
      ease: "bounce.out",
    });
    gsap.to(characters[5], {
      yPercent: 420,
      delay: 2.4,
      duration: 1.4,
      ease: "bounce.out",
    });
    gsap.to(characters[6], {
      yPercent: 430,
      delay: 2.8,
      duration: 1.2,
      ease: "bounce.out",
    });
    gsap.to(characters[7], {
      yPercent: 440,
      delay: 3.2,
      duration: 1.4,
      ease: "bounce.out",
    });
    gsap.to(characters[8], {
      yPercent: 450,
      delay: 3.6,
      duration: 1.2,
      ease: "bounce.out",
    });

    gsap.to(characters, {
      scrollTrigger: {
        trigger: ".hero_section",
        start: "top",
        end: "bottom top",
        scrub: true,
      },
      opacity: 0,
      rotate: 90,
      y: 400,
      color: "#fff",
      stagger: {
        amount: 1, // Ajusta el valor según tu preferencia
        grid: [1, characters.length],
        from: "start",
      },
    });
  }, []);

  return (
    <section className="hero_section flex flex-col p-6  h-screen">
      <div>
        <div>
          <h1
            id="title_h1"
            className="text-5xl  sm:text-start  sm:text-8xl h-screen tracking-wide title_hero  text-[#546A7B]"
          >
            DESIGNER.
          </h1>
        </div>
        <div>
          <h1
            id="title2_hero"
            className="text-5xl  sm:text-start  sm:text-8xl h-screen tracking-wide title2_hero opacity-0   text-[#f9f9fa] absolute  top-32 z-50 "
          >
            Freelance Web Developer
          </h1>
        </div>
        <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{delay:4, duration: 4.5 }}
        >
          <div className="absolute bottom-56 right-4 sm:bottom-[9rem] sm:right-[14rem] hero_image3 hidden sm:block ">
            {currentLanguage === "en" ? (
              <img src={dialogEN} className="min-w-[290px] px-8 " />
            ) : (
              <img src={dialogES} />
            )}
          </div>
        </motion.div>
      </div>
      <div>
        <img
          src={perfil}
          alt="perfil"
          className="max-w-[330px] sm:max-w-[490px] overflow-x-hidden  absolute right-0 bottom-0 hero_image2"
        />
      </div>
    </section>
  );
};

export default Hero;
