import React from 'react';
import { Link } from 'react-router-dom';
import image from '../../../public/favicon.png'

const Navbar = () => {
    return (
        <nav className="bg-blue-500 h-16 flex justify-between items-center px-4 fixed w-screen">
            <div className="text-white text-lg font-semibold rounded-full">
                <Link to="/"><img className='rounded-full h-15' src={image} alt="this is logo of aditya silver oak university" height={50} width={50} /></Link>
            </div>
            <ul className="flex space-x-4 justify-between  align-bottom">
                <div className='flex'>
                    <li>
                        <Link to="/students" className="text-white hover:text-gray-300 p-2 font-extrabold py-4 sm:text-xl">
                            Online Exam System
                        </Link>
                    </li>
                </div>

                <div className='flex justify-end'>
                    <li>
                        <Link to="/register" className="text-white hover:text-gray-300 bg-blue-400 p-3">
                            Sign Up
                        </Link>
                    </li>
                    <li>
                        <Link to="/" className="text-white hover:text-gray-300 bg-blue-400 p-3 ">
                            Login
                        </Link>
                    </li>
                </div>
            </ul>
        </nav>
    );
};

export default Navbar;
