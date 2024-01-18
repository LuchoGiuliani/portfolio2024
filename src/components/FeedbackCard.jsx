import React from "react";
import Tilt from "react-parallax-tilt";
import { useLanguage } from "../context/LanguageContext";

const FeedbackCard = ({ content, contentSpanish, name, title, img, link }) => {
  const { currentLanguage } = useLanguage();
  const windowWidth = window.innerWidth;

  const showContentP = windowWidth >= 760 ? (
    <p className="font-poppins font-normal text-[18px] leading-[32px] text-white my-2">
      {currentLanguage === "en" ?  content : contentSpanish}
    </p>
  ) : null;

  return (
    <div className="flex justify-between flex-col px-10 py-4 max-w-[356px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card rounded-lg">
      <Tilt>
        <a href={link} target="_blank">
          <div className="flex flex-col items-center">
            <img
              src={img}
              alt={name}
              className="sm:rounded-3xl w-[184px] sm:w-[226px] sm:h-[200px] object-cover shadow-2xl"
            />
            <div className="flex flex-col ml-4">
              <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white my-6">
                {name}
              </h4>
              {showContentP}
              <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite ">
                {title}
              </p>
            </div>
          </div>
        </a>
      </Tilt>
    </div>
  );
};

export default FeedbackCard;

