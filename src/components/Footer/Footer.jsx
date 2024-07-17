import React from 'react'
import {logo} from '../../assets'
import {socialMedia} from '../../constants'

import styles from "./footer.module.css"
const Footer = () => (
  <section className= "flex-col mb-4 mt-6">
    <div className={` md:flex-row flex-col mb-8 w-full`}>
      <div className='flex-1 flex  item-center justify-center '>
        <a className='z-[9999]' href="#">
        <img src={logo} alt="logo" className='w-[266px] h-[72px] object-contain mt-6 ' />
        </a>
      </div>
    </div>

    <div className='w-full flex justify-around items-center md:flex-row flex-col pt-6 '>
      <p className='font-poppins font-normal text-center text-[18px] leading-[27px] text-white'>
      Copyright 2024 Luciano Giuliani. All Rights Reserved.               
      </p>
      <div className='flex flex-row md:mt-0 mt-6 z-[9999]'>
        {socialMedia.map((social,index)=>(
          <a target='_blank' href={social.link} key={social.id}>
          <img key={social.id} src={social.icon} alt={social.id} className={`w-[32px] h-[32px]  hover:scale-110 object-contain cursor-pointer ${index !== socialMedia.length -1 ? 'mr-6' : 'mr-0'}`}>
          </img>
          </a>
        ))}

      </div>
    </div>
  </section>
)

export default Footer