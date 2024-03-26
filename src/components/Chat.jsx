import React from 'react'
import { IoLogoWhatsapp } from "react-icons/io";
import ReactWhatsapp from 'react-whatsapp';

export default function Chat() {

  
  return (
  
    <div className='flex'>
        <a href="https://web.whatsapp.com/send?phone=+254791497403&text=Hello%20Solar-Spark%20I'm%20Interested%20In%20Your%20Products" target="_blank">
            <IoLogoWhatsapp className=' text-6xl text-main-6  bg-transparent '/>
        </a>
    </div>
  )
}
