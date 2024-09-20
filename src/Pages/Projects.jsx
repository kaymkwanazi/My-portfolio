import React from 'react'
import backgroundPic from '../images/background.jpg'
import drones from '../images/drones.png'
import travel from '../images/destinations.png'
import movieBlog from '../images/movie-blog.png'
import melula from '../images/melula-clone.png'
import pizzashop from '../images/pizza-shop.png'

export const Projects = () => {
  return (
    <>
    <div>
        <div className='relative min-h-screen bg-cover bg-center' 
            style={{backgroundImage: `url(${backgroundPic})`}}>
          <div className='flex flex-col justify-center min-h-screen'>
            <div className='container mx-auto px-4 mb-28'>
                <div>
                    <h3 className='text-center text-2xl md:text-4xl text-white mt-20 mb-10'>My Projects</h3>
                    <p className='text-white text-lg md:text-xl text-center mb-10'>I have worked on various projects while I was a student. Listed below are some of the projects I have worked on thus far.
                    </p>
                </div>

                    <div className='flex grow'>
                      <div className='grid cols-1 md:grid-cols-3 gap-20'>
                        <div>
                            <div className='text-white font-semibold pt-5 flex justify-center md:pt-10 text-4xl md:text-2xl'>Movie Blog</div>
                            <img src={movieBlog} className=' w-96 h-64 shadow-violet-400 shadow-[20px_20px_5px_2px_rgba(0,0,0,0.3)] py-2 px-2 mt-5 rounded-3xl'></img>
                        </div>
                        <div>
                             <div className='text-white flex justify-center font-semibold text-4xl md:text-2xl pt-5 md:pt-10'>Destinations</div>
                             <img src={travel} className='w-96 h-64 shadow-violet-400 shadow-[20px_20px_5px_2px_rgba(0,0,0,0.3)] py-2 px-2 mt-5 rounded-3xl'></img>
                        </div>
                        <div>
                            <div className='text-white font-semibold flex justify-center pt-5 text-4xl md:text-2xl md:pt-10'>Melula</div>
                            <img src={melula} className='w-96 h-64 shadow-violet-400 shadow-[20px_20px_5px_2px_rgba(0,0,0,0.3)] py-2 px-2 mt-5 rounded-3xl'></img>
                        </div>
                        <div>
                            <div className='text-white font-semibold flex justify-center pt-5 text-4xl md:text-2xl md:pt-10'>Dronotics</div>
                            <img src={drones} className='w-96 h-64 shadow-violet-400 shadow-[20px_20px_5px_2px_rgba(0,0,0,0.3)] py-2 px-2 mt-5 rounded-3xl'></img>
                        </div>
                        <div>
                            <div className='text-white font-semibold flex justify-center pt-5 text-4xl md:text-2xl md:pt-10'>Pizza Shop</div>
                            <img src={pizzashop} className='w-96 h-64 shadow-violet-400 shadow-[20px_20px_5px_2px_rgba(0,0,0,0.3)] py-2 px-2 mt-5 rounded-3xl'></img>
                        </div>
                        
                      </div>
                  </div>
            </div>
          </div>
        </div>
    </div>
    </>
  )
}
