import React from 'react'
import backgroundPic from '../images/background.jpg'
import kamo from '../images/Kamo.jpg'
import { Link } from 'react-router-dom'
import Slideshow from '../Components/Slideshow'
import { FaArrowRight } from 'react-icons/fa'

export const Home = () => {
  return (
    <>
        <div className='relative h-screen bg-cover bg-center'
            style={{backgroundImage: `url(${backgroundPic})`}}>

            <div className='absolute inset-0 flex flex-col items-center justify-center'>
                <div className='container mx-auto px-4 mt-48 flex justify-center'>
                    <img src = {kamo} className='w-40 rounded-3xl shadow-violet-600 mb-10 mt-8 shadow-[20px_20px_5px_5px_rgba(0,0,0,0.3)] px-2 py-2'></img>
                </div>
                <h1 className='text-4xl md:text-6xl font-bold text-white mb-6'>Hey there, I'm a frontend software developer</h1>
                <p className='text-xl md:text-2xl text-white mb-16'>Browse through, I guarantee you'll find something you like.</p>
                <div>
                <Slideshow />
                <Link to = '/projects'>
                    <p className='text-center mt-10 mb-20 text-white'>Previous Projects  <FaArrowRight className='inline' /></p>
                </Link>
            </div>
            </div>
            
        </div>
    </>
  )
}
