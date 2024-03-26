"use client";
import React, { useEffect, useRef, useState } from 'react'
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import { RiDoubleQuotesL } from "react-icons/ri";
import Image from 'next/image';
import AOS  from 'aos'
import 'aos/dist/aos.css'




const comments = [
    {
        image:"/male-4.jpg",
        name:"Eliud Matthews",
        title:"Exceptional Service and Savings",
        review:" From the initial consultation to the installation, everything was seamless. Not only have I significantly reduced my carbon footprint, but I'm also saving a considerable amount on my energy bills"

    },
    {
        image:"/male-3.jpg",
        name:"Otieno Adera",
        title:"Professional Installation and Support",
        review:"The professionalism exhibited by your installation team was outstanding. They arrived on time, worked efficiently, and ensured that everything was set up perfectly. Moreover, the ongoing support and maintenance have been exceptional"
    },
    {
        image:"/male-2.jpg",
        name:"Nyang",
        title:"Impressive Quality and Durability",
        review:"I've had your solar panels installed for over a year now, and I'm continually impressed by their quality and durability. Despite various weather conditions, they've held up exceptionally well and continue to generate ample energy for my home. "
    },
    {
        image:"/male-1.jpg",
        name:"Gitau Collins",
        title:"Great Customer Service Experience",
        review:" Dealing with your customer service team has been a pleasure from start to finish. They were knowledgeable, responsive, and always willing to address any questions or concerns I had."
    },
    {
        image:"/female-1.jpg",
        name:"Nyarangi Mercy",
        title:"Positive Environmental Impact",
        review:"Choosing your solar power company has allowed me to make a positive impact on the environment while also benefiting financially"
    },
    {
        image:"/famale-2.jpg",
        name:"Claudia Amondi",
        title:"Efficient and Cost-Effective Solution",
        review:"Opting for solar power from your company has proven to be a wise investment. Not only am I reducing my reliance on traditional energy sources, but I'm also enjoying significant cost savings over the long term. "
    },
]

export default function Comments() {

    const [currentIndex, setCurrentIndex] = useState(0)

const handleNext = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1)
}

const handlePrev = () => {
    setCurrentIndex((prevIndex) => prevIndex - 1)
}

useEffect(() => {
    AOS.init({duration:1200})
})

  return (
  
    <div className='flex md:flex-row item-center justify-around mt-10 flex-col space-y-3'>
            
            {comments.slice(currentIndex, currentIndex + 2).map((comment, index) => (
                <div className=' relative md:w-[400px] md:h-[270px] rounded-tl-2xl border-2 rounded-br-2xl flex flex-col p-2 ' key={index} data-aos='fade-right'>
                    <div className='flex justify-between'><Image src={comment.image} alt='image' height={30} width={30} className='object-cover rounded-full  border-main-1 h-20 w-20' /><span className='font-bold text-xl'>{comment.name}</span></div>
                    <div><h2 className='text-center font-semibold'>{comment.title}</h2></div>
                    <div>
                        <p><span><RiDoubleQuotesL /></span>{comment.review}</p>
                    </div>
                </div>
            ))}
            <div className='md:absolute flex justify-between z-[99] md:left-0 md:right-0  container  mt-4'>
                <button
                    className=' bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-main-1 rounded-full shadow-xl w-10 h-10 '
                    disabled={currentIndex === 0}
                    onClick={handlePrev}
                >
                    <div className='flex justify-center items-center h-full w-full'>
                        <RiArrowLeftSLine size={24} className='text-main-1' />
                    </div>
                </button>

                <button
                    className=' bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-main-1 rounded-full w-10 h-10 items-center shadow-xl '
                    disabled={currentIndex === comments.length - 2}
                    onClick={handleNext}
                >
                    <div className='flex justify-center items-center h-full w-full'>
                        <RiArrowRightSLine size={24} className='text-main-1' />
                    </div>
                </button>
            </div>
        </div>



  )
}

