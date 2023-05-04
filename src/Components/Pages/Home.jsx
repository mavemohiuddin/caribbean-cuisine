/* eslint-disable no-unused-vars */
import { BanknotesIcon, CakeIcon, CircleStackIcon, HandThumbUpIcon, ShoppingBagIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { useState, useEffect } from 'react';
import { homeHeroBannerPc } from '../../assets/images';
import ChefCards from '../Elements/ChefCards';

const Home = () => {
    const [allChefs, setAllChefs] = useState([]);

    useEffect(()=>{
        fetch("https://caribbean-cuisine-server-mavemohiuddin.vercel.app/chef")
            .then(res => res.json())
            .then(data => setAllChefs(data))
    },[])

    return (
        <div className=''>
            <section className='h-96 bg-white flex shadow-lg rounded-xl overflow-hidden relative'>
                <img src={homeHeroBannerPc} className="h-full w-full object-cover" />
                <div className='flex flex-col gap-2 items-center justify-center absolute top-0 right-0 h-full w-full isolate text-white'>
                    <div className='absolute inset-0 bg-black opacity-70 -z-10'></div>
                    <p className='tracking-[5px]'>World-Class Recipe</p>
                    <p className='text-center text-4xl md:text-7xl font-bold md:font-extralight capitalize md:tracking-[3px]'>40+ Carribean Recipe</p>
                    <p className='text-center font-secondary md:tracking-[5px]'>Something Delicious for every occassion</p>
                </div>
            </section>
            <section className='flex flex-col gap-3 md:flex-row py-8'>
                <div className='flex-1 flex gap-2 md:flex-col items-center md:justify-center'>
                    <CircleStackIcon className='h-6 w-6 md:h-12 md:w-12 text-orange-500' />
                    <p className='font-semibold tracking-[1px] font-secondary'>Varieties of Recipies</p>
                </div>
                <div className='flex-1 flex gap-2 md:flex-col items-center md:justify-center'>
                    <ShoppingBagIcon className='h-6 w-6 md:h-12 md:w-12 text-orange-500' />
                    <p className='font-semibold tracking-[1px] font-secondary'>Readily Available Ingredients</p>
                </div>
                <div className='flex-1 flex gap-2 md:flex-col items-center md:justify-center'>
                    <BanknotesIcon className='h-6 w-6 md:h-12 md:w-12 text-orange-500' />
                    <p className='font-semibold tracking-[1px] font-secondary'>Budget Friendly Recipe</p>
                </div>
            </section>
            <section className='py-8'>
                <p className='font-secondary font-bold text-3xl text-center'>Recipe of the Day</p>
                <p className="text-center">Selected from our List of Racipes by the users</p>
                <div className="flex gap-4">

                </div>
            </section>
            <section className='py-8'>
                <p className='font-secondary font-bold text-3xl text-center'>Top Recipies</p>
                <p className="text-center">Best Voted Racipies on Our Collection</p>
                <div className="flex gap-4">
                    
                </div>
            </section>
            <section className='py-8'>
                <p className='font-secondary font-bold text-3xl text-center'>Our Best Chefs</p>
                <p className="text-center">Our Most popular chefs based on the votes of users who tried their recipies</p>
                <div id="chef_list" className="grid grid-cols-3 gap-4 py-8">
                    {
                        allChefs.map(chef=>{
                            return (
                                <ChefCards key={chef.id} chef={chef}></ChefCards>
                            )
                        })
                    }
                </div>
            </section>
        </div>
    );
};

export default Home;