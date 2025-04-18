import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom'; // Added useLocation for active route detection
import logo from '../images/logo.png';
import { FaTimes, FaBars } from "react-icons/fa";
import kayLogo from '../../public/ProjectsPics/portfoliologo.png';
import { HiDotsHorizontal } from "react-icons/hi";
import { FaHome, FaInfo, FaGithub } from "react-icons/fa";
import { RiContactsLine } from "react-icons/ri";

export const Navbar = () => {
    const [isOpen, setOpen] = useState(false);
    const [showOptions, setShowOptions] = useState(false);
    const location = useLocation(); // Get the current route

    const handleNavbarClick = (e) => {
        e.stopPropagation();
    };

    const handleToggleOptions = (e) => {
        e.stopPropagation();
        setShowOptions(!showOptions);
    };

    useEffect(() => {
        const handleOutsideClick = () => setShowOptions(false);
        document.addEventListener('click', handleOutsideClick);

        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, []);

    const isActive = (path) => location.pathname === path; // Check if the current route matches the link

    return (
        <nav
            className='absolute w-full z-50'
            style={{ backgroundColor: '#E9EDF7' }}
            onClick={() => setShowOptions(false)}
        >
            <div
                className='container px-4 flex justify-between items-center h-16'
                onClick={handleNavbarClick}
            >
                <Link to='/'>
                    <img className='w-20' src={kayLogo}></img>
                </Link>
                <div className='hidden md:flex space-x-4 text-sm font-bold items-center'>
                    <button onClick={handleToggleOptions}>
                        <HiDotsHorizontal size={24} />
                    </button>
                    {showOptions && (
                        <div
                        className='absolute top-20 right-58 bg-[#E9EDF7] shadow-lg rounded-lg flex flex-col space-y-2 px-4 py-2'
                        >
                            <Link
                                to='/'
                                className={`flex items-center px-6 py-2 rounded-lg ${
                                    isActive('/') ? 'bg-[#5592e7] text-white' : 'hover:border-[#2b2f34] hover:border hover:bg-transparent'
                                }`}
                            >
                                <FaHome className='mr-2' /> Home
                            </Link>
                            <Link
                                to='/about'
                                className={`flex items-center px-6 py-2 rounded-lg ${
                                    isActive('/about') ? 'bg-[#5592e7] text-white' : 'hover:border-[#2b2f34] hover:border hover:bg-transparent'
                                }`}
                            >
                                <FaInfo className='mr-2' /> About
                            </Link>
                            <Link
                                to='/projects'
                                className={`flex items-center px-6 py-2 rounded-lg ${
                                    isActive('/projects') ? 'bg-[#5592e7] text-white' : 'hover:border-[#2b2f34] hover:border hover:bg-transparent'
                                }`}
                            >
                                <FaGithub className='mr-2' /> Projects
                            </Link>
                            <Link
                                to='/contact'
                                className={`flex items-center px-6 py-2 rounded-lg ${
                                    isActive('/contact') ? 'bg-[#5592e7] text-white' : 'hover:border-[#2b2f34] hover:border hover:bg-transparent'
                                }`}
                            >
                                <RiContactsLine className='mr-2' /> Contact
                            </Link>
                        </div>
                    )}
                </div>
                <div className='md:hidden flex space-x-4 text-sm font-bold items-center'>
                    <button onClick={() => setOpen(!isOpen)}>
                        {isOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </div>
            {isOpen && (
                <div className='flex flex-col md:hidden space-y-5 text-sm font-bold items-center my-3'>
                    <Link
                        to='/'
                        className={`px-6 py-2 rounded-lg ${
                            isActive('/') ? 'bg-[#2b2f34] text-white' : 'hover:border-[#2b2f34] hover:border hover:bg-transparent'
                        }`}
                    >
                        Home
                    </Link>
                    <Link
                        to='/about'
                        className={`px-6 py-2 rounded-lg ${
                            isActive('/about') ? 'bg-[#2b2f34] text-white' : 'hover:border-[#2b2f34] hover:border hover:bg-transparent'
                        }`}
                    >
                        About
                    </Link>
                    <Link
                        to='/projects'
                        className={`px-6 py-2 rounded-lg ${
                            isActive('/projects') ? 'bg-[#2b2f34] text-white' : 'hover:border-[#2b2f34] hover:border hover:bg-transparent'
                        }`}
                    >
                        Projects
                    </Link>
                    <Link
                        to='/contact'
                        className={`px-6 py-2 rounded-lg ${
                            isActive('/contact') ? 'bg-[#2b2f34] text-white' : 'hover:border-[#2b2f34] hover:border hover:bg-transparent'
                        }`}
                    >
                        Contact
                    </Link>
                </div>
            )}
        </nav>
    );
};