import {
  Navbar,
  Hero,
  Stats,
  Skills,
  Projects,
  ContactMe,
  Footer,
  Banner,
} from "./components";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { LanguageProvider } from "./context/LanguageContext";
import { ReactLenis} from "@studio-freight/react-lenis";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const lenisRef = useRef();
  useEffect(() => {
    function update(time) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }

    gsap.ticker.add(update);

    return () => {
      gsap.ticker.remove(update);
    };
  });

  return (
    <ReactLenis root>
      <div className="bg-[#546A7B] overflow-hidden ">
        {/* <div className="grain"></div> */}
        <LanguageProvider>
          <Stats />
          <Navbar />
          <Hero />
          <Projects />
          <Banner />
          <Skills />
          <ContactMe />
          <Footer />
        </LanguageProvider>
      </div>
    </ReactLenis>
  );
};

export default App;
