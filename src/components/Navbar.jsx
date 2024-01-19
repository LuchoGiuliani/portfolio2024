import React from "react";
import { useState } from "react";
import {  linkedin,logo, menu } from "../assets";
import { navLinks } from "../constants";
import { useLanguage } from "../context/LanguageContext";
import {spanish,english} from "../assets"

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const { currentLanguage, toggleLanguage } = useLanguage();
  
  return (
    <nav className=" flex p-6 bg-[#393D3F]">
      <h1 className="text-[#ECE6E6] text-lg">Luciano Giuliani </h1>
      <ul className="list-none sm:flex hidden justify-end items-center flex-1 z-[9999]">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal hover:scale-110 cursor-pointer text-[16px] ${
              index === navLinks.length - 1 ? "mr-10" : "mr-10"
            }  text-[#ECE6E6]`}
          >
            <a className="hover:text-[#62929E] hover:line-through border-2 border-black bg-[#546A7B] p-1" href={`#${nav.id}`}>{currentLanguage === "en" ? nav.title : nav.titleSpanish}</a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center z-[9999]">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className=" h-[28px] "
          onClick={() => setToggle((prev) => !prev)}
        />
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-1  absolute  my-6   mx-4  rounded-xl sidebar z-[9999]`}
        >
          <ul className="list-none flex gap-2 justify-center   ">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] ${
                  index === navLinks.length - 1 ? "mr-0" : "mb-0"
                }  text-white`}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <nav className="z-[9999]">
      <button className="text-white z-[9999] p-2" onClick={toggleLanguage}><img className="p-1 max-w-[34px] z-[9999]" src={currentLanguage === "en" ? english : spanish } alt="" /></button>
      
    </nav>
    </nav>
  );
};

export default Navbar;
