import { useEffect } from "react";
import styles from "../style";
import { perfil, dialogEN, dialogES } from "../assets";
import SplitType from "split-type";
import { gsap } from "gsap";
import { useLanguage } from "../context/LanguageContext";
import { easeInOut, motion } from "framer-motion";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const { currentLanguage } = useLanguage();
  const transition = { duration: 0.5, ease: "easeInOut" };
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  useEffect(() => {
    gsap.to(".hero_image", {
      xPercent: 25,
      delay: 3,
      repeat: -1,
      duration:4,
      stagger:0.05,
      yoyo:true,
    
    });
    gsap.to(".hero_image2", {
      scrollTrigger: {
        trigger: ".hero_section",
        start: "top 200",
        end: "bottom top",
        scrub: true,
      },
      yPercent: 100,
    });
    gsap.to(".hero_image3", {
      scrollTrigger: {
        trigger: ".hero_section",
        start: "top 100",
        end: "bottom top",
        scrub: true,
      },
      opacity: 0,
      rotate:90
    });
  }, []);

  useEffect(() => {
    const text = new SplitType("#title_h1");
    const characters = document.querySelectorAll(".char");
    gsap.to(characters, {
      scrollTrigger: {
        trigger: ".hero_section",
        start: "top 100",
        end: "bottom top",
        scrub: true,
       
      },
      opacity: 0,
      rotate:90,
      y: 600,
      color:"#fff", 
      stagger: {
        amount: 1, // Ajusta el valor según tu preferencia
        grid: [1, characters.length],
        from: "start",

      },
    
    })
   
  }, [])

  return (
    <section className="hero_section flex flex-col p-6  h-screen">
      <div>
        <div>
          <h1
            id="title_h1"
            className="text-5xl  sm:text-start sm:text-8xl h-screen font-bold text-[#546A7B]  "
          >
            Front-End <br className="" />
            <span className="">Developer</span>
          </h1>
        </div>

        <div className="absolute bottom-56 right-4 sm:bottom-[9rem] sm:right-[14rem] hero_image3">
          {currentLanguage === "en" ? (
            <img src={dialogEN} className="min-w-[290px]" />
          ) : (
            <img src={dialogES} />
          )}
        </div>
      </div>

      <div>
        {/* <img
          src={perfil}
          alt="perfil"
          className="max-w-[490px]  rotate-90 absolute top-[15%] left-[-252px]  hero_image"
        /> */}

        {/* <img src={dialog} alt="perfil" className="  absolute right-56 bottom-60 hero_image3" /> */}
        <img
          src={perfil}
          alt="perfil"
          className="max-w-[490px]   absolute right-0 bottom-0 hero_image2"
        />
      </div>
    </section>
  );
};

export default Hero;
