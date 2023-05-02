/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import { UserCircleIcon } from '@heroicons/react/24/solid'

const Header = () => {
    const showProfile = () => {
        document.querySelector("#profile_info").style.display = "block";
        document.querySelector("#name_short").style.display = "none";
    }
    const hideProfile = () => {
        document.querySelector("#profile_info").style.display = "none";
        document.querySelector("#name_short").style.display = "block";
    }
    return (
        <div className='sticky top-0 left-0 w-full px-4 h-[60px] flex items-center bg-[#ff6b00] z-20'>
            <div className='max-w-[1170px] w-full mx-auto flex items-center justify-between gap-4'>
                <Link to="/">
                    <div className='relative'>
                        <p className='font-design text-3xl text-purple-300'>Carribean Cuisine</p>
                        <div className='pulse absolute bottom-0 left-0 w-full h-1/2 overflow-hidden'>
                            <p className='font-design text-3xl absolute bottom-0'>Carribean Cuisine</p>
                        </div>
                    </div>
                </Link>
                <Link onMouseEnter={showProfile} onMouseLeave={hideProfile} to="register" className='flex items-center gap-1 relative'>
                    <div className='relative border-white rounded-full border-4'>
                        <UserCircleIcon className="h-10 w-10 text-orange-200" />
                        <p id='name_short' className='text-xs text-center absolute -bottom-1 left-1/2 -translate-x-1/2 px-2 rounded-full bg-white capitalize'>Guest</p>
                    </div>
                    
                    <div id="profile_info" className='absolute top-1/2 left-1/2 translate-y-4 -translate-x-1/2 bg-white p-4 w-48 rounded shadow-md pointer-events-none hidden'>
                        <UserCircleIcon className="h-24 w-24 text-orange-500 mx-auto" />
                        <p className='font-bold text-center'>Guest User</p>
                        <p className='italic text-center text-xs'>@guest</p>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Header;