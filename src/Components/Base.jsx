/* eslint-disable no-unused-vars */
import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Elements/Footer';
import Header from './Elements/Header';

const Base = () => {
    return (
        <>
            <Header></Header>
            <div className='px-4 bg-[#ffedc4] z-0'>
                <div className='max-w-[1170px] w-full mx-auto py-12'>
                    <Outlet></Outlet>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Base;