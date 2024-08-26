import React from 'react'
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import logo from '../images/logo.png'

export const Footer = () => {
  return (
    <div className='bg-slate-400 p-4 text-gray-900'>
      <div className='container mx-auto px-4'>
        <div className='grid cols-1 md:grid-cols-3'>
          <div>
            <img src={logo} className='w-10'></img>
          </div>
         
          <div className='flex flex-col md:items-center'>
                <h2 className='text-lg font-semibold'>Quick Links</h2>
                <div className='flex flex-col mt-4 space-y-4'>
                    <Link to= '/'>Home</Link>
                    <Link to= '/about'>About</Link>
                    <Link to= '/projects'>Gallery</Link>
                    <Link to= '/contact'>Contact</Link>
                </div>
          </div>

          <div className='flex flex-col md:items-center'>
            <h2 className='text-lg font-semibold'>Connect with me</h2>
            <div className='flex flex-col mt-4 space-y-4'>
              <FaFacebook size={28} className='text-blue-800 hover:text-blue-900'/>
              <FaInstagram size={28} className='text-pink-800 hover:text-pink-900' />
              <FaWhatsapp size={28} className='text-green-800 hover:text-green-900'/>
            </div>
          </div>
        </div>
      </div>

      <div className='text-center border-t pt-5 mt-5'>
        <p> Kamogelo Patience Mkwanazi. 2024. All rights reserved.</p>
      </div>
    </div>
  )
}
