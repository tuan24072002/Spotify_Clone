import React from 'react'
import { assets } from '../assets/assets'
import { FaArrowCircleDown } from "react-icons/fa";
import { useLocation, useNavigate } from 'react-router-dom';
const Navbar = () => {
    const navigate = useNavigate()
    const location = useLocation()
    return (
        <>
            <div className="w-full flex justify-between items-center font-semibold">
                <div className="flex items-center gap-2">
                    <img className={`w-8 ${location.pathname !== '/spotify-clone' ? 'bg-gray-950' : 'bg-gray-900'} p-2 rounded-2xl ${location.pathname !== '/spotify-clone' ? 'cursor-pointer' : 'cursor-not-allowed'}`} src={assets.arrow_left} alt="" onClick={() => navigate(-1)} />
                    <img className={`w-8  ${location.pathname === '/spotify-clone' ? 'bg-gray-950' : 'bg-gray-900'} p-2 rounded-2xl  ${location.pathname === '/spotify-clone' ? 'cursor-pointer' : 'cursor-not-allowed'}`} src={assets.arrow_right} alt="" onClick={() => navigate(+1)} />
                </div>
                <div className="flex items-center gap-4 justify-between w-max">
                    <p className='bg-white text-black text-[15px] px-4 py-1 rounded-2xl font-semibold hidden md:block hover:px-5 hover:font-bold cursor-pointer'>Explore Premium</p>
                    <p className='bg-black py-1 px-4 rounded-2xl text-[15px] cursor-pointer font-semibold hover:px-5 hover:font-bold flex items-center gap-2'>
                        <FaArrowCircleDown />
                        <span>Install App</span>
                    </p>
                    <p className='bg-pink-400 text-black h-7 w-7 rounded-full flex justify-center items-center'>T</p>
                </div>
            </div>
            <div className="flex items-center gap-2 mt-4">
                <p className='bg-white text-black px-4 py-1 rounded-2xl cursor-pointer'>All</p>
                <p className='bg-[#242424] text-white px-4 py-1 rounded-2xl cursor-pointer'>Music</p>
                <p className='bg-[#242424] text-white px-4 py-1 rounded-2xl cursor-pointer'>Podcasts</p>
            </div>
        </>
    )
}

export default Navbar