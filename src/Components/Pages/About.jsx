/* eslint-disable no-unused-vars */
import React from 'react';
import { useEffect } from 'react';

const About = () => {

    useEffect(()=>{
        console.log("object");
    },[])

    return (
        <div className='my-20'>
            <p className="text-4xl text-center font-bold mb-12">About Us</p>
            <p>Carribena Cuisine is a brand dedicated to bringing the vibrant and delicious flavors of the Caribbean to your kitchen. Our passion for food and culture has led us on a journey to create authentic and easy-to-follow recipes that celebrate the diverse and colorful culinary traditions of the Caribbean islands. From spicy jerk chicken to flavorful seafood stews, our recipes are made with fresh and locally sourced ingredients to bring out the true taste of the Caribbean. Whether you are a seasoned cook or just starting out, Carribena Cuisine is your go-to brand for all things Caribbean cuisine.</p>
        </div>
    );
};

export default About;