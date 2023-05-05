/* eslint-disable no-unused-vars */
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Bars3Icon, UserCircleIcon } from '@heroicons/react/24/solid'
import { useState } from 'react';
import { useEffect } from 'react';
import GradientButton from './GradientButton';
import { useContext } from 'react';
import { AuthContext } from './AuthProvider';

const Header = () => {
    const {user, signOutUser} = useContext(AuthContext);

    const [navShown, setNavShown] = useState(false);

    useEffect(()=>{
        if (navShown) {
            document.querySelector("#nav_menu").classList.remove("-translate-x-[120%]");
        } else {
            document.querySelector("#nav_menu").classList.add("-translate-x-[120%]");
        }
    }, [navShown])

    const activeClassList = "px-4 py-2 rounded transition duration-300 font-semibold block w-full bg-orange-200 md:bg-orange-200 md:hover:bg-orange-300";
    const inactiveClassList = "px-4 py-2 rounded transition duration-300 font-semibold block w-full bg-orange-200 md:bg-orange-400 md:hover:bg-orange-300";

    const showProfile = () => {
        document.querySelector("#profile_info").style.display = "block";
        document.querySelector("#name_short").style.display = "none";
    }
    const hideProfile = () => {
        document.querySelector("#profile_info").style.display = "none";
        document.querySelector("#name_short").style.display = "block";
    }
    console.log(user);
    return (
        <div className='sticky top-0 left-0 w-full px-4 h-[60px] flex items-center bg-[#ff6b00] z-20'>
            <div className='max-w-[1170px] w-full mx-auto flex items-center justify-between gap-4'>
                <Link to="/" className='flex-1 relative'>
                    <div className='relative max-w-max'>
                        <p className='font-design text-xl md:text-3xl text-purple-300'>Caribbean Cuisine</p>
                        <div className='pulse absolute bottom-0 left-0 w-full h-1/2 overflow-hidden'>
                            <p className='font-design text-xl md:text-3xl absolute bottom-0'>Caribbean Cuisine</p>
                        </div>
                    </div>
                </Link>

                <div id="nav_menu" className='flex-1 flex justify-center absolute md:static top-14 left-0 pb-4 md:pb-0 w-full transition duration-300 bg-orange-200 md:bg-transparent border-b md:border-0 shadow-md md:shadow-none md:translate-x-0'>
                    <nav className='w-full'>
                        <ul className='flex gap-2 flex-col md:flex-row justify-center w-full'>
                            <li>
                                <NavLink onClick={()=>setNavShown(false)} to="/" className={({isActive})=>isActive?activeClassList:inactiveClassList}>Home</NavLink>
                            </li>
                            <li>
                                <NavLink onClick={()=>setNavShown(false)} to="/recipies" className={({isActive})=>isActive?activeClassList:inactiveClassList}>Recipies</NavLink>
                            </li>
                            <li>
                                <NavLink onClick={()=>setNavShown(false)} to="/chefs" className={({isActive})=>isActive?activeClassList:inactiveClassList}>Chefs</NavLink>
                            </li>
                            <li>
                                <NavLink onClick={()=>setNavShown(false)} to="/blogs" className={({isActive})=>isActive?activeClassList:inactiveClassList}>Blog</NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>

                <div className='flex-1 flex items-center relative z-10'>
                    <Link onMouseEnter={showProfile} onMouseLeave={hideProfile} to="login" className='flex items-center justify-end gap-1 relative max-w-max ml-auto'>
                        <div className='relative border-white rounded-full border-4'>
                            {user? <><img src={user.photoURL} className="h-10 w-10 rounded-full" /></> :
                            <><UserCircleIcon className="h-10 w-10 text-orange-200" />
                            </>}
                        </div>
                        
                        <div id="profile_info" className='absolute top-1/2 left-1/2 translate-y-4 -translate-x-1/2 bg-white p-4 w-48 rounded shadow-md pointer-events-none hidden'>
                            {user ? <img src={user.photoURL} className="h-24 w-24 mx-auto rounded-full" /> : <UserCircleIcon className="h-24 w-24 text-orange-500 mx-auto" />}
                            {user? <p className='font-bold text-center capitalize'>{user.displayName}</p>: <p className='font-bold text-center capitalize'>Guest</p>}
                            
                        </div>
                    </Link>
                    {user? <button onClick={signOutUser}><GradientButton text="Log Out" extraClass="ml-2"></GradientButton></button> : <Link to="/login"><GradientButton text="Log in" extraClass="ml-6"></GradientButton></Link>}
                    <button onClick={()=>setNavShown(!navShown)} className='px-2 ml-2 md:hidden'>
                        <Bars3Icon className='h-7 w-7' />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Header;