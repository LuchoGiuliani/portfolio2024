import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

import styles from "./banner.module.css";

gsap.registerPlugin(ScrollTrigger);

function Banner() {
  useEffect(() => {
    gsap.to(".banner", {
      scrollTrigger: {
        trigger: ".banner_section",
        scrub: true,
      },
      xPercent: -40,
      duration: 1,
      ease: "ease",
      immediateRender: false,
    }),
      gsap.to(".banner2", {
        scrollTrigger: {
          trigger: ".banner_section",
          scrub: true,
        },
        duration: 1,
        ease: "ease",
        immediateRender: false,
        xPercent: 40, 
      });

  }, []);

  return (
    <div className={`banner_section flex items-center flex-col p-6 ${styles.banner_section}`}>
      <p className={`${styles.banner} banner text-white `}>
        REACT TAILWINDCSS <span className="text-blue-500"> JAVASCRIPT</span>{" "}
        NEXT JS <span className="text-blue-500"> MYSQL NODEJS API-REST</span>{" "}
        MYSQL NODEJS API-REST <span className="text-stone-300"> GSAP </span>
        REACT TAILWINDCSS GITHUB WORDPRESS
      </p>
      <p className={`${styles.banner2} banner2 text-white overflow-hidden`}>
        <span className="text-blue-500"> WE LOVE CODE</span> DESIGN WE
        LOVE CODE I LOVE
        <span className="text-blue-500"> YOU LIKE CODE</span> DESIGN I
        LOVE CODE
      </p>
    </div>
  );
}

export default Banner;
