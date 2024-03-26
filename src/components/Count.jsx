"use client";
import React from 'react'
import CountUp from 'react-countup';
import { IoIosPeople } from "react-icons/io";
import { FaPeopleCarry } from "react-icons/fa";
import { BiHappyHeartEyes } from "react-icons/bi";
import { MdEngineering } from "react-icons/md";
import AOS  from 'aos'
import 'aos/dist/aos.css'

export default function Count() {
  return (
    <div className='flex md:flex-row flex-wrap md:justify-around items-center gap-2 justify-center bg-main-1 h-[300px] mt-10' >
        <div data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000" className='flex rounded shadow-xl flex-col border-2 border-lg  items-center h-35 w-25 px-2 bg-white'>
            <IoIosPeople className='text-6xl text-main-1' />
            <h2 className='text-xl text-black/70 font-bold'><CountUp start={0} end={40} duration={1} suffix='+'  /></h2>
            <h4 className='text-lg text-center font-bold text-black/70'>projects <br className='md:hidden'/>completed </h4>
        </div>
        <div data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000" className='flex flex-col rounded shadow-lg border-2 border-lg  items-center h-35 w-25 px-2 bg-white'>
            <FaPeopleCarry className='text-6xl text-main-1'/>
            <h2 className='text-xl  text-black/70 font-bold'><CountUp start={0} end={100} duration={1} suffix='%' /></h2>
            <h4 className='text-lg text-center font-bold text-black/70'>client <br className='md:hidden'/>handovers </h4>
        </div>
        <div data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000" className='flex flex-col rounded shadow-lg border-2 border-lg  items-center h-35 w-25 px-2 bg-white'>
            <BiHappyHeartEyes className='text-6xl text-main-1'/>
            <h2 className='text-xl  text-black/70 font-bold'><CountUp start={0} end={96} duration={1} suffix='%'  /></h2>
            <h4 className='text-lg text-center font-bold text-black/70'>satisfied <br className='md:hidden'/>clients </h4>
        </div>
        <div data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000" className='flex flex-col rounded shadow-lg border-2 border-lg  items-center h-35 w-25 px-2 bg-white'>
            <MdEngineering className='text-6xl text-main-1'/>
            <h2 className='text-xl  text-black/70 font-bold'><CountUp start={0} end={10} duration={1} suffix='+' /></h2>
            <h4 className='text-lg text-center font-bold text-black/70'>qualified <br className='md:hidden'/>personell </h4>
        </div>
        
    </div>
  )
}
