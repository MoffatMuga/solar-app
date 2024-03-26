//"use client";
import React, { useEffect } from 'react'
import Image from 'next/image'
import AOS  from 'aos'
import 'aos/dist/aos.css'
import Link from 'next/link'


//import { Icon } from '@iconify/react';



export default function Hero() {
useEffect(() => {
  AOS.init({duration:1200})
})

  return (
    <div>
        {/* <div className='relative flex flex-col mt-4'>
            <Image src={images[currentImg]} height={400} width={400} className=' object-cover items-center'/>
            <div className="absolute inset-0 flex justify-between items-center ">
              <button className="text-white text-4xl px-3 py-2   border-4" onClick={prevImg}>
                {'<'}
              </button>
              <button className="text-white text-4xl px-3 py-2 border-4" onClick={nextImg}>
                 {'>'}
              </button>
          </div>
        </div> */}

        <div>
            <section className='pt-6'>
              <div className='pt-14'>
                <div className='md:flex'>
                  {/* <div className='w-full md:basis-1/2 mb:8 md:mb-0'>
                    <h2>
                      Welcome 
                    </h2>
                  </div> */}
                  <div className='z-[300] absolute px-3 md:px-10 pt-[4rem] '>
                    <p className='text-white text-2xl md:text-4xl pb-10 '><span className='text-main-1 text-3xl md:text-7xl font-bold md:font-[800] md:mb-3'>Empowering</span> <br/>Tomorrow with Solar Energy! </p>
                        <p className='text-main-3 text-l md:text-3xl '>
                           Explore our site to discover the bright future of <br className='md:hidden'/> solar energy.
                        </p>

                    <div className='flex md:flex-row gap-2 mt-5'>
                      {/* <button className='bg-main-1 border px-3 py-2 text-main-3 border-none hover:bg-transparent' id='contact'>Request quotation</button>
                      <button className='bg-transparent border border-white px-3 py-2 text-main-3 hover:bg-main-1' id='products'>Products</button> */}

                        <Link href="#contact" passHref>
                          <button className='bg-main-1 border px-3 py-2 text-main-3 border-none hover:bg-transparent'>Request quotation</button>
                        </Link>
                        <Link href="#products" passHref>
                          <button className='bg-transparent border border-white px-3 py-2 text-main-3 hover:bg-main-1'>Products</button>
                        </Link>
                    </div>

                  </div>
                  <div className='relative items-center'>
                    
                    <Image src='/solar-1.jpg'width={400} height={400} className=' w-screen h-[500px] object-cover bg-black bg-opacity-80' data-aos='zoom-in-left' data-aos-delay='100'/>
                    
                    
                    <div className='absolute inset-0 bg-black opacity-50 w-screenh-[500px]'></div>
                    
                  </div>
                  
                </div>

              </div>
              <div className='pt-14' id='about'>
                  <div className='  flex justify-center items-center gap-8 sm:px-2'>
                      <hr className='w-20 border-2 border-main-1 items-center'/>
                      <h2 className='text-3xl text-text-color text-center font-[700]'>
                        WHAT WE OFFER
                      </h2>
                      <hr className='w-20 border-2 border-main-1 items-center'/>
                  </div>
                  <p className='text-center flex justify-center items-center italic text-balance text-black/60 mt-8'>
                  Discover Solar Spark Solutions for all your solar energy needs. We offer premium solar flood lights, solar PV designs, solar water heaters, and expert electrical installations. Whether you seek eco-friendly outdoor illumination, efficient solar PV systems, or solar-powered hot water solutions, we deliver quality products and services. 
                  </p>

                  <p className='text-center flex justify-center items-center italic text-balance text-black/60 mt-0'>
                  Our team of professionals ensures tailored solutions to meet your requirements, prioritizing sustainability and advanced technology. Embrace renewable energy with Solar Spark Solutions and reduce your carbon footprint while enjoying cost-effective and reliable solar energy solutions. Experience the power of the sun with Solar Spark Solutions today.
                  </p>
              </div>

            </section>
        </div>
    </div>
  )
}
