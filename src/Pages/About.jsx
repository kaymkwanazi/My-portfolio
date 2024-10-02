import React from 'react'
import backgroundPic from '../images/background.jpg'
import { FaCss3, FaHtml5, FaReact, FaNodeJs, FaBootstrap, FaHandPointDown } from "react-icons/fa";
import { TbAugmentedReality } from "react-icons/tb";
import { RiTailwindCssFill } from "react-icons/ri";
import { BiSupport } from "react-icons/bi";
import { VscVscode } from "react-icons/vsc";
import kay from '../images/kamo-no-bg.png'
import { ProgressBar } from '../Components/ProgressBar';

export const About = () => {
  return (
    <div>
        <div className='relative min-h-screen bg-cover bg-center' 
            style={{backgroundImage: `url(${backgroundPic})`}}>
            <div className='flex flex-col justify-center items-center min-h-screen'>
                <div className='container mx-auto px-4'>
                    <div className='grid cols-1 md:grid-cols-2  gap-x-20'>
                        {/* Col 1 */}
                        <div>
                            <h3 className='text-center pb-10 pt-36 text-5xl font-semibold bg-gradient-to-t from-darkPurple via-lightPurple to-purple-600  bg-clip-text text-transparent'>About Me </h3>
                            <p className='text-white text-center text-md md:text-xl'>My name is Kamogelo Patience Mkwanazi, a passionate and dedicated Computer Systems Engineer with a love for web development.
                                My journey began at the Tshwane University of Technology where I discovered my love for technology. Since then, I've had an
                                opportunity to work on various projects. Currently I'm focused on web development, mainly front-end development. I love turning ideas into interactive, user-friendly web applications.
                            </p>
                        </div>
                        {/* second column */}
                        <div className='relative flex justify-center items-center h-screen'>
                            <img src={kay} className='relative z-10 w-60'></img> 
                            <div className='absolute w-[400px] h-[400px] flex justify-center items-center border border-dashed border-pink-600 rounded-full'>
                                <div className='absolute w-full h-full animate-rotate-icons'>
                                    <FaReact size={46} className='absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-blue-500 bg-white px-2 rounded-full'/>
                                    <FaNodeJs size={46} className='absolute right-0 top-1/2 transform translate-x-5 -translate-y-1/2 text-teal-500 bg-white px-2 rounded-full'/>
                                    <VscVscode size={46} className='absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-5 text-blue-600 bg-white px-2 rounded-full'/>
                                    <FaBootstrap size={46} className='absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-purple-600 bg-white p-2 rounded-full'/>
                                </div>
                            </div>
               
                        </div>
                    </div>
                    {/* skills section */}
                    <div className='pb-28'>
                        <h3 className='text-center pb-16 text-5xl font-semibold bg-gradient-to-b from-darkPurple via-lightPurple to-purple-600 bg-clip-text text-transparent'>My Skills</h3>
                        <div className="flex justify-around items-center text-white">
                           <ProgressBar />
                        </div>
                    </div>
                   
                </div>
            </div>
           

        </div>
    </div>
  )
}
