/* eslint-disable react/jsx-key */
/* eslint-disable no-const-assign */
/* eslint-disable no-unused-vars */
import { CakeIcon, HandThumbUpIcon, HeartIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { addToFavorite } from '../../utilities/utilities';
import SpinnerBar from '../Elements/SpinnerBar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Chefs = () => {
    const [chefName, setChefName] = useState("");
    const [allChefs, setAllChefs] = useState([]);
    const [allRecipies, setAllRecipies] = useState([]);
    const [savedRecipies, setSavedRecipies] = useState([]);
    const [currentChef, setCurrentChef] = useState(null);
    const location = useLocation();

    const notify = (message) => toast(message);

    useEffect(()=>{
        // ======================================================================= Setting up Chef data
        setChefName(window.location.href.split("?")[1]?.replace("_", " "));
        allChefs.map(chef=>{
            if (chef.name == chefName) {
                setCurrentChef(chef);
            }
        })
        // =============================================================== Slow Loading data for Effect
        // document.querySelector("#spinner").classList.remove("hidden");
        // document.querySelector("#chef_details").classList.add("hidden");
        // setTimeout(()=>{
        //     document.querySelector("#chef_details").classList.remove("hidden");
        // },1000)
        // setTimeout(()=>{
        //     document.querySelector("#spinner").classList.add("hidden");
        // },3000)
    },[allChefs, chefName, location]);

    useEffect(()=>{
        fetch("https://caribbean-cuisine-server-mavemohiuddin.vercel.app/recipe")
        .then(res => res.json())
        .then(data => setAllRecipies(data))
    },[currentChef])

    useEffect(()=>{
        fetch("https://caribbean-cuisine-server-mavemohiuddin.vercel.app/chef")
            .then(res => res.json())
            .then(data => {
                setAllChefs(data);
                setCurrentChef(data[0]);
                let localRecipies = localStorage.getItem("recipies");
                if (localRecipies != null) {
                    setSavedRecipies(JSON.parse(localRecipies))
                }
            })
    },[])

    const RecipeLikeButtonClasses = (recipe) => {
        console.log(savedRecipies);
        if (savedRecipies == []) {
            return "h-5 w-5 text-white cursor-pointer";
        } else {
            if (savedRecipies.includes(parseInt(recipe.id))) {
                return "h-5 w-5 text-pink-400 cursor-pointer";
            } else {
                return "h-5 w-5 text-white cursor-pointer";
            }
        }
    }

    const wantToSave = (e, recipe) => {
        let saving = addToFavorite(recipe);

        if (saving == "saved") {
            notify("Added to Saved Recipies");
        } else {
            notify("You Already Saved this Recipe")
        }
        e.target.classList.add("text-pink-400")
    }

    return (
        <div className=' relative'>
            <ToastContainer></ToastContainer>
            <SpinnerBar></SpinnerBar>
            
            <div id="chef_details" className='flex border border-gray-400 rounded-xl p-4 bg-white'>
                <div className="max-w-xs w-full pr-4">
                    <div className='max-w-max w-full relative'>
                        <img src={currentChef?.profile_picture} className="h-28" />
                        <div className='absolute inset-2 outline outline-1 outline-black'></div>
                    </div>
                    <div className='flex-1 h-full mt-4'>
                        <p className='text-4xl font-extralight'>{currentChef?.name} {currentChef?.gender == "male"? "♂" : "♀"}</p>
                        <p className='font-secondary text-xl font-bold mt-2'>{currentChef?.age}, {currentChef?.nationality}</p>
                        <div className="flex gap-4 mt-4">
                            <div title='Number of Likes' className="flex gap-1 items-center">
                                <HandThumbUpIcon className='h-5 w-5 text-orange-600' />
                                <p className='font-bold text-sm'>{currentChef?.likes}</p>
                            </div>
                            <div title='Number of Recipies' className="flex gap-1 items-center">
                                <CakeIcon className='h-5 w-5 text-orange-600' />
                                <p className='font-bold text-sm'>{currentChef?.number_of_recipes}</p>
                            </div>
                        </div>
                        <p className='mt-4'>Professional Chef for <strong>{currentChef?.years_of_experience}</strong> years</p>
                        <p>Working at: <strong>{currentChef?.current_employment}</strong></p>
                        <p className='text-sm mt-4'>{currentChef?.bio}</p>
                    </div>
                </div>

                <div id="recipe_list" className="flex-1 grid grid-cols-3 gap-4">
                    <p className='col-span-3 font-extralight text-3xl mb-2'>{currentChef?.name}'s Recipes</p>
                    {allRecipies.filter(item=>item.chef_name.includes(currentChef?.name)).map(recipe=>{
                        return(
                            <div key={recipe.id} className="border border-gray-300 rounded-lg overflow-hidden">
                                <div className='relative overflow-hidden'>
                                    <img src={recipe.banner_image} className="h-32 w-full object-cover" />
                                    <div className='absolute bottom-0 bg-gradient-to-t from-black to-transparent px-24 py-12 rotate-45 -translate-x-16 translate-y-12'>
                                        <div title='Number of Likes' className="flex gap-1 items-center mt-12 -rotate-45">
                                            <HandThumbUpIcon className='h-5 w-5 text-white' />
                                            <p className='font-bold text-sm text-white'>{recipe.likes}</p>
                                        </div>
                                    </div>
                                    <div className='absolute top-0 right-0 bg-gradient-to-b from-black to-transparent px-24 py-12 rotate-45 translate-x-16 -translate-y-12'>
                                        <div title='Add to Favorites' className="flex gap-1 items-center mb-12 -rotate-45">
                                            <HeartIcon className={RecipeLikeButtonClasses(recipe)} onClick={(event)=>wantToSave(event, recipe)}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-3">
                                    <p className='font-semibold font-secondary text-xl'>{recipe.name}</p>
                                    <p className='font-secondary text-sm'>Rating: <strong>{recipe.rating}</strong></p>
                                    <div className='border border-gray-400 px-2 pt-3 pb-1 mb-2 relative mt-2'>
                                        <p className='absolute top-0 let-0 -translate-y-1/2 -translate-x-1 bg-white px-2'>Ingredients</p>
                                        <ul className='flex flex-wrap'>
                                            {recipe.ingredients.map(item=>{
                                                return (
                                                    <li className='capitalize add_comma text-sm'>{item}</li>
                                                )
                                            })}
                                        </ul>
                                    </div>
                                    <p>Cooking Method: <strong>{recipe.cooking_method}</strong></p>
                                    <p>Cooking Time: <strong>{recipe.cooking_time}</strong></p>
                                    <div className='flex gap-2 mt-2'>
                                        {recipe.tags.map(tag=>{
                                            return (
                                                <p className='border border-orange-300 px-2 py-1 text-xs'>{tag}</p>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className=" pt-8">
                <p className="text-xl text-bold font-secondary font-bold text-center">All Chefs</p>
                <div className="mt-2 grid grid-cols-8 gap-8">
                    <div></div>
                    {allChefs.map(chef=>{
                        return (
                            <Link key={chef.id} onClick={window.scrollTo(0, 0)} to={`/chefs?${chef.name.replace(/ /g, "_")}`}>
                                <div className="bg-white shadow-md cursor-pointer hover:scale-110 transition-all duration-300 relative">
                                    <img src={chef.profile_picture} className="w-full" />
                                    <div className="flex-1 absolute bottom-0 left-0 right-0 px-2 py-1 text-white bg-black bg-opacity-50">
                                        <p className="font-secondary text-xs">{chef.name}</p>
                                        <div className="flex justify-between">
                                            <div title='Number of Likes' className="flex gap-1 items-center">
                                                <HandThumbUpIcon className='h-3 w-3' />
                                                <p className='font-normal text-xs'>{chef.likes}</p>
                                            </div>
                                            <div title='Number of Recipies' className="flex gap-1 items-center">
                                                <CakeIcon className='h-3 w-3' />
                                                <p className='font-normal text-xs'>{chef.number_of_recipes}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </div>
    );
};

export default Chefs;