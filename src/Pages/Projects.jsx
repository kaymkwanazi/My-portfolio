import React from 'react'
import backgroundPic from '../images/background.jpg'
import drones from '../images/drones.png'
import travel from '../images/destinations.png'
import movieBlog from '../images/movie-blog.png'
import melula from '../images/melula-clone.png'

export const Projects = () => {
  return (
    <div>
        <div className='relative h-screen bg-cover bg-center' 
            style={{backgroundImage: `url(${backgroundPic})`}}>
          <div className='flex flex-col justify-center'>
            <div className='container mx-auto px-4'>
                <div>
                    <h3 className='text-center text-2xl md:text-4xl text-white mt-20 mb-10'>My Projects</h3>
                    <p className='text-white text-lg md:text-xl'>I have worked on various projects while I was a student. I've recently joined the 
                      Tshimologong Samsung sofware development program and here are some of the projects I have done thus far.
                    </p>
                </div>
              </div>
                <div className='container mx-auto px-4'>
                    <div className='flex justify-center'>
                      <div className='grid cols-1 md:grid-cols-3 gap-20'>
                        <div>
                            <div className='text-white font-semibold pt-5 flex justify-center md:pt-10 text-4xl md:text-2xl'>Movie Blog</div>
                            <img src={movieBlog} className='shadow-teal-300 shadow-[20px_30px_5px_2px_rgba(0,0,0,0.3)] py-2 px-2 mt-5 rounded-3xl'></img>
                        </div>
                        <div>
                             <div className='text-white flex justify-center font-semibold text-4xl md:text-2xl pt-5 md:pt-10'>Dronotics</div>
                             <img src={travel} className='shadow-teal-300 shadow-[20px_40px_5px_2px_rgba(0,0,0,0.3)] py-2 px-2 mt-5 rounded-3xl'></img>
                        </div>
                        <div>
                            <div className='text-white font-semibold flex justify-center pt-5 text-4xl md:text-2xl md:pt-10'>Destinations</div>
                            <img src={melula} className='shadow-teal-300 shadow-[20px_40px_5px_2px_rgba(0,0,0,0.3)] py-2 px-2 mt-5 rounded-3xl'></img>
                        </div>
                        <div>
                            <div className='text-white font-semibold flex justify-center pt-5 text-4xl md:text-2xl md:pt-10'>Destinations</div>
                            <img src={melula} className='shadow-teal-300 shadow-[20px_40px_5px_2px_rgba(0,0,0,0.3)] py-2 px-2 mt-5 rounded-3xl'></img>
                        </div>
                      </div>
                    </div>
            </div>
          </div>
        </div>
    </div>
  )
}
