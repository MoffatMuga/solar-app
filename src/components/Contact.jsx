// components/ContactForm.js
"use client";
import { useState } from 'react';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


const ContactForm = ({ isOpen, onClose }) => {

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_m1movdy', 'template_xmw3jxk', form.current, {
        publicKey: 'dyjulSJpPbI5rtU2K',
      
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setShowSuccessMessage(true);
          onClose();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };


  return (
    <div className={`fixed inset-0 z-[999]  ${isOpen ? '' : 'hidden'}`}>
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

        <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
          <div>
            <div className="mt-3 text-center sm:mt-0 sm:text-left">
              <h3 className="text-lg font-medium text-gray-900">Contact Us</h3>
              <div className="mt-2">
                <form className="space-y-6" ref={form} onSubmit={sendEmail}>
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                      Name
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="user_name"
                        id="name"
                        // onChange={handleChange}
                        // value={formData.name}
                        autoComplete="given-name"
                        required
                        
                        className="block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <div className="mt-1">
                      <input
                        type="email"
                        name="user_email"
                        id="email"
                        // onChange={handleChange}
                        // value={formData.email}
                        autoComplete="email"
                        required
                        className="block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                      Phone
                    </label>
                    <div className="mt-1">
                      <input
                        type="tel"
                        name="user_phone"
                        id="phone"
                        // onChange={handleChange}
                        // value={formData.phone}
                        autoComplete="tel"
                        required
                        className="block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                      Message
                    </label>
                    <div className="mt-1">
                      < textarea
                        type="text"
                        name="message"
                        id="location"
                        // onChange={handleChange}
                        // value={formData.location}
                        autoComplete="address-level1"
                        required
                        className="block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                  <div className="pt-5">
                    <div className="flex justify-end">
                      <button
                        type="button"
                        onClick={onClose}
                        className="inline-flex justify-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      >
                        Close
                      </button>
                      <button
                        type="submit"
                        value="Send"
                        className="ml-3 inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showSuccessMessage && (
        <div className="fixed inset-0 flex items-center justify-center">
          <div className="bg-green-500 text-white py-2 px-4 rounded-md shadow-md">
            <p>Message sent successfully!</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactForm;
