/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import GradientButton from '../Elements/GradientButton';

const Error404 = () => {
    return (
        <div className='flex flex-col gap-12 items-center justify-center py-20'>
            <p className='text-8xl text-center font-extralight'>404</p>
            <p>The Page you requested does not yet exist. Please come back later.</p>
            <Link to="/"><GradientButton text="Go to Home" extraClass="px-20"></GradientButton></Link>
        </div>
    );
};

export default Error404;