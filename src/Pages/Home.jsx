import React from 'react'
import backgroundPic from '../images/background.jpg'
import kamo from '../images/Kamo.jpg'
import { Link } from 'react-router-dom'

export const Home = () => {
  return (
    <div>
        <div className='relative h-screen bg-cover bg-center'
            style={{backgroundImage: `url(${backgroundPic})`}}>

            <div className='absolute inset-0 flex flex-col items-center justify-center'>
                <div>
                    <img src = {kamo} className='w-40 rounded-3xl shadow-violet-600 mb-10 mt-8 shadow-[20px_20px_5px_5px_rgba(0,0,0,0.3)] px-2 py-2'></img>
                </div>
                <h1 className='text-4xl md:text-6xl font-bold text-white mb-6'>Hey there, I'm a frontend software developer</h1>
                <p className='text-xl md:text-2xl text-white mb-10'>Browse through, I guarantee you'll find something you like.</p>
                <div>
                <Link to = '/projects'>
                    <button className='px-3 py-3 bg-violet-600 rounded-xl text-white'>Previous Projects</button>
                </Link>
            </div>
            </div>
            
        </div>
    </div>
  )
}
