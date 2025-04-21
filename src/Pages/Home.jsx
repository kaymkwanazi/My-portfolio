import React from 'react'
import backgroundPic from '../images/background.jpg'
import { Link } from 'react-router-dom'
import kay3 from '../images/about2.png';
import { FaReact, FaNodeJs } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";


export const Home = () => {
  return (
    <div
      className='relative min-h-screen bg-cover bg-center flex items-center'
      style={{ backgroundImage: `url(${backgroundPic})` }}
    >
      <div className='container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-center gap-4 sm:gap-6 lg:gap-8'>
        {/* Left Text Section */}
        <div className='text-left space-y-4 sm:space-y-5 max-w-md'>
          <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight' style={{ color: '#FEF4EC' }}>
            Hey! I'm a <br />Web Developer
          </h1>
          <p className='text-sm sm:text-md'  style={{ color: '#F1F0F9' }}>
            I am a Full-Stack Web Developer with extensive experience of over 4 years. 
            My expertise is in creating & designing websites, Mobile Apps, and Desktop Applications.
          </p>
          <div className='flex space-x-2 sm:space-x-3'>
            <Link to='/about'>
              <button className='bg-teal-500 hover:bg-teal-600 text-white px-4 sm:px-5 py-2 rounded-full shadow-md transition text-sm sm:text-base'>
                Learn More
              </button>
            </Link>
            <Link to='/contact'>
              <button className='bg-black hover:bg-gray-800 text-white px-4 sm:px-5 py-2 rounded-full shadow-md transition text-sm sm:text-base'>
                Hire Me
              </button>
            </Link>
          </div>
        </div>

        {/* Right Image Section */}
        <div className='flex justify-center items-center'>
         <div className='relative flex justify-center items-center h-screen'>
            <img 
                src={kay3} 
                className='relative z-10 w-[400px] h-[400px] rounded-full object-cover -translate-y-2' 
                alt="Profile"
            />
            <div className='absolute w-[400px] h-[400px] flex justify-center items-center border border-dashed rounded-full' style={{ borderColor: '#E2E7F3' }}>
                <div className='absolute w-full h-full animate-rotate-icons'>
                    <FaReact size={46} className='absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-blue-500 bg-white px-2 rounded-full'/>
                    <FaNodeJs size={46} className='absolute right-0 top-1/2 transform translate-x-5 -translate-y-1/2 text-teal-500 bg-white px-2 rounded-full'/>
                    <SiMongodb size={46} className='absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-5 text-blue-600 bg-white px-2 rounded-full'/>
                    <FaGithub size={46} className='absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-purple-600 bg-white p-2 rounded-full'/>
                </div>
            </div>
        </div>
        </div>
      </div>
    </div>
  )
}