/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import { BanknotesIcon, CakeIcon, CircleStackIcon, HandThumbUpIcon, ShoppingBagIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { homeHeroBannerPc } from '../../assets/images';
import ChefCards from '../Elements/ChefCards';
import RecipeCards from '../Elements/RecipeCards';
import SpinnerBar from '../Elements/SpinnerBar';

const Home = () => {
    const [allChefs, setAllChefs] = useState([]);
    const [allrecipies, setAllrecipies] = useState([]);
    const [recipyOfTheDay, setRecipyOfTheDay] = useState([]);

    const loadSpinner = () => {
        document.querySelector("#spinner").classList.remove("hidden");
        document.querySelector("#chef_list").classList.add("hidden");
        setTimeout(()=>{
            document.querySelector("#chef_list").classList.remove("hidden");
            document.querySelector("#spinner").classList.add("hidden");
        },1000)
    }

    useEffect(()=>{
        setRecipyOfTheDay(allrecipies[0]);
    },[allrecipies])

    useEffect(()=>{
        fetch("https://caribbean-cuisine-server-mavemohiuddin.vercel.app/recipe")
            .then(res => res.json())
            .then(data => {
                setAllrecipies(data);
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
                    <div id="chef_list" className="grid grid-cols-3 gap-4 py-8">
                    <div className='relative overflow-hidden flex-1'>
                        <img src={allrecipies[0].banner_image} alt="" className='h-96 w-full object-cover'/>
                    </div>
                    <div className='flex-1'>
                        <p className='text-6xl font-extralight font-secondary'>{allrecipies[0].name} <span className='text-3xl'>({allrecipies[0].rating}✰)</span></p>
                        <div className="flex gap-12 mt-4">
                        <div title='Number of Likes' className="flex gap-1 items-center">
                            <HandThumbUpIcon className='h-5 w-5 text-orange-600' />
                                <p className='font-bold text-sm'>{allrecipies[0].likes}</p>
                            </div>
                            <p>Date Invented: <strong>{allrecipies[0].date_invented}</strong></p>
                        </div>
                        <ul className='text-xl mt-6 list-decimal list-inside'><strong>Ingredients:</strong> {allrecipies[0].ingredients.map(item=>{
                            return (
                                <li className='text-base'>{item}</li>
                            )
                        })}</ul>
                        <div>
                            <p>Follow From:</p>
                            <div className="flex gap-4">
                                {
                                    allrecipies[0].chef_name.map( chef=> {
                                        return (
                                            <Link to={`/chefs?${chef.replace(" ", "_")}`} className='px-2 py-1 border mx-1 my-2 whitespace-nowrap bg-orange-200 text-sm'>{chef}</Link>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    </div>
                    <SpinnerBar></SpinnerBar>
                </div>
            </section>
            <section className='py-8'>
                <p className='font-secondary font-bold text-3xl text-center'>Recipe of the Day</p>
                <p className="text-center">Selected from our List of Racipes by the users</p>
                <div className="flex gap-4">
                    {
                        return (
                            <div className='relative overflow-hidden flex-1'>
                        <img src={allrecipies[0].banner_image} alt="" className='h-96 w-full object-cover'/>
                    </div>
                    <div className='flex-1'>
                        <p className='text-6xl font-extralight font-secondary'>{allrecipies[0].name} <span className='text-3xl'>({allrecipies[0].rating}✰)</span></p>
                        <div className="flex gap-12 mt-4">
                        <div title='Number of Likes' className="flex gap-1 items-center">
                            <HandThumbUpIcon className='h-5 w-5 text-orange-600' />
                                <p className='font-bold text-sm'>{allrecipies[0].likes}</p>
                            </div>
                            <p>Date Invented: <strong>{allrecipies[0].date_invented}</strong></p>
                        </div>
                        <ul className='text-xl mt-6 list-decimal list-inside'><strong>Ingredients:</strong> {allrecipies[0].ingredients.map(item=>{
                            return (
                                <li className='text-base'>{item}</li>
                            )
                        })}</ul>
                        <div>
                            <p>Follow From:</p>
                            <div className="flex gap-4">
                                {
                                    allrecipies[0].chef_name.map( chef=> {
                                        return (
                                            <Link to={`/chefs?${chef.replace(" ", "_")}`} className='px-2 py-1 border mx-1 my-2 whitespace-nowrap bg-orange-200 text-sm'>{chef}</Link>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                        )
                    }
                </div>
            </section>
            <section className='py-8'>
                <p className='font-secondary font-bold text-3xl text-center'>Top Recipies</p>
                <p className="text-center">Best Voted Racipies on Our Collection</p>
                <div className="grid grid-cols-3 my-8 gap-4">
                    {
                        allrecipies.slice(0,3).map(recipe=>{
                            return (
                                <RecipeCards key={recipe.id} recipe={recipe}></RecipeCards>
                            )
                        })
                    }
                </div>
            </section>
            
        </div>
    );
};

export default Home;