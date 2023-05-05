/* eslint-disable no-unused-vars */

import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import GradientButton from '../Elements/GradientButton';
import InputLabel from '../Elements/InputLabel';
import SpinnerBar from '../Elements/SpinnerBar';
import { AuthContext } from '../Elements/AuthProvider';

const Login = () => {
    const navigate = useNavigate();
    const [registerMessage, setRegisterMessage] = useState(""); // ====== Submission Confirmation message
    const [registerMessageColor, setRegisterMessageColor] = useState("");
    const registerMessageClassList = `${registerMessageColor} text-sm mt-4 text-center`;

    const location = useLocation()
    const from = location.state?.from?.pathname || "/";
    const { signInUser, gitSignIn, googleSignIn } = useContext(AuthContext);
    const [error, setError] = useState(null);

    const googleLogin = (e) => {
        e.preventDefault();
        document.querySelector("#spinner").classList.remove("hidden");
        setTimeout(() => {
            document.querySelector("#spinner").classList.add("hidden");
        }, 3000)
        submitMessage("Google Login");

        // ===================================================================== FireBase
        googleSignIn()
            .then(result => {
                console.log(result.user);
                navigate(from, { replace: true })
            })
            .catch(error => {
                setError(error.message)
                console.log(error);
            })
    }
    const gitHubLogin = (e) => {
        e.preventDefault();
        document.querySelector("#spinner").classList.remove("hidden");
        setTimeout(() => {
            document.querySelector("#spinner").classList.add("hidden");
        }, 3000)
        submitMessage("GitHub Login");

        // ===================================================================== FireBase
        gitSignIn()
            .then(result => {
                console.log(result.user);
                navigate(from, { replace: true })
            })
            .catch(error => {
                setError(error.message)
                console.log(error);
            })
    }

    const submitMessage = message => {
        setTimeout(() => {
            setRegisterMessage(message);
        }, 3000)
    }

    const validate = (e) => {
        return true;
    }

    const submission = (e) => {
        e.preventDefault();
        setRegisterMessage("");

        const email = e.target.email.value;
        const password = e.target.password.value;

        document.querySelector("#spinner").classList.remove("hidden");
        e.target.querySelector("[type='submit']").setAttribute("disabled", "disabled");
        setTimeout(() => {
            document.querySelector("#spinner").classList.add("hidden");
            e.target.querySelector("[type='submit']").removeAttribute("disabled");
        }, 3000)

        if (validate(e)) {


            // ===================================================================== FireBase
            signInUser(email, password)
                .then(result => {
                    e.target.reset();
                    submitMessage("Logged In! Redirecting to Profile");
                    setRegisterMessageColor("text-green-400");
                    navigate(from, { replace: true })

                })
                .catch(error => {
                    console.log(error);
                    setError(error.code);
                    if (error.code == "auth/user-not-found") {
                        submitMessage("Incorrect email. Please Try Again");
                        setRegisterMessageColor("text-red-600");
                    } else if (error.code == "auth/wrong-password") {
                        submitMessage("Incorrent Password. Please enter Password");
                        setRegisterMessageColor("text-red-600");
                    } else {
                        submitMessage("Something went wrong. Please try again.");
                        setRegisterMessageColor("text-red-600");
                    }
                })
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

                            <label htmlFor="email" className='flex items-center mt-2'>
                                <p className='flex-1'>Email:</p>
                                <input type="email" name="email" required className='border ml-2 w-4/5 border-black px-4 py-1 rounded-full' />
                            </label>
                            <label htmlFor="passowrd" className='flex items-center mt-2'>
                                <p className='flex-1'>Password:</p>
                                <input type="password" name="password" required className='border ml-2 w-4/5 border-black px-4 py-1 rounded-full' />
                            </label>

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