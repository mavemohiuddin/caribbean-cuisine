/* eslint-disable no-unused-vars */
import { BanknotesIcon, CircleStackIcon, ShoppingBagIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { homeHeroBannerPc } from '../../assets/images';

const Home = () => {
    return (
        <div className=''>
            <section className='h-96 bg-white flex shadow-lg rounded-xl overflow-hidden relative'>
                <img src={homeHeroBannerPc} className="h-full w-full object-cover" />
                <div className='flex flex-col gap-2 items-center justify-center absolute top-0 right-0 h-full w-full isolate text-white'>
                    <div className='absolute inset-0 bg-black opacity-70 -z-10'></div>
                    <p className='tracking-[5px]'>World-Class Recipe</p>
                    <p className='text-7xl font-extralight capitalize tracking-[3px]'>40+ Carribean Recipe</p>
                    <p className='font-secondary tracking-[5px]'>Something Delicious for every occassion</p>
                </div>
            </section>
            <section className='flex py-8'>
                <div className='flex-1 flex gap-2 flex-col items-center justify-center'>
                    <CircleStackIcon className='h-12 w-12 text-orange-500' />
                    <p className='font-semibold tracking-[1px] font-secondary'>Varieties of Recipies</p>
                </div>
                <div className='flex-1 flex gap-2 flex-col items-center justify-center'>
                    <ShoppingBagIcon className='h-12 w-12 text-orange-500' />
                    <p className='font-semibold tracking-[1px] font-secondary'>Readily Available Ingredients</p>
                </div>
                <div className='flex-1 flex gap-2 flex-col items-center justify-center'>
                    <BanknotesIcon className='h-12 w-12 text-orange-500' />
                    <p className='font-semibold tracking-[1px] font-secondary'>Budget Friendly Recipe</p>
                </div>
            </section>
            <section className='py-8'>
                <p className='font-secondary font-bold text-3xl text-center'>Recipe of the Day</p>
                <p className="text-center">Selected from our List of Racipes by the users</p>
            </section>
        </div>
    );
};

export default Home;