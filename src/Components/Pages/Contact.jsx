/* eslint-disable no-unused-vars */
import React from 'react';
import GradientButton from '../Elements/GradientButton';

const Contact = () => {
    return (
        <div>
            <p className="text-center font-bold text-4xl mb-12">Contact Us</p>
            You Can find contact information at the home page.
            <button onClick="/">
                <GradientButton text="Go to Home"></GradientButton>
            </button>
        </div>
    );
};

export default Contact;