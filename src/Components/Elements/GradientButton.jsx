/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const GradientButton = ({extraClass, type, text}) => {
    const classList = `${extraClass} px-4 py-2 rounded text-white font-semibold overflow-hidden relative isolate`;
    return (
        <button type={type} className={classList}>
            <div className='bg-gradient-to-r from-[#ff5722] to-[#ff2e63] absolute h-full w-[200%] top-0 left-0 hover:-translate-x-1/2 transition-all duration-300 z-10'></div>
            <p className='pointer-events-none z-20 relative'>{text}</p>
        </button>
    );
};

export default GradientButton;