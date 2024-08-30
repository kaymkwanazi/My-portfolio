import React from 'react'
import backgroundPic from '../images/background.jpg'

export const Projects = () => {
  return (
    <div>
        <div className='relative h-screen bg-cover bg-center' 
            style={{backgroundImage: `url(${backgroundPic})`}}>
          <div className='absolute inset-0 flex flex-col items-center justify-center'>
            <div className='container mx-auto px-4'>
                <div>
                    <h3 className='text-center pt-36 mb-10 text-2xl md:text-4xl text-white'>My Projects</h3>
                    <p className='text-white text-lg md:text-xl'>I have worked on various projects while I was a student. I've recently joined the 
                      Tshimologong Samsung sofware development program and here are some of the projects I have done thus far.
                    </p>
                </div>
                </div>
                <div className='container mx-auto px-4'>
                    <div className='flex justify-center'>
                      <div className='flex gap-10 cols-1 md:cols-3'>
                        <div className='text-white pt-10'>Project 1</div>
                        <div className='text-white pt-10'>Project 2</div>
                        <div className='text-white pt-10'>Project 3</div>
                        <div className='text-white pt-10'>Project 4</div>
                        <div className='text-white pt-10'>Project 5</div>
                      </div>
                    </div>
            </div>
          </div>
        </div>
    </div>
  )
}
