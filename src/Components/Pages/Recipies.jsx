/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import { HandThumbUpIcon, HeartIcon } from '@heroicons/react/24/solid';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { addToFavorite } from '../../utilities/utilities';
import SpinnerBar from '../Elements/SpinnerBar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Recipies = () => {
    const [allRecipies, setAllRecipies] = useState([]);
    const [savedRecipies, setSavedRecipies] = useState([]);

    const notify = (message) => toast(message);

    useEffect(()=>{
        fetch("https://caribbean-cuisine-server-mavemohiuddin.vercel.app/recipe")
        .then(res => res.json())
        .then(data => {
            setAllRecipies(data);
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
        <div className='grid grid-cols-3 gap-4'>
            {allRecipies.map(recipe=> {
                return(
                    <div key={recipe.id} className="border border-gray-300 rounded-lg overflow-hidden bg-white">
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
                            <div className='font-semibold font-secondary'>Follow from: {recipe.chef_name.map( chef=> {
                                    return (
                                        <button className='px-2 border m-1'>{chef}</button>
                                    )
                                }
                            )}</div>
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
    );
};

export default Recipies;