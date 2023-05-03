/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='bg-orange-400 py-6 md:py-12 px-4'>
            <div className='max-w-[1170px] mx-auto grid grid-cols-2 md:grid-cols-3 gap-4'>
                <div className='mr-0 md:mr-20 col-span-2 md:col-span-1'>
                    <Link to="/" className='flex-1 relative'>
                        <p className='font-design text-3xl text-gray-800'>Caribbean<br/>Cuisine</p>
                    </Link>
                    <p className="text-gray-800 mt-4">Carribean Cuisine is one of the most reputable and reliable Brand for lovely cuisine for all occassions since 1953.</p>
                </div>
                <div className='flex flex-col gap-1'>
                    <p className='text-gray-800 font-semibold font-secondary text-xl mb-3'>Quick Links</p>
                    <Link to="/recipies" className='text-gray-800'>Recipies</Link>
                    <Link to="/chefs" className='text-gray-800'>Chefs</Link>
                    <Link to="/blogs" className='text-gray-800'>Blogs</Link>
                </div>
                <div className='flex flex-col gap-1'>
                    <p className='text-gray-800 font-semibold font-secondary text-xl mb-3'>Navigation</p>
                    <Link to="/about" className='text-gray-800'>About Us</Link>
                    <Link to="/contact" className='text-gray-800'>Contact Us</Link>
                    <Link to="/terms" className='text-gray-800'>Terms of Services</Link>
                    <Link to="/policy" className='text-gray-800'>Privacy Policy</Link>
                </div>
            </div>
            <div className='max-w-[1170px] mx-auto'>
                <div className='py-4 border-t border-gray-800 text-gray-800 text-sm mt-12'>@2023 Demo Project. No Copyright reserved. Designed by Mohiuddin Hasan</div>
            </div>
        </div>
    );
};

export default Footer;