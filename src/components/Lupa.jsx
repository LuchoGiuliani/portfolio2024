import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const LupaEffect = () => {
  const lupaRef = useRef(null);

  useEffect(() => {
    const lupa = lupaRef.current;
    const lupaSize = 46;
    
    const updateLupaPosition = (e) => {
      const rect = lupa.getBoundingClientRect();
      const lupaX = e.clientX - rect.width / 2;
      const lupaY = e.clientY - rect.height / 2;

      gsap.to(lupa, {
        x: lupaX -40,
        y: lupaY -180,
        ease: "power2.out",
        
      });
    };

    

    const handleMouseMove = (e) => {
      updateLupaPosition(e);
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={lupaRef}
      className="lupa"
      style={{
        width: "66px",
        height: "66px",
        position: "absolute",
        borderRadius: "50%",
        border: "2px solid #fff",
        pointerEvents: "none",
        zIndex: 9999,
      }}
    />
  );
};

export default LupaEffect;
