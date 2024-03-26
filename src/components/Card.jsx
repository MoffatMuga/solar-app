import React, { useEffect } from 'react'
import Image from 'next/image'
import { useRef } from 'react'
import AOS  from 'aos'
import 'aos/dist/aos.css'

const cards = [
    {
        image: "/solar-flood-light.jpg",
        title: "SOLAR FLOOD LIGHT ",
        description: "Illuminate outdoor spaces efficiently and sustainably with our solar flood light. Perfect for enhancing security, highlighting landscaping, or illuminating pathways with renewable solar energy"
    },
    {
        image: "/solar-water.webp",
        title: "SOLAR WATER HEATER",
        description: "Harness the power of the sun to heat water for your home or business. Our solar water heater systems provide reliable hot water while reducing energy costs and environmental impact"
    },
    {
        image: "/solar-maintenance.jpg",
        title: "SOLAR MAINTENANCE",
        description: "Ensure optimal performance and longevity of your solar energy system with our professional maintenance services. From routine inspections to troubleshooting and repairs, we help you maximize the benefits of solar energy investment"
    }
]

export default function Card() {
   

    useEffect(() => {
        AOS.init({duration:1200})
    })

  return (
    <div className=' md:flex md:flex-row justify-around sm:pb-4 md:mt-10'>

        {cards.map((card, index) => (
            <div key={index} className='rounded shadow-xl gap-3 px-4 h-[450px] md:w-[300px]' 
            data-aos='fade-up'
            >
                <Image src={card.image} height={400} width={200} className='h-[250px] w-full object-cover'/>
                <h2 className='flex justify-center bg-main-1  text-white bg-opacity-70'>{card.title}</h2>
                <p className='text-black/70'>{card.description}</p>
            </div>
        ))}

    </div>
  )
}
