/* eslint-disable no-unused-vars */
import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import GradientButton from '../Elements/GradientButton';
import InputLabel from '../Elements/InputLabel';
import SpinnerBar from '../Elements/SpinnerBar';

const Login = () => {
    const navigate = useNavigate();
    const [registerMessage, setRegisterMessage] = useState(""); // ====== Submission Confirmation message
    const [registerMessageColor, setRegisterMessageColor] = useState("");
    const registerMessageClassList = `${registerMessageColor} text-sm mt-4 text-center`

    const googleLogin = (e) => {
        e.preventDefault();
        document.querySelector("#spinner").classList.remove("hidden");
        setTimeout(()=>{
            document.querySelector("#spinner").classList.add("hidden");
        },3000)
        submitMessage("Google Login");
    }
    const gitHubLogin = (e) => {
        e.preventDefault();
        document.querySelector("#spinner").classList.remove("hidden");
        setTimeout(()=>{
            document.querySelector("#spinner").classList.add("hidden");
        },3000)
        submitMessage("GitHub Login");
    }
    
    const submitMessage = message => {
        setTimeout(()=>{
            setRegisterMessage(message);
        },3000)
    }

    const validate = (e) => {
        if (e.target.username.value.length == 0) {
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
            if (e.target.username.value.includes("@")) {
                submitMessage("Logging in with Email. Redirecting to Profile");
            } else {
                submitMessage("Logging in with Username. Redirecting to Profile");
            }
            setTimeout(()=>{
                navigate("/profile")
            },5000)
        } 
    }

    return (
        <div className='min-h-[calc(100vh-180px)] flex items-center'>
            <div className='max-w-md w-full mx-auto p-6 relative bg-white rounded shadow-lg'>
                <p className='text-center font-extralight text-5xl'>Log In</p>
                <p className='text-center mt-2'>
                    New Here?
                    <Link to="/register" className='text-blue-300 ml-2 transition duration-300 hover:underline hover:text-blue-500'>Create Account</Link>
                </p>

                <form onSubmit={submission} className='mt-3'>
                    <div className='relative py-2'>
                        <SpinnerBar></SpinnerBar>
                        <div className='border-b border-gray-400 pb-4'>
                            <button onClick={googleLogin} className='block w-full px-8 py-2 rounded border bg-gray-200 border-gray-300'>
                                <p>Login with Google</p>
                            </button>
                            <button onClick={gitHubLogin} className='block w-full px-8 py-2 rounded border bg-gray-200 border-gray-300 mt-4'>
                                <p>Login with Git-Hub</p>
                            </button>
                        </div>
                        <p className="text-center font-semibold font-secondary mt-2">Or log in with email</p>
                        <InputLabel name="username" label="Email/Username"></InputLabel>
                        <InputLabel name="password" label="Password"></InputLabel>
                    </div>

                    <div className='flex items-center justify-between mt-4'>
                        <GradientButton type="submit" text="Log in" extraClass=""></GradientButton>
                    </div>
                    <p className={registerMessageClassList}>{registerMessage}</p>
                </form>
            </div>
        </div>
    );
};

export default Login;