import React from 'react'
import backgroundPic from '../images/background.jpg'
import drones from '../images/drones.png'
import travel from '../images/destinations.png'
import movieBlog from '../images/movie-blog.png'
import melula from '../images/melula-clone.png'
import pizzashop from '../images/pizza.png'
import ProjectsList from '../Components/ProjectsList'
// import ProjectsList from '../../Database/projects.json'

export const Projects = () => {
  
  return (
    <>
    <div>
        <div className='relative min-h-screen bg-cover bg-center' 
            style={{backgroundImage: `url(${backgroundPic})`}}>
          <div className='flex flex-col justify-center min-h-screen'>
            <div className='container mx-auto px-4 mb-28'>
                <div className='font-bold bg-gradient-to-t from-darkPurple via-lightPurple to-purple-600 bg-clip-text text-transparent'>
                    <h3 className='text-center text-5xl pt-32 pb-20'>My Projects</h3>
                    
                </div>

                    <div className='flex grow'>
                      <div className='flex items-center justify-center'>
                        <ProjectsList /> 
                      </div>
                  </div>
            </div>
          </div>
        </div>
    </div>
    </>
  )
}
