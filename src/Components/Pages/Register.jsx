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
    const [registerMessageColor, setRegisterMessageColor] = useState("");
    const registerMessageClassList = `${registerMessageColor} text-sm mt-4 text-center`

    const submitMessage = message => {
        setTimeout(()=>{
            setRegisterMessage(message);
        },3000)
    }

    const validate = (e) => {
        if (e.target.email.value.length == 0) {
            submitMessage("Please fill all the fields");
            setRegisterMessageColor("text-red-400");
            return false;
        } else if (e.target.username.value.length == 0) {
            submitMessage("Please fill all the fields");
            setRegisterMessageColor("text-red-400");
            return false;
        } else if (e.target.name.value.length == 0) {
            submitMessage("Please fill all the fields");
            setRegisterMessageColor("text-red-400");
            return false;
        } else if (e.target.password.value.length < 6) {
            submitMessage("Password Must be at least 6 characters");
            setRegisterMessageColor("text-red-400");
            return false;
        } else if (e.target.password.value.length > 16) {
            submitMessage("Password Must be at most 16 characters");
            setRegisterMessageColor("text-red-400");
            return false;
        } else if (!/\d/.test(e.target.password.value)) {
            submitMessage("Password Must contain at least one number");
            setRegisterMessageColor("text-red-400");
            return false;
        } else if (!/[a-zA-Z]/.test(e.target.password.value)) {
            submitMessage("Password Must contain at least one Alphabet");
            setRegisterMessageColor("text-red-400");
            return false;
        } else if (e.target.photo.value.length == 0) {
            if (e.target.image.files.length == 0) {
                submitMessage("Please select an image or enter image URL!");
                setRegisterMessageColor("text-red-400");
                return false;
            } else {
                submitMessage("Account Created! Redirecting to Profile");
                setRegisterMessageColor("text-green-400");
                return true;
            }
        } else {
            submitMessage("Account Created! Redirecting to Profile");
            setRegisterMessageColor("text-green-400");
            return true;
        }
    }

    const submission = (e) => {
        e.preventDefault();
        setRegisterMessage("");

        document.querySelector("#spinner").classList.remove("hidden");
        e.target.querySelector("[type='submit']").setAttribute("disabled", "disabled");
        setTimeout(()=>{
            document.querySelector("#spinner").classList.add("hidden");
            e.target.querySelector("[type='submit']").removeAttribute("disabled");
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
                    <InputLabel name="name" label="Name"></InputLabel>
                    <InputLabel name="username" label="Username"></InputLabel>
                    <div className='flex flex-wrap gap-2 mt-2'>
                        <p className='w-full'>Profile Picture</p>
                        <div className='w-[100px] rounded-full overflow-hidden flex items-center justify-center relative border border-gray-400'>
                            <input name="image" type="file" className="absolute py-12 opacity-0 cursor-pointer"></input>
                            <p className='pointer-events-none'>Select File</p>
                        </div>
                        <InputLabel name="photo" label="Image URL" extraClass="mt-0 flex-1"></InputLabel>
                    </div>
                    <SpinnerBar></SpinnerBar>
                </div>

                <div className='flex items-center justify-between mt-4'>
                    <GradientButton type="submit" text="Sign Up" extraClass=""></GradientButton>
                </div>
                <p className={registerMessageClassList}>{registerMessage}</p>
            </form>
        </div>
        </div>
    );
};

export default Register;