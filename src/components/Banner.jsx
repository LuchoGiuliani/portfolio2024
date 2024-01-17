import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

function Banner() {
  useEffect(() => {
 gsap.to(".banner",{
    scrollTrigger:{
      trigger: ".banner_section",
      scrub:true,
    },
    xPercent:-40,
    duration: 1,
    ease: "ease",
    immediateRender: false, 

   }),
   gsap.to(".banner2",{
    scrollTrigger:{
      trigger: ".banner_section",
      scrub:true,
    },
    duration: 1,
    ease: "ease",
    immediateRender: false, 
    xPercent:40,// Evita que la animación se aplique de inmediato
  });

  // Devuelve una función de limpieza para detener la animación al desmontar el componente

  }, []);

  return (
    <div className="flex items-center flex-col p-6 banner_section">
      <p className="banner text-white  ">
        REACT TAILWINDCSS <span className="text-blue-500"> JAVASCRIPT</span> NEXT
        JS <span className="text-blue-500"> MYSQL  NODEJS API-REST</span>  MYSQL  NODEJS API-REST <span className="text-stone-300"> GSAP </span>
        REACT  TAILWINDCSS GITHUB  WORDPRESS
      </p>
      <p className="banner2 text-white overflow-hidden  ">
        <span className="text-blue-500"> WE LOVE CODE</span> YOU LIKE CODE{" "}
        <span className="text-blue-500"> YOU LIKE CODE</span> WE LOVE CODE I LOVE
        CODE
      </p>
    </div>
  );
}

export default Banner;
