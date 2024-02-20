import React from "react";
import { useState } from "react";
import { menu } from "../../assets";
import { navLinks } from "../../constants";
import { useLanguage } from "../../context/LanguageContext";
import { spanish, english } from "../../assets";
import { logo,close } from "../../assets";

import styles from "./navbar.module.css"

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const { currentLanguage, toggleLanguage } = useLanguage();

  return (
    <nav className=" flex px-6 py-4 bg-[#393D3F] max-h-[126px]">
    <a className='z-[9999]' href="#">
        <img src={logo} alt="logo" className='max-w-[266px] max-h-[74px] object-contain' />
        </a>
      <ul className="list-none sm:flex hidden justify-end items-center flex-1 z-[9999]">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={` font-normal hover:scale-110 cursor-pointer text-[22px] ${
              index === navLinks.length - 1 ? "mr-10" : "mr-10"
            }  text-[#ECE6E6]`}
          >
            <a
              className="hover:text-[#62929E] hover:line-through border-2 border-black bg-[#546A7B] p-1"
              href={`#${nav.id}`}
            >
              {currentLanguage === "en" ? nav.title : nav.titleSpanish}
            </a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center z-[9999]">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className=" h-[28px] max-w-[48px] "
          onClick={() => setToggle((prev) => !prev)}
        />
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-1    sm:my-6   sm:mx-4  rounded-xl sidebar z-[9999]`}
        >
          <ul className="list-none flex gap-2 justify-center   ">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`hover:text-[#62929E] hover:line-through border-2 border-black bg-[#546A7B] p-1 text-[16px]" ${
                  index === navLinks.length - 1 ? "mr-0" : "mb-0"
                }  text-white`}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <nav className="z-[9999] flex justify-center items-center">
        <button className="text-white z-[9999] p-2" onClick={toggleLanguage}>
          <img
            className="p-1 max-w-[34px] z-[9999]"
            src={currentLanguage === "en" ? english : spanish}
            alt=""
          />
        </button>
      </nav>
    </nav>
  );
};

export default Navbar;
