import styles from "./style";
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
import { useRef,useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { LanguageProvider } from "./context/LanguageContext";
import { ReactLenis, useLenis } from '@studio-freight/react-lenis'
import Lenis from "@studio-freight/lenis";

gsap.registerPlugin(ScrollTrigger);

const App = () => {

  const lenisRef = useRef()
  const lenis = useLenis(({ scroll }) => {
    // called every scroll
  })
  
  
  useEffect(() => {
    function update(time) {
      lenisRef.current?.lenis?.raf(time * 1000)
    }
  
    gsap.ticker.add(update)
  
    return () => {
      gsap.ticker.remove(update)
    }
  })


  
  return (
    <ReactLenis  root >
    <div  className="bg-[#546A7B] overflow-hidden "> 
    <div className="grain"></div>
      <LanguageProvider>
        <Navbar />
        <Hero />
        <Stats />
        <Projects />
        <Banner />
        <Skills className="z-[9999]"/>
        <ContactMe />
        <Footer />
      </LanguageProvider>
    </div>
    </ReactLenis>
   
  );
};

export default App;
