import React from 'react'
import { RiArrowRightUpLine } from "react-icons/ri";
import { SlSocialFacebook } from "react-icons/sl";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import Link from 'next/link';

export default function Footer() {
  return (
    
    <div className='absolute left-0 right-0'>
        <div className='flex bg-main-1 h-[300] mt-10  md:flex-row flex-col container '>
                <div className='flex flex-1 py-3 px-3'>
                    <p className='text-3xl font-bold text-black/60'>
                    Lighting the way to a brighter future.
                    </p>
                </div>
                <div className='flex flex-col flex-1 py-3 px-3'>
                    <h2 className='text-lg font-semibold'>CONTACT</h2>
                    <ul className='text-black/60'>
                        <li>collinsodinga96@gmail.com</li>
                        <li>0705580246</li>
                        <li>0705580246</li>
                        <li>Sondu</li>
                    </ul>
                    <div className='flex flex-row mt-3 font-bold cursor-pointer px-3'> 
                    <p className='hover:text-xl'>See map</p>
                    <span><RiArrowRightUpLine /></span>
                    </div>

                </div>
                <div className='flex flex-col flex-1 py-3 px-3'>
                <h2 className='text-lg font-semibold'>CONTACT</h2>
                    <ul className='text-black/60 font-900'>
                        <li>jamesmark@gmail.com</li>
                        <li>0700841300</li>
                        <li>0700841300</li>
                        <li>Kisumu</li>
                    </ul>
                    <div className='flex flex-row mt-3 font-bold cursor-pointer px-3'> 
                    <p className='hover:text-xl'>See map</p>
                    <span><RiArrowRightUpLine /></span>
                    </div>
                </div>
                <div className='flex flex-col py-3 px-3'>
                    <div className='gap-2'>
                        <form action="">
                            <input type="text"placeholder='our newsletter' />
                            <button>Subscribe</button>
                        </form>
                    </div>
                    <div className='flex flex-row mt-7 text-3xl space-x-3 cursor-pointer'>
                        <Link href='https://www.facebook.com/'><SlSocialFacebook className='hover:text-4xl'/></Link>
                        <Link href='https://www.twitter.com/'><FaXTwitter className='hover:text-4xl'/></Link>
                        <Link href='https://www.youtube.com/'><FaYoutube className='hover:text-4xl'/></Link>
                        <Link href='https://www.instagram.com/'><FaInstagram className='hover:text-4xl'/></Link>
                        

                    </div>
                </div>
        
        </div>
        
            {/* <div className='justify-center bg-gray-200 flex flex-row pb-4 pt-1 '>
                |
                <p className=' hidden md:text-black-70 md:text-center px-2'>Solar Spark Solutions</p>
                |
                <p className='text-black-70 text-center px-2'>2024</p>
                | 
                <p className='hover:text-main-1 text-black/70 text-center cursor-pointer px-2'>visit the developer</p> 
                |
            </div> */}
    </div>
  )
}
