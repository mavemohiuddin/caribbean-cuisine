/* eslint-disable no-unused-vars */
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Elements/Header';

const Base = () => {
    return (
        <>
            <Header></Header>
            <div className='px-4 bg-[#f9f7f2] z-0'>
                <div className='max-w-[1170px] w-full mx-auto py-12'>
                    <Outlet></Outlet>
                </div>
            </div>
        </>
    );
};

export default Base;