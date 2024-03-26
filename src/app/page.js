//import Image from "next/image";
//import Hero from "@/components/Hero";
"use client";
import { CiLocationArrow1 } from "react-icons/ci";
//import { FaWhatsapp } from "react-icons/fa6";
import Card from "@/components/Card";
import Hero from "@/components/Hero";
import Comments from "@/components/Comments";
import Count from "@/components/Count";
import Footer from "@/components/Footer";
import ContactForm from "@/components/Contact";
import { useState } from "react";
import Chat from "@/components/Chat"

export default function Home() {

  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  const toggleContactForm = () => {
    setIsContactFormOpen(!isContactFormOpen);
  };

  return (
    <div>
      <div>
        <section id="home">
            <Hero />
        </section>
          
      </div>
    <section className="mt-10 mb-10" id="products">
            <div className='  flex justify-center items-center gap-8 sm:px-2'>
                            <hr className='w-20 border-2 border-main-1 items-center'/>
                            <h2 className='text-3xl text-text-color text-center font-[700]'>
                              OUR PRODUCTS
                            </h2>
                            <hr className='w-20 border-2 border-main-1 items-center'/>
            </div>
            <div>
              <div >
                    <Card />
              </div>
            </div>
    </section>  
    <div className="mt-10 mb-10">
      <div className='  flex justify-center items-center gap-8 sm:px-2'>
                      <hr className='w-20 border-2 border-main-1 items-center'/>
                      <h2 className='text-3xl text-text-color text-center font-[700]'>
                        WHY US?
                      </h2>
                      <hr className='w-20 border-2 border-main-1 items-center'/>
      </div>
      <div>
        <section id="about">
            <Count />
        </section>
      </div>
    </div>

    <div className="mt-10 mb-10">
      <div className='  flex justify-center items-center gap-8 sm:px-2'>
                      <hr className='w-20 border-2 border-main-1 items-center'/>
                      <h2 className='text-3xl text-text-color text-center font-[700]'>
                        CUSTOMER REVIEWS
                      </h2>
                      <hr className='w-20 border-2 border-main-1 items-center'/>
      </div>
       <div>
          <section>
              <Comments />
          </section>
      </div> 
    </div> 

    <div className="mt-10 mb-2">
      <div className='  flex justify-center items-center gap-8 sm:px-2'>
                      <hr className='w-20 border-2 border-main-1 items-center'/>
                      <h2 className='text-3xl text-text-color text-center font-[700]'>
                        GET IN TOUCH
                      </h2>
                      <hr className='w-20 border-2 border-main-1 items-center'/>
      </div>

    

    <div className=" mt-10  flex flex-row items-center justify-center bg-gray-100" >
      <section id="contact">
          <div className="text-center mb-8">
            <p className="text-3xl font-bold  py-4 text-black/70">Contact Us</p>
            <button
              onClick={toggleContactForm}
              className="mt-4 inline-flex items-center rounded-full shadow-sm text-main-1 text-5xl  hover: border-main-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-main-1"
            >
              <CiLocationArrow1 />
            </button>
          </div>
          <ContactForm isOpen={isContactFormOpen} onClose={toggleContactForm} />
        
      </section>
    </div>
      
    
    <div className='fixed flex flex-end z-[99999] bottom-0 md:right-40 right-0 pb-10' >
        <Chat />
    </div>


      <div>
        <section>
            <Footer />
        </section>
      </div>
  </div>
    </div>
  );
}
