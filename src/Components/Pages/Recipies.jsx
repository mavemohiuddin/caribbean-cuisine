/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import { ChevronDownIcon, HandThumbUpIcon, HeartIcon } from '@heroicons/react/24/solid';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { addToFavorite } from '../../utilities/utilities';
import SpinnerBar from '../Elements/SpinnerBar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

const Recipies = () => {
    const [allRecipies, setAllRecipies] = useState([]);
    const [savedRecipies, setSavedRecipies] = useState([]);
    const [selectedChef, setSelectedChef] = useState(null);
    const [selectedRecipe, setSelectedRecipe] = useState([]);

    const notify = (message) => toast(message);

    useEffect(()=>{
        document.querySelector("#spinner").classList.remove("hidden");
        fetch("https://caribbean-cuisine-server-mavemohiuddin.vercel.app/recipe")
        .then(res => res.json())
        .then(data => {
            setAllRecipies(data);
            setSelectedChef("All")
            let localRecipies = localStorage.getItem("recipies");
                if (localRecipies != null) {
                    setSavedRecipies(JSON.parse(localRecipies))
                }
                
            // =============================================================== Slow Loading data for Effect
            document.querySelector("#recipe_cotnainer").classList.add("hidden");
            setTimeout(()=>{
                document.querySelector("#recipe_cotnainer").classList.remove("hidden");
                document.querySelector("#spinner").classList.add("hidden");
            },3000)
        })
    },[])

    const loadSpinner = () => {
        document.querySelector("#spinner").classList.remove("hidden");
        document.querySelector("#recipe_cotnainer").classList.add("hidden");
        setTimeout(()=>{
            document.querySelector("#recipe_cotnainer").classList.remove("hidden");
            document.querySelector("#spinner").classList.add("hidden");
        },1000)
    }

    const optionSelect = (e) => {
        document.querySelector("#selectOutput").innerHTML = (e.target.getAttribute("data-value"));
        document.querySelector("#selectOptions").classList.add("hidden");
        document.querySelector("#selectIcon").classList.remove("rotate-180");
        e.stopPropagation();
        setSelectedChef(e.target.getAttribute("data-value"));
        loadSpinner();
    }
    const optionToggle = () => {
        document.querySelector("#selectOptions").classList.toggle("hidden");
        document.querySelector("#selectIcon").classList.toggle("rotate-180");
    }

    useEffect(()=>{
        const selectedRecipes = allRecipies.filter(one=>one.chef_name.includes(selectedChef));
        if (selectedChef == "All") {
            setSelectedRecipe(allRecipies);
        }else if (selectedChef == "Favorites") {
            let localRecipe = [];
            allRecipies.map(recipe=>{
                if (savedRecipies.includes(recipe.id)) {
                    localRecipe.push(recipe);
                }
            })
            console.log(localRecipe);
            setSelectedRecipe(localRecipe);
        } else {
            setSelectedRecipe(selectedRecipes);
        }
    },[allRecipies, savedRecipies, selectedChef])

    const RecipeLikeButtonClasses = (recipe) => {
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
        e.target.classList.add("text-pink-400");
    }

    return (
        <div className='relative min-h-[300px]'>
            <ToastContainer></ToastContainer>
            <SpinnerBar></SpinnerBar>
            <div className="flex justify-center gap-4 mb-8">
                <p className='font-secondary text-2xl'>You Are Viewing:</p>
                <div onClick={optionToggle} className='cursor-pointer relative w-40 bg-white border border-gray-200 grid place-content-center select-none'>
                    <p id="selectOutput" className='pointer-events-none'>All</p>
                    <ChevronDownIcon id="selectIcon" className='h-4 w-4 absolute right-2 top-1/2 -translate-y-1/2'></ChevronDownIcon>
                    <div id="selectOptions" className='hidden absolute top-7 bg-white z-10 p-4 left-0 w-full border shadow-md flex flex-col gap-1'>
                        <p data-value="All"onClick={optionSelect} className='cursor-pointer transition duration-300 hover:text-orange-400'>All</p>
                        <p data-value="Favorites"onClick={optionSelect} className='cursor-pointer transition duration-300 hover:text-orange-400'>Favorites</p>
                        <p data-value="Molly Smith"onClick={optionSelect} className='cursor-pointer transition duration-300 hover:text-orange-400'>Molly Smith</p>
                        <p data-value="Juan Garcia"onClick={optionSelect} className='cursor-pointer transition duration-300 hover:text-orange-400'>Juan Garcia</p>
                        <p data-value="Sophie Martin"onClick={optionSelect} className='cursor-pointer transition duration-300 hover:text-orange-400'>Sophie Martin</p>
                        <p data-value="Antonio Rossi"onClick={optionSelect} className='cursor-pointer transition duration-300 hover:text-orange-400'>Antonio Rossi</p>
                        <p data-value="Chen Liu"onClick={optionSelect} className='cursor-pointer transition duration-300 hover:text-orange-400'>Chen Liu</p>
                        <p data-value="Lina Gomez"onClick={optionSelect} className='cursor-pointer transition duration-300 hover:text-orange-400'>Lina Gomez</p>
                    </div>
                </div>
            </div>
            <div id="recipe_cotnainer" className='grid grid-cols-3 gap-4'>
                {selectedRecipe.map(recipe=> {
                    return(
                        <div key={recipe.id} className="border border-gray-300 rounded-lg overflow-hidden bg-white">
                            <div className='relative overflow-hidden'>
                                <img src={recipe.banner_image} className="h-44 w-full object-cover" />
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
                            <div className="p-4">
                                <p className='font-semibold font-secondary text-xl'>{recipe.name}</p>
                                <p className='font-secondary text-sm'>Rating: <strong>{recipe.rating}</strong></p>
                                <p className='font-semibold font-secondary mt-2'>Follow from:</p>
                                <div className='flex flex-wrap'> {
                                    recipe.chef_name.map( chef=> {
                                        return (
                                            <Link to={`/chefs?${chef.replace(" ", "_")}`} className='px-2 py-1 border mx-1 my-2 whitespace-nowrap bg-orange-200 text-sm'>{chef}</Link>
                                        )
                                    })
                                }</div>
                                <p className='mt-2'>Ingredients -</p>
                                <ul className='list-decimal list-inside mb-2'>
                                    {recipe.ingredients.map(item=>{
                                        return (
                                            <li className='capitalize add_comma text-sm'>{item}</li>
                                        )
                                    })}
                                </ul>
                                <p>Cooking Method: <strong>{recipe.cooking_method}</strong></p>
                                <p>Cooking Time: <strong>{recipe.cooking_time}</strong></p>
                                <div className='flex gap-2 mt-2'>
                                    <p>Tags:</p>
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
    );
};

export default Recipies;