import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import logo from '../images/logo.png'
import { FaTimes, FaBars } from "react-icons/fa";

export const Navbar = () => {
    const [isOpen, setOpen] = useState (false);

  return (
    <nav className='absolute w-full z-50 bg-slate-300'>
        <div className='container px-4 flex justify-between items-center h-16'>
        <Link to='/'>
            <img className= 'w-10' src={logo}></img>
        </Link>
            <div className='hidden md:flex space-x-4 text-sm font-bold items-center'>
                <Link to='/' className='px-6 py-2 hover:bg-gray-500 rounded-lg hover:text-white'>Home</Link>
                <Link to='/about' className='px-6 py-2 hover:bg-gray-500 rounded-lg hover:text-white'>About</Link>
                <Link to='/projects' className='px-6 py-2 hover:bg-gray-500 rounded-lg hover:text-white'>Projects</Link>
                <Link to='/contact'>
                    <button className='bg-violet-400 py-2 px-6 rounded-lg hover:text-white'>Contact</button>
                </Link>
            </div>
            <div className='md:hidden flex space-x-4 text-sm font-bold items-center '>
                <button onClick={() => setOpen(!isOpen)}>
                    {isOpen ? <FaTimes />: <FaBars />}

                </button>
        
            </div>
        </div>
        {isOpen && (
            <div className='flex flex-col md:hidden space-y-5 text-sm font-bold items-center my-3'> 
                <Link to='/' className='px-6 py-2  hover:text-gray-800'>Home</Link>
                <Link to='/about' className='px-6 py-2 hover:text-gray-800'>About</Link>
                <Link to='/projects' className='px-6 py-2 hover:text-gray-800'>Projects</Link>
                <Link to='/contact'>
                    <button className=' py-2 px-6 hover:text-gray-800'>Contact</button>
                </Link>
            </div>

        )}
    </nav>
    
  )
}
