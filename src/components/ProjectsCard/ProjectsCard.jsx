import Tilt from "react-parallax-tilt";
import { useLanguage } from "../../context/LanguageContext";


import styles from "./projectsCard.module.css";

const ProjectsCard = ({ content, contentSpanish, name, title, img, link }) => {


  const { currentLanguage } = useLanguage();
  const windowWidth = window.innerWidth;

  const showContentP =
    windowWidth >= 760 ? (
      <p className="font-medium text-[18px] text-center leading-[32px] text-white my-2 hidden sm:flex">
        {currentLanguage === "en" ? content : contentSpanish}
      </p>
    ) : null;

  return (
    <div className="flex justify-between flex-col mb-10 px-4 py-2 max-w-[356px] md:mr-10 sm:mr-5 mr-0 my-5 rounded-lg ">
      <Tilt>
        <a href={link} target="_blank">
          <div className="flex flex-col items-center ">
            <img
              src={img}
              alt={name}
              className="sm:rounded-3xl w-[184px] h-[184px] sm:w-[226px] sm:h-[200px] object-cover shadow-2xl rounded-lg"
            />
            <div className="flex flex-col  items-center">
              <h4 className=" font-semibold text-[20px] leading-[32px] text-white my-6 text-center">
                {name}
              </h4>
              {showContentP}
              <p className=" font-normal text-[16px] leading-[24px] text-gray-200 text-center ">
                {title}
              </p>
            </div>
          </div>
        </a>
      </Tilt>
    </div>
  );
};

export default ProjectsCard;
