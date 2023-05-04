/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { CakeIcon, HandThumbUpIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { Link } from 'react-router-dom';
import GradientButton from './GradientButton';

const ChefCards = ({chef: {profile_picture, name, age, nationality,years_of_experience, number_of_recipes, likes, bio}}) => {

    const linkTo = `/chefs?${name.replace(/ /g, "_")}`;

    return (
        <div className='px-8 py-8 bg-white'>
            <div className="flex gap-8">
                <img src={profile_picture} className="w-28 h-28 outline outline-1 outline-black outline-offset-4 bg-red-400" />
                <div className='flex-1 w-full'>
                    <p className='text-xl font-secondary font-bold'>{name}</p>
                    <p className="font-secondary">{age}, {nationality}</p>
                    <p className="font-secondary font-bold mt-1">Experience: <span className="font-sans font-normal">{years_of_experience} years</span></p>
                    <div className="flex gap-4 mt-4">
                        <div title='Number of Likes' className="flex gap-1 items-center">
                            <HandThumbUpIcon className='h-5 w-5 text-orange-600' />
                            <p className='font-bold text-sm'>{likes}</p>
                        </div>
                        <div title='Number of Recipies' className="flex gap-1 items-center">
                            <CakeIcon className='h-5 w-5 text-orange-600' />
                            <p className='font-bold text-sm'>{number_of_recipes}</p>
                        </div>
                    </div>
                </div>
            </div>
            <p className=' custom_ellipse mt-4 text-ellipsis h-18 overflow-hidden whitespace-normal'>{bio}</p>
            <div className="flex justify-between mt-4">
                {/* <Link to={linkTo}><GradientButton text="Bio" extraClass="px-8"></GradientButton></Link> */}
                <Link to={linkTo}><GradientButton text="View Recipes" extraClass="px-8"></GradientButton></Link>
            </div>
        </div>
    );
};

export default ChefCards;