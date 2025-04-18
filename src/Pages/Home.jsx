import React from 'react'
import backgroundPic from '../images/background.jpg'
import kamo from '../images/Kamo.jpg'
import { Link } from 'react-router-dom'
import Slideshow from '../Components/Slideshow'
import { FaArrowRight } from 'react-icons/fa'
import { MdWavingHand } from 'react-icons/md'
import { AboutComp } from '../Components/AboutComp'
import bg1 from '../../public/ProjectsPics/background/89787.jpg'
import bg2 from '../../public/ProjectsPics/background/5590457.jpg'
import bg3 from '../../public/ProjectsPics/background/bg3.jpg'

export const Home = () => {
  return (
    <>
    <div className='relative min-h-screen bg-cover bg-center'
        style={{backgroundImage: `url(${backgroundPic})`}}>
        <div className='flex flex-col justify-center items-center min-h-screen'>
            <div className='container mx-auto px-4'>
                <div className='grid cols-1 md:grid-cols-2'>
                    <div className='flex justify-center'>
                        <img src={kamo} className='w-1/2 h-3/4 mt-24 rounded-3xl'></img>
                    </div>    
                    <div className='flex flex-col justify-center text-center'> 
                        <div className='flex justify-center mb-5 text-yellow-400 animate-wave origin-top-hand'>
                            <MdWavingHand size={76} className=' '/> 
                        </div>
                        <h1 className='text-white text-4xl md:text-5xl'>Hey there, I'm Kamogelo Mkwanazi</h1>
                        <p className='text-white text-xl md:text-xl pt-10 mb-10'>A passionate front-end software developer using React and Node.js. 
                            Check out my projects below to see how I bring creativity and problem-solving together in code.
                        </p>
                    </div>  
                </div>
                <div className='flex flex-col items-center '>
                    <Slideshow />
                   <Link to = '/projects'>
                        <p className='text-center mt-5 text-white'>Previous Projects  <FaArrowRight className='inline' /></p>
                    </Link>
                </div>
                <div className='container mx-auto px-4 pb-10'>
                    <AboutComp />
                </div>
                
            </div>
        </div> 
          
    </div>
            
    </>
  )
}
