import React from 'react'
import { FaCopyright, FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import logo from '../images/logo.png'
import { FaRegCopyright } from 'react-icons/fa6'

export const Footer = () => {
  return (
    
      <div className='bg-slate-400 p-4 text-gray-900'>
          <div className='container mx-auto px-4'>
            <div className='grid cols-1 md:grid-cols-3 gap-5'>
              <div>
                <img src={logo} className='w-5 md:w-10'></img>
              </div>
            
              <div className='flex flex-col md:items-center'>
                    <h2 className='text-lg font-semibold'>Quick Links</h2>
                    <div className='flex flex-col text-sm mt-4 space-y-4'>
                        <Link to= '/'>Home</Link>
                        <Link to= '/about'>About</Link>
                        <Link to= '/projects'>Gallery</Link>
                        <Link to= '/contact'>Contact</Link>
                    </div>
              </div>

              <div className='flex flex-col md:items-center'>
                <h2 className='text-lg font-semibold'>Connect with me</h2>
                <div className='flex flex-col mt-4 space-y-4'>
                  <FaFacebook className='text-blue-800 md:text-xl hover:text-blue-900'/>
                  <FaInstagram className='text-pink-800 md:text-xl hover:text-pink-900' />
                  <FaWhatsapp  className='text-green-800  md:text-xl hover:text-green-900'/>
                  <FaLinkedin  className='text-blue-800  md:text-xl hover:text-blue-900'/>
                </div>
              </div>
            </div>
          </div>

          <div className='text-center border-t pt-5 mt-5'>
            <p><FaRegCopyright size={10} className='inline'/> Kamogelo Patience Mkwanazi. 2024. All rights reserved.</p>
          </div>
        </div>
   
  )
}
