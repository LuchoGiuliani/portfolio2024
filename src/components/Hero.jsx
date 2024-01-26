import { useEffect } from "react";
import { perfil, dialogEN, dialogES } from "../assets";
import SplitType from "split-type";
import { gsap } from "gsap";
import { useLanguage } from "../context/LanguageContext";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const { currentLanguage } = useLanguage();  

  useEffect(() => {
    gsap.to(".char", {
      stroke: "1px solid rgba(255, 255, 255, 0.7)"
    })
    gsap.to(".hero_image2", {
      scrollTrigger: {
        trigger: ".hero_section",
        start: "top 200",
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
      rotate:90
    });
  }, []);

  useEffect(() => {
    const text = new SplitType("#title_h1");
    const characters = document.querySelectorAll(".char");
    gsap.to(characters, {
      scrollTrigger: {
        trigger: ".hero_section",
        start: "top",
        end: "bottom top",
        scrub: true,
       
      },
      opacity: 0,
      rotate:90,
      y: 400,
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
            className="text-5xl  sm:text-start  sm:text-8xl h-screen font-bold text-[#546A7B]">Front-End <br className="" /><span className="">Developer</span>
          </h1>
        </div>
        <div className="absolute bottom-56 right-4 sm:bottom-[9rem] sm:right-[14rem] hero_image3">
          {currentLanguage === "en" ? (
            <img src={dialogEN} className="min-w-[290px] px-8 " />
          ) : (
            <img src={dialogES} />
          )}
        </div>
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
