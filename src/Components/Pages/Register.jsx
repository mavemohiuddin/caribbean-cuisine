/* eslint-disable no-unused-vars */
import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import GradientButton from '../Elements/GradientButton';
import InputLabel from '../Elements/InputLabel';
import SpinnerBar from '../Elements/SpinnerBar';

const Register = () => {
    const navigate = useNavigate();
    const [registerMessage, setRegisterMessage] = useState(""); // ====== Submission Confirmation message

    const submitMessage = message => {
        setTimeout(()=>{
            setRegisterMessage(message);
        },3000)
    }

    const validate = (e) => {
        if (e.target.email.value.length == 0) {
            submitMessage("Please fill all the fields");
            return false;
        } else if (e.target.username.value.length == 0) {
            submitMessage("Please fill all the fields");
            return false;
        } else if (e.target.password.value.length < 8) {
            submitMessage("Password Must be at least 8 characters");
            return false;
        } else if (e.target.password.value.length > 16) {
            submitMessage("Password Must be at most 16 characters");
            return false;
        } else if (!/\d/.test(e.target.password.value)) {
            submitMessage("Password Must contain at least one number");
            return false;
        } else if (!/[a-zA-Z]/.test(e.target.password.value)) {
            submitMessage("Password Must contain at least one Alphabet");
            return false;
        } else if (e.target.username.value.length < 4) {
            submitMessage("Please enter a valid username");
            return false;
        } else {
            submitMessage("Account Created! Redirecting to Profile");
            return true;
        }
    }

    const submission = (e) => {
        e.preventDefault();

        document.querySelector("#spinner").classList.remove("hidden");
        setTimeout(()=>{
            document.querySelector("#spinner").classList.add("hidden");
        },3000)

        if (validate(e)) {
            setTimeout(()=>{
                navigate("/profile")
            },5000)
        } 
    }

    return (
        <div className='min-h-[calc(100vh-180px)] flex items-center'>
            <div className='max-w-md w-full mx-auto p-6 relative bg-white rounded shadow-lg'>
            <p className='text-center font-extralight text-5xl'>Create Account</p>
            <p className='text-center mt-2'>
                Already have account?
                <Link to="/login" className='text-blue-300 ml-2 transition duration-300 hover:underline hover:text-blue-500'>Log in</Link>
            </p>

            <form onSubmit={submission} className='mt-8'>
                <div className='relative py-2'>
                    <InputLabel name="email" label="Email"></InputLabel>
                    <InputLabel name="password" label="Password"></InputLabel>
                    <InputLabel name="username" label="Username"></InputLabel>
                    <SpinnerBar></SpinnerBar>
                </div>

                <div className='flex items-center justify-between mt-4'>
                    <GradientButton type="submit" text="Sign Up" extraClass=""></GradientButton>
                </div>
                <p className='text-sm mt-4 text-center'>{registerMessage}</p>
            </form>
        </div>
        </div>
    );
};

export default Register;