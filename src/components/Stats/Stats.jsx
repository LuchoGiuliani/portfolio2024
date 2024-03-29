import React, { useEffect, useRef } from 'react'

import { useLanguage } from '../../context/LanguageContext'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap/gsap-core'
import { arrowDown } from '../../assets'
import SplitType from "split-type";

import styles from "./stats.module.css"

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
  

  return(

  <div className='stats_section' ref={app}>
      <section className="stats_ text-white">
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