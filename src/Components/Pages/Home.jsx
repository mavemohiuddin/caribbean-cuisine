/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import { BanknotesIcon, CakeIcon, CircleStackIcon, HandThumbUpIcon, ShoppingBagIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { homeHeroBannerPc } from '../../assets/images';
import ChefCards from '../Elements/ChefCards';
import GradientButton from '../Elements/GradientButton';
import RecipeCards from '../Elements/RecipeCards';
import SpinnerBar from '../Elements/SpinnerBar';

const Home = () => {
    const [allChefs, setAllChefs] = useState([]);
    const [allrecipies, setAllrecipies] = useState([]);
    const [recipeOfTheDay, setRecipeOfTheDay] = useState([]);

    const loadSpinner = () => {
        document.querySelector("#spinner").classList.remove("hidden");
        document.querySelector("#chef_list").classList.add("hidden");
        setTimeout(()=>{
            document.querySelector("#chef_list").classList.remove("hidden");
            document.querySelector("#spinner").classList.add("hidden");
        },1000)
    }

    useEffect(()=>{
        fetch("https://caribbean-cuisine-server-mavemohiuddin.vercel.app/recipe")
            .then(res => res.json())
            .then(data => {
                setAllrecipies(data);
                setRecipeOfTheDay(data[0])
                loadSpinner();
            })
    },[])

    useEffect(()=>{
        fetch("https://caribbean-cuisine-server-mavemohiuddin.vercel.app/chef")
            .then(res => res.json())
            .then(data => {
                setAllChefs(data);
                loadSpinner();
            })
    },[])

    return (
        <div className=''>
            {console.log(recipeOfTheDay)}
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
                <p className='font-secondary font-bold text-3xl text-center'>Our Best Chefs</p>
                <p className="text-center">Our Most popular chefs based on the votes of users who tried their recipies</p>
                <div className='min-h-[200px] relative'>
                    <div id="chef_list" className="grid grid-cols-1 md:grid-cols-3 gap-4 py-8">
                        {
                            allChefs.map(chef=>{
                                return (
                                    <ChefCards key={chef.id} chef={chef}></ChefCards>
                                )
                            })
                        }
                    </div>
                    <SpinnerBar></SpinnerBar>
                </div>
            </section>
            
            <section className='py-8'>
                <p className='font-secondary font-bold text-3xl text-center'>Top Recipies</p>
                <p className="text-center">Best Voted Racipies on Our Collection</p>
                <div className="grid grid-cols-1 md:grid-cols-3 my-8 gap-4">
                    {
                        allrecipies.slice(0,3).map(recipe=>{
                            return (
                                <RecipeCards key={recipe.id} recipe={recipe}></RecipeCards>
                            )
                        })
                    }
                </div>
            </section>

            <section className='py-8'>
                <p className='font-secondary font-bold text-3xl text-center'>Contact Us</p>
                <p className="text-center">Be sure to reach out to us! Someone will hopefully respond, as soon as possible.</p>
                <div className='mt-6 md:flex gap-12'>
                    <div className="flex-1 mb-8 md:mb-0">
                        <p className="font-bold text-2xl font-secondary underline">Our Office</p>
                        <div className="flex gap-2 mt-4">
                            <p><span className="italic mr-2">Suit</span>#B,</p>
                            <p><span className="italic mr-2">Floor</span>13</p>
                        </div>
                        <div className="flex gap-2">
                            <p><span className="italic mr-2">House</span>42A,</p>
                            <p><span className="italic mr-2">Block</span>9C</p>
                        </div>
                        <p className="mt-4">BuckingHam Street, Central Town</p>
                        <p className="mt-1">Cuban Central, Bahama</p>
                        <div className="mt-8 flex justify-between">
                            <button>
                                <GradientButton text="Book a Meeting"></GradientButton>
                            </button>
                            <button>
                                <GradientButton text="Book a Tour"></GradientButton>
                            </button>
                        </div>
                    </div>
                    <div className="flex-1">
                        <p className="font-bold text-2xl font-secondary underline">Reach Us Online</p>
                        <div className='flex flex-col items-start'>
                            <label htmlFor="subject" className='w-full'>
                                Subject
                                <input id="subject" type="text"  className='border py-2 px-4 border-gray-300 w-full'/>
                            </label>
                            <label htmlFor="message" className='w-full'>
                                Message
                                <input id="message" type="text"  className='border py-2 px-4 border-gray-300 w-full h-24' />
                            </label>
                            <button onClick="mailto:mohiuddinkhasherhat@gmail.com" className='mt-4'>
                                <GradientButton text="Send Email"></GradientButton>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            
        </div>
    );
};

export default Home;