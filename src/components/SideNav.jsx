import React, {useState} from 'react'
import {AiOutlineHome, AiOutlineMenu} from 'react-icons/ai'
import { FaComputer } from "react-icons/fa6";
import { IoNewspaperOutline } from "react-icons/io5";


const SideNav = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav);
        console.log(`handleNav function: ${nav}`)
    };
    return (
        <div>
            <AiOutlineMenu onClick={handleNav} className='absolute top-4 right-4 z-[99] md:hidden'/>
            {
                nav ? (
                    <div className='fixed w-full h-screen bg-white/20 flex flex-col justify-center items-center z-20'>
                        <a href="#home" className='w-[75%] flex justify-center items-center rounded-md shadow-xl bg-gray-700 shadow-orange-500/10 m-2 p-2 cursor-pointer hover:scale-110 ease-in duration-200'>
                            <AiOutlineHome size={20}/>
                            <span className='pl-4'>Home</span>
                        </a>
                        <a href="#about" className='w-[75%] flex justify-center items-center rounded-md shadow-xl bg-gray-700 shadow-orange-500/10 m-2 p-2 cursor-pointer hover:scale-110 ease-in duration-200'>
                            <IoNewspaperOutline size={20}/>
                            <span className='pl-4'>About Me</span>
                        </a>
                        <a href="#projects" className='w-[75%] flex justify-center items-center rounded-md shadow-xl bg-gray-700 shadow-orange-500/10 m-2 p-2 cursor-pointer hover:scale-110 ease-in duration-200'>
                            <FaComputer size={20}/>
                            <span className='pl-4'>Projects</span>
                        </a>
                    </div>
                ) : (
                    ''
                )
            }
            <div className='md:block hidden fixed top-[25%] z-10'>
                <div className='flex flex-col'>
                    <a href="#home" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-3 p-3 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <AiOutlineHome size={35}/>
                    </a>
                    <a href="#about" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-3 p-3 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <IoNewspaperOutline size={35}/>
                    </a>
                    <a href="#projects" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-3 p-3 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <FaComputer size={35}/>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default SideNav