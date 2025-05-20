import React from 'react'
import { FaArrowRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const navbar = () => {
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate('/htmlEditor');
    }

    return (
        <div className='w-full text-white py-6 px-8 flex items-center justify-between'>
            <div className='flex item-center'>
                <a href='#'>
                    <img src='coder2.svg' alt='logo' className='w-[75px] h-[75px]' />
                </a>
            </div>
            <nav className='flex space-x-10 text-xl font-normal font-inter absolute left-[130px]'>
                <a href='#'><span className='hover:text-2xl transition'>Overview</span></a>
                <a href='#'><span className='hover:text-2xl transition'>Features</span></a>
                <a href='#'><span className='hover:text-2xl transition'>Docs</span></a>
                <a href='#'><span className='hover:text-2xl transition'>Contact</span></a>
            </nav>

            <button onClick={handleNavigate} 
            className='flex item-center bg-[#282828] text-[15px] px-6 py-2 cursor-pointer rounded-lg border-2 border-[#d4d4d4] hover:bg-[#383838] transition'>
                Try now, it's free
                <FaArrowRight className='ml-3 mt-1' />
            </button>
        </div>
    )
}

export default navbar