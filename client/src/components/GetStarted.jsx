/* eslint-disable no-unused-vars */

import React from 'react'
import heroImage from '../assets/hero1.png'
import { FaGuitar } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';

const GetStarted = () => {
    const navigate = useNavigate();

    const handleGetStarted = () => {
        navigate('/login');
    }
    return (
        <div className='flex text-center mt-4 flex-col items-center justify-center  p-3'>
            <img src={heroImage} alt="Hero" className="mb-6 w-[70%] mx-auto" />
            <h2 className='tracking-wide text-3xl font-bold mb-4 text-[#111827'>Welcome to <span className='text-[#43aa8b]'>iHola</span>!</h2>
            <p className='text-lg mb-6 text-[#111827]'>Your journey to mastering Spanish starts here.</p>
            <button className='bg-[#f3722cff] text-white px-6 py-2 rounded-md hover:bg-[#388e76] transition duration-300 flex items-center justify-center' onClick={() => handleGetStarted()} >
                Get Started <FaGuitar className='inline-block ml-2' size={24} />
            </button>
        </div>
    )
}

export default GetStarted