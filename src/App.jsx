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

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { LanguageProvider } from "./context/LanguageContext";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <div className="bg-[#546A7B] overflow-hidden"> 
    {/* <div className="grain"></div> */}

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
  );
};

export default App;
