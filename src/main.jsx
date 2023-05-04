/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Base from './Components/Base';
import Error404 from './Components/Pages/Error404';
import Home from './Components/Pages/Home';
import Login from './Components/Pages/Login';
import Register from './Components/Pages/Register';
import Profile from './Components/Pages/Profile';
import Blogs from './Components/Pages/Blogs';
import Recipies from './Components/Pages/Recipies';
import Chefs from './Components/Pages/Chefs';
import About from './Components/Pages/About';
import Contact from './Components/Pages/Contact';
import Terms from './Components/Pages/Terms';
import Policy from './Components/Pages/Policy';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Base></Base>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/profile",
                element: <Profile></Profile>
            },
            {
                path: "/blogs",
                element: <Blogs></Blogs>
            },
            {
                path: "/recipies",
                element: <Recipies></Recipies>
            },
            {
                path: "/chefs",
                element: <Chefs></Chefs>
            },
            {
                path: "/about",
                element: <About></About>
            },
            {
                path: "/contact",
                element: <Contact></Contact>
            },
            {
                path: "/terms",
                element: <Terms></Terms>
            },
            {
                path: "/policy",
                element: <Policy></Policy>
            },
            {
                path: "*",
                element: <Error404></Error404>
            }
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    // <React.StrictMode>
    //     <RouterProvider router={router} />
    // </React.StrictMode>,
    <RouterProvider router={router} />
)
