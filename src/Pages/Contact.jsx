import React from 'react'
import backgroundPic from '../images/background.jpg'
import { FaEnvelope, FaPhone } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";

export const Contact = () => {
  return (
    <div>
        <div className='relative min-h-screen bg-cover bg-center' 
            style={{backgroundImage: `url(${backgroundPic})`}}>
        <div className='flex flex-col items-center justify-center'>
            <div className='font-bold bg-gradient-to-t from-darkPurple via-lightPurple to-purple-600 bg-clip-text text-transparent'>
                <h2 className='text-5xl pt-32'> Contact Me</h2>
            </div>
            
            <div className='container mx-auto px-4 py-12'>
                 <div className='grid gap-8 sm:grid-cols-1 md:grid-cols-2'>
                    <div className='bg-white rounded-lg shadow-md p-6'>
                        <h3 className='text-xl font-bold mb-4'>Contact Details</h3>
                        <p> If you are interested in working with me, feel free to contact me 
                            using the below contact information or send me a message. I would love to hear from you.</p>
                    <div className='flex items-center mb-4 mt-10'>
                        <FaEnvelope className='text-blue-500 mr-2'/>
                        <p>Kamopmkwanazi@gmail.com</p>
                    </div>
                    <div className='flex items-center mb-4'>
                        <FaPhone className='text-blue-500 mr-2' />
                        <p>079 224 7958</p>
                    </div>
                    <div className='flex items-center mb-4'>
                        <FaMapLocationDot className='text-blue-500 mr-2' />
                        <p> 275 Helen Joseph street <br></br> Pretoria CBD, South Africa</p>
                    </div>
                    </div>

                {/* Send message section */}
                <div className='bg-white rounded-lg shadow-md p-6'>
                    <h3 className='text-xl font-bold mb-4'>Get in touch</h3>
                <form>
                    <div className='mb-4'>
                    <label className='block text-gray-700 mb-2' htmlFor='Name'>Name</label>
                    <input type='text' className='w-full p-2 border border-gray-400 rounded' placeholder='Enter your name'></input>
                    </div>

                    <div className='mb-4'>
                    <label className='block text-gray-800 mb-2' htmlFor='Name'>Email</label>
                    <input type='email' className='w-full p-2 border border-gray-400 rounded' placeholder='Enter your Email'></input>
                    </div>

                    <div className='mb-4'>
                    <label className='block text-gray-700 mb-2' htmlFor='Name'>Message</label>
                    <textarea className='w-full p-2 border border-gray-400 rounded' placeholder="Write Message" id=''></textarea>
                    </div>
                    
                    <button type='submit' className='rounded-full px-3 py-3 text-white text-xs font-semibold bg-gradient-to-r from-darkPurple to-lightPurple'>Send Message</button>
                </form>
                </div>
                </div>
                
            </div>
           
        </div>

        </div>
    </div>
    
  )
}
