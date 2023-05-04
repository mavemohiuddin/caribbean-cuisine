/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { CakeIcon, HandThumbUpIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { Link } from 'react-router-dom';
import GradientButton from './GradientButton';

const RecipeCards = ({recipe: {banner_image, name, rating, likes, date_invented, cooking_method, cooking_time}}) => {
    return (
        <div className='bg-white rounded-lg overflow-hidden'>
            <img src={banner_image} className="w-full h-40 object-cover" />
            <div className='px-4 pt-4 pb-6'>
                <div className="flex justify-between">
                    <p className='font-secondary text-xl font-bold'>{name}</p>
                    <div className="flex gap-4">
                        <div title='Number of Likes' className="flex gap-1 items-center">
                            <HandThumbUpIcon className='h-5 w-5 text-orange-600' />
                            <p className='font-bold text-sm'>{likes}</p>
                        </div>
                    </div>
                </div>
                <div className="mt-1 flex justify-between">
                    <p>Rating: <strong>{rating}</strong></p>
                    <p>Invented: <strong>{date_invented}</strong></p>
                </div>
                <div className="mt-1 flex justify-between">
                    <p>Cooking Method: <strong>{cooking_method}</strong></p>
                    <p>Time: <strong>{cooking_time}</strong></p>
                </div>
                <Link to="/recipies" className='mt-6 block'>
                    <GradientButton text="View Details"></GradientButton>
                </Link>
            </div>
        </div>
    );
};

export default RecipeCards;