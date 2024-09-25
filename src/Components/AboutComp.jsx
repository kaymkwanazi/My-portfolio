import React from 'react'
import Kamo2 from '../images/aboutpic.jpg'
import { Link } from 'react-router-dom'
import { TfiHandPointDown } from "react-icons/tfi";

export const AboutComp = () => {
  return (
    <>
        <div className='grid cols-1 md:grid-cols-2 text-white text-center'>
            <div>
               <img src={Kamo2} className='w-1/2 ml-32 rounded-3xl'></img>  {/* Replace image */}
            </div>
            <div>
                <h3 className=' italic md:text-2xl text-blue-500 mb-10'><TfiHandPointDown className='inline '/> About ME</h3>
                <p className='text-2xl md:text-4xl mb-20'>Always Strive For Better Work</p>
                <Link to= '/about' className='flex justify-center'>
                    <button className=' text-white rounded-2xl bg-slate-400 px-3 py-2 '>Know more</button>
                </Link>
            </div>
        </div>
    </>
  )
}
