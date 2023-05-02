/* eslint-disable no-unused-vars */
import React from 'react';

const SpinnerBar = () => {
    return (
        <div id="spinner" className='px-8 py-4 absolute inset-0 z-10 isolate flex justify-center flex-col hidden'>
            <div className='absolute inset-0 bg-white opacity-80 -z-10'></div>
            <p className='text-center mb-2'>Please Wait</p>
            <div className='h-2 border border-gray-400 rounded-full overflow-hidden relative w-full'>
                <div className='absolute w-1/3 h-full bg-gradient-to-r from-orange-400 to-red-600 spinner'></div>
            </div>
        </div>
    );
};

export default SpinnerBar;