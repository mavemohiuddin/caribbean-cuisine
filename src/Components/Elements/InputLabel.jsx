/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { showLabel, hideLabel } from '../../utilities/utilities'; // ============= Input fields animation

const InputLabel = ({name, label}) => {
    return (
        <label htmlFor={name} className='flex relative mt-4'>
            <span className='bg-white px-2 absolute top-0 translate-y-1/4 left-2 pointer-events-none transition duration-300'>{label}</span>
            <input onFocus={hideLabel} onBlur={showLabel} onMouseEnter={hideLabel} onMouseLeave={showLabel} type={name} name={name} className='border border-gray-400 rounded-full flex-1 px-4 py-1' min="8" max="16"/>
        </label>
    );
};

export default InputLabel;