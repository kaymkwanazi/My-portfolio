import React from 'react'
import backgroundPic from '../images/background.jpg'
import { FaCss3, FaHtml5, FaReact } from "react-icons/fa";
import { TbAugmentedReality } from "react-icons/tb";
import { RiTailwindCssFill } from "react-icons/ri";
import { BiSupport } from "react-icons/bi";

export const About = () => {
  return (
    <div>
        <div className='relative h-screen bg-cover bg-center' 
            style={{backgroundImage: `url(${backgroundPic})`}}>
            <div className='container mx-auto px-4'>
                <div>
                    <h3 className='text-center pt-36 mb-10 text-2xl md:text-4xl text-white'>About Me</h3>
                    <p className='text-white text-lg md:text-xl'>My name is Kamogelo Patience Mkwanazi, a passionate and dedicated Computer Systems Engineer with a love for web development.
                        My journey began at the Tshwane University of Technology where I discovered my love for technology. Since then, I've had an
                        opportunity to work on various projects. Currently I'm focused on web development, mainly front-end development.
                        I'm always open to new opportunities and collaborations.  
                    </p>
                </div>
                <div>
                    <h3 className='text-center pt-20 mb-10 text-2xl md:text-4xl text-white'>My Skills</h3>
                    <div className="flex flex-col sm:flex-row sm:flex-wrap sm:justify-between">
                        <p className='text-white text-2xl'><FaReact className='text-blue-500 transform transition duration-300 hover:scale-110'/>React.js</p>
                        <p className='text-white text-2xl'><FaHtml5 className='text-blue-500 transform transition duration-300 hover:scale-110'/>HTML</p>
                        <p className='text-white text-2xl'><FaCss3 className='text-blue-500 transform transition duration-300 hover:scale-110'/>CSS</p>
                        <p className='text-white text-2xl'><TbAugmentedReality className='text-blue-500 transform transition duration-300 hover:scale-110' />Extended Reality</p>
                        <p className='text-white text-2xl'><RiTailwindCssFill className='text-blue-500 transform transition duration-300 hover:scale-110'/>Tailwindcss</p>
                        <p className='text-white text-2xl'><BiSupport className='text-blue-500 transform transition duration-300 hover:scale-110'/>User Support</p>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}
