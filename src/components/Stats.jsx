import React, { useEffect, useRef } from 'react'

import { useLanguage } from '../context/LanguageContext'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap/gsap-core'
import { arrowDown } from '../assets'
import SplitType from "split-type";

const Stats = () =>  {
  const {currentLanguage} = useLanguage()
  const app = useRef()
  const text = new SplitType("#text_stats")

  useGSAP(
    () => {
      gsap
        .to(".stats_part", {
          xPercent: -100,
          repeat: -1,
          duration: 8,
          ease: "linear",
        })
        .totalProgress(0.5);
    },
    { scope: app }
  );
  useEffect(()=> {
    gsap.to(".arrow_down", {
      scale: "1.2",
    repeat: -1,
    yoyo: true, // Utiliza yoyo para el bucle infinito y el efecto de rebote suave
    duration: 1,
    ease: "linear",
      
    })
  } ,[])

  return(

  <div className='stats_section' ref={app}>
   <div className="absolute z-10 bottom-0  sm:left-4  max-w-[120px] arrow_down  p-3">
    <img src={arrowDown} alt="" />
   </div>
      <section className="stats">
        <div className='stats_inner'>
          <div id='text_stats' className="stats_part">COLABORATION PROACTIVITY MODERN DESIGN TEAM WORK</div>
          <div id='text_stats' className="stats_part">COLABORATION PROACTIVITY MODERN DESIGN TEAM WORK</div>
          <div id='text_stats' className="stats_part">COLABORATION PROACTIVITY MODERN DESIGN TEAM WORK</div>
          <div id='text_stats' className="stats_part">COLABORATION PROACTIVITY MODERN DESIGN TEAM WORK</div>
          <div id='text_stats' className="stats_part">COLABORATION PROACTIVITY MODERN DESIGN TEAM WORK</div>
          <div id='text_stats' className="stats_part">COLABORATION PROACTIVITY MODERN DESIGN TEAM WORK</div>
          <div id='text_stats' className="stats_part">COLABORATION PROACTIVITY MODERN DESIGN TEAM WORK</div>
    </div>
  </section>
  </div>
  )}


export default Stats