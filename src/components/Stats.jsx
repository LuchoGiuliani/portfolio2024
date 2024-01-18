import React, { useEffect, useRef } from 'react'
import {stats } from '../constants'
import styles from '../style'
import { useLanguage } from '../context/LanguageContext'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap/gsap-core'
import { arrowDown } from '../assets'
import SplitType from "split-type";

const Stats = () =>  {
  const {currentLanguage} = useLanguage()
  const app = useRef()
  const text = new SplitType("#text_marquee")

  useGSAP(
    () => {
      gsap
        .to(".marquee_part", {
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
      repeat:-1,
      duration: 3,
      ease: "power4.out",
      opacity:0.01
      
    })
  
  } ,[])



  return(
  
  <div className='stats_section' ref={app}>
   <div className="absolute z-10 bottom-0  sm:left-4  max-w-[120px] arrow_down  p-3"><img src={arrowDown} alt="" /></div>
  <section className="marquee">
   <div className='marquee_inner'>
   <div className="marquee_part">COLABORATION PROACTIVITY MODERN DESIGN TEAM WORK</div>
          <div id='text_marquee' className="marquee_part">COLABORATION PROACTIVITY MODERN DESIGN TEAM WORK</div>
          <div id='text_marquee' className="marquee_part">COLABORATION PROACTIVITY MODERN DESIGN TEAM WORK</div>
          <div id='text_marquee' className="marquee_part">COLABORATION PROACTIVITY MODERN DESIGN TEAM WORK</div>
          <div id='text_marquee' className="marquee_part">COLABORATION PROACTIVITY MODERN DESIGN TEAM WORK</div>
          <div id='text_marquee' className="marquee_part">COLABORATION PROACTIVITY MODERN DESIGN TEAM WORK</div>
          <div id='text_marquee' className="marquee_part">COLABORATION PROACTIVITY MODERN DESIGN TEAM WORK</div>
    {stats.map((stat) =>(
      <div key={stat.id} className={`marquee_part`}>      
        <h4 className=''>{stat.value}</h4>
        <p className=' '>{currentLanguage === "en" ? stat.title : stat.titleSpanish}</p>
      </div>
   
    ))}
    </div>

  </section>
  </div>
  )}


export default Stats