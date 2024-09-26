import React from 'react'
import Kamo2 from '../images/kamo-no-bg.png'
import { Link } from 'react-router-dom'
import { TfiHandPointDown } from "react-icons/tfi";
import { FaBootstrap, FaNodeJs, FaReact } from 'react-icons/fa';
import { VscVscode } from "react-icons/vsc";

export const AboutComp = () => {
  return (
    <>
        <div className='grid cols-1 md:grid-cols-2 text-white text-center'>
            <div className='relative flex justify-center items-center min-h-screen'>
                <img src={Kamo2} className='relative z-10 w-60 mb-10'></img> 
             {/* circular path for icons */}
                <div className='absolute w-[400px] h-[400px] flex justify-center items-center border border-dashed border-pink-600 rounded-full'>
                    <div className='absolute w-full h-full animate-rotate-icons'>
                        <FaReact size={46} className='absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-blue-500 bg-white px-2 rounded-full'/>
                        <FaNodeJs size={46} className='absolute right-0 top-1/2 transform translate-x-5 -translate-y-1/2 text-teal-500 bg-white px-2 rounded-full'/>
                        <VscVscode size={46} className='absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-5 text-blue-600 bg-white px-2 rounded-full'/>
                        <FaBootstrap size={46} className='absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-purple-600 bg-white p-2 rounded-full'/>
                    </div>
                </div>
               
            </div>
            <div className='flex flex-col justify-center items-center'>
                <h3 className=' italic md:text-3xl text-purple-600 mb-8'><TfiHandPointDown className='inline'/> About ME</h3>
                <p className='text-2xl md:text-4xl mb-3'>Always Striving for Excellence</p>
                <p className='text-xl mb-16'>With strong interpersonal-skills, clear communication and meticulous attention to detail, 
                I am committed to delivering exceptional results in every project I take on.</p>
                <Link to= '/about' className='flex justify-center'>
                    <button className=' text-white rounded-2xl bg-purple-600 px-3 py-2 hover:bg-purple-700'>Know more</button>
                </Link>
            </div>
        </div>
    </>
  )
}
