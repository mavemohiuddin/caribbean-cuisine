/* eslint-disable no-unused-vars */
import React from 'react';
import { useContext, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import GradientButton from '../Elements/GradientButton';
import SpinnerBar from '../Elements/SpinnerBar';
import { AuthContext } from '../Elements/AuthProvider';


const Register = () => {
    const navigate = useNavigate();
    const [registerMessage, setRegisterMessage] = useState(""); // ====== Submission Confirmation message
    const [registerMessageColor, setRegisterMessageColor] = useState("");
    const registerMessageClassList = `${registerMessageColor} text-sm mt-4 text-center`;


    const { createUser, updateUser, googleSignIn, gitSignIn } = useContext(AuthContext)

    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const submitMessage = message => {
        setTimeout(()=>{
            setRegisterMessage(message);
        },3000)
    }

    const validate = (e) => {
        if (e.target.password.value.length < 6) {
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
                return true;
            }
        } else {
            return true;
        }
    }

    const submitGoogleSignIn = (e) => {
        e.preventDefault();
        googleSignIn()
        .then()
        .catch()
    }
    const submitGitHubSignIn = (e) => {
        e.preventDefault();
        gitSignIn()
        .then()
        .catch()
    }

    const submission = (e) => {
        e.preventDefault();

        //  ======================================================================= Reseting data
        setRegisterMessage("");
        setError(null)
        setSuccess(null)
        
        //  ==================================================================== USer Credentials
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const photo = e.target.photo.value;

        // ============================================================================= Spinner
        document.querySelector("#spinner").classList.remove("hidden");
        e.target.querySelector("[type='submit']").setAttribute("disabled", "disabled");
        setTimeout(()=>{
            document.querySelector("#spinner").classList.add("hidden");
            e.target.querySelector("[type='submit']").removeAttribute("disabled");
        },3000)

        // ========================================================================== Validation
        if (validate(e)) {
            
            createUser(email, password)
            .then(result => {
                console.log(email, password);
                e.target.reset()
                setRegisterMessage("User account has been created successfully")
                updateUser(name, photo);

                navigate('/profile', { replace: true })

            })
            .catch(error => {
                setError(error.code)
                console.log(error);

                if (error.code == "auth/invalid-email") {
                    setRegisterMessage("Invalid Email. Please Try Again");
                    setRegisterMessageColor("text-red-600");
                } else if (error.code == "auth/email-already-in-use") {
                    setRegisterMessage("User Already Exists!");
                    setRegisterMessageColor("text-red-600");
                } else {
                    setRegisterMessage("Something went wrong! Please Try Again.");
                    setRegisterMessageColor("text-red-600");
                }
            })
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

                    <label htmlFor="email" className='flex items-center'>
                        <p className='flex-1'>Email:</p>
                        <input type="email" name="email" required className='border ml-2 w-4/5 border-black px-4 py-1 rounded-full' />
                    </label>
                    <label htmlFor="password" className='flex items-center mt-2'>
                        <p className='flex-1'>Password:</p>
                        <input type="password" name="password" required className='border ml-2 w-4/5 border-black px-4 py-1 rounded-full' />
                    </label>
                    <label htmlFor="name" className='flex items-center mt-2'>
                        <p className='flex-1'>Name:</p>
                        <input type="text" name="name" required className='border ml-2 w-4/5 border-black px-4 py-1 rounded-full' />
                    </label>
                    <label htmlFor="photo" className='block mt-4'>
                        <p className='flex-1'>Profile picture URL:</p>
                        <input type="text" name="photo" required className='border ml-2 w-full border-black px-4 py-1 rounded-full' />
                    </label>
                    <SpinnerBar></SpinnerBar>
                </div>

                <div className='flex items-center justify-center mt-4'>
                    <GradientButton type="submit" text="Sign Up" extraClass=""></GradientButton>
                </div>
                
                <div className='border-t border-gray-400 pt-4 mt-4'>
                    <button onClick={submitGoogleSignIn} className='block w-full px-8 py-2 rounded border bg-gray-200 border-gray-300'>
                        <p>Login with Google</p>
                    </button>
                    <button onClick={submitGitHubSignIn} className='block w-full px-8 py-2 rounded border bg-gray-200 border-gray-300 mt-4'>
                        <p>Login with Git-Hub</p>
                    </button>
                </div>

                <p className={registerMessageClassList}>{registerMessage}</p>
            </form>
        </div>
        </div>
    );
};

export default Register;