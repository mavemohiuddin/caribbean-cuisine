/* eslint-disable no-unused-vars */
import React from 'react';
import { useEffect } from 'react';

const About = () => {

    useEffect(()=>{
        console.log("object");
    },[])

    return (
        <div>
            This is About us page
        </div>
    );
};

export default About;