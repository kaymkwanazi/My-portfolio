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
                <div>
                    <h3 className='text-center text-2xl md:text-4xl text-white mt-20 mb-10'>My Projects</h3>
                    
                </div>

                    <div className='flex grow'>
                      <div className='flex items-center justify-center'>
                       <ProjectsList />
                        {/* <div>
                            <div className='text-white font-semibold pt-5 flex justify-center md:pt-10 text-4xl md:text-2xl'>Movie Blog</div>
                            <img src={movieBlog} className=' w-96 h-64 py-2 px-2 mt-5 rounded-3xl'></img>
                            <p className='text-white text-xl text-center mb-5'>A small blog featuring 3 of my all time favorite movies.</p> 
                            <div className='flex justify-center'><a href='https://movie-blog-six.vercel.app/' className='bg-slate-400 px-3 py-2 rounded-xl justify-center'>View webpage</a></div>                         
                        </div> */}
                        {/* <div>
                             <div className='text-white flex justify-center font-semibold text-4xl md:text-2xl pt-5 md:pt-10'>Destinations</div>
                             <img src={travel} className='w-96 h-64  py-2 px-2 mt-5 rounded-3xl'></img>
                             <p className='text-white text-xl text-center mb-5'>Web page displaying the top 50 travel destination around the world.</p>
                             <div className='flex justify-center'><a href='https://destinations-omega.vercel.app/' className='bg-slate-400 px-3 py-2 rounded-xl justify-center'>View webpage</a></div>   
                        </div> */}
                        {/* <div>
                            <div className='text-white font-semibold flex justify-center pt-5 text-4xl md:text-2xl md:pt-10'>Melula</div>
                            <img src={melula} className='w-96 h-64 py-2 px-2 mt-5 rounded-3xl'></img>
                            <p className='text-white text-xl mb-5 text-center'>This is a clone of the Melula clothing store web page.</p>
                            <div className='flex justify-center'><a href='https://melula-clone.vercel.app/' className='bg-slate-400 px-3 py-2 rounded-xl justify-center'>View webpage</a></div>  
                        </div> */}
                        {/* <div>
                            <div className='text-white font-semibold flex justify-center pt-5 text-4xl md:text-2xl md:pt-10'>Dronotics</div>
                            <img src={drones} className='w-96 h-64  py-2 px-2 mt-5 rounded-3xl'></img>
                            <p className='text-white text-xl mb-5 text-center'>A web page about the future of drones.</p>
                            <div className='flex justify-center'><a href='https://drones-webpage.vercel.app/' className='bg-slate-400 px-3 py-2 rounded-xl justify-center'>View webpage</a></div>  
                        </div> */}
                        {/* <div>
                            <div className='text-white font-semibold flex justify-center pt-5 text-4xl md:text-2xl md:pt-10'>Pizza Shop</div>
                            <img src={pizzashop} className='w-96 h-64  py-2 px-2 mt-5 rounded-3xl'></img>
                            <p className='text-white text-xl mb-5 text-center'>This is a web page I designed for a fictional pizza shop.</p>
                            <div className='flex justify-center'><a href='https://pizza-shop-taupe-eight.vercel.app/' className='bg-slate-400 px-3 py-2 rounded-xl justify-center'>View webpage</a></div>  
                        </div> */}
                        
                      </div>
                  </div>
            </div>
          </div>
        </div>
    </div>
    </>
  )
}
