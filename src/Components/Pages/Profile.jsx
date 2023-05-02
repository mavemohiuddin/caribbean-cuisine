/* eslint-disable no-unused-vars */
import { PencilSquareIcon, UserCircleIcon } from '@heroicons/react/24/solid';
import React, { useState } from 'react';

const Profile = () => {

    const [image, setImage] = useState('');
    // const inputRef = useRef(null);

    const editName = (e) => {
        const text = e.target.parentElement.children[0];
        text.setAttribute("contenteditable", "true");
        text.setAttribute("data-value", text.innerText); // ====== Saving the text value for placeholder

        let span = document.createElement("span"); // ================= Displaying placeholder with span
        span.classList.add("text-gray-400");
        span.classList.add("pointer-events-none");
        span.setAttribute("contenteditable", "false");
        span.innerText = text.getAttribute("data-value");

        text.innerText = "";
        text.appendChild(span);

        text.addEventListener("keyup", ()=> {
            
        })
        text.addEventListener("blur", ()=>{

        })
        text.focus();
    }

    const handleImageUpload = (e) => {
        const reader = new FileReader();
        reader.onload = () => {
          if (reader.readyState === 2) {
            setImage(reader.result);
          }
        };
        reader.readAsDataURL(e.target.files[0]);
      };
    return (
        <div className='flex gap-4'>
            <div className='border border-transparent rounded-lg px-8 py-6'>
                <div className='border border-gray-400 h-48 w-48 rounded-full mx-auto relative'>
                    <div className='overflow-hidden h-48 w-48 rounded-full'>
                        {image ? 
                        (<img src={image} className="min-h-full min-w-full object-cover object-center" />) 
                        : (<UserCircleIcon className='text-orange-600'></UserCircleIcon>)}
                    </div>
                    <div className='absolute bottom-4 right-4 outline outline-2 outline-orange-700 h-8 w-8 rounded-full overflow-hidden bg-white flex items-center justify-center'>
                        <input type="file" onChange={handleImageUpload} className="absolute cursor-pointer py-8 opacity-0" />
                        <PencilSquareIcon className='h-5 w-5 text-orange-600 relative z-10 pointer-events-none'></PencilSquareIcon>
                    </div>
                </div>
                <div className='flex justify-center items-center gap-2 mt-8'>
                    <p id="user_name" className='font-bold text-center text-2xl px-2'>Your Name</p>
                    <div onClick={editName} className=" cursor-pointer">
                        <PencilSquareIcon className='h-6 w-6 text-black pointer-events-none'></PencilSquareIcon>
                    </div>
                </div>
                <div className='flex justify-center items-center gap-2 mt-4'>
                    <p id="user_username" className='italic px-2'>@username</p>
                    <PencilSquareIcon className='h-4 w-4 text-black cursor-pointer'></PencilSquareIcon>
                </div>
                <div>
                    <p className='text-center mt-4'>Joined: <span id="join_date">12/23/3445</span></p>
                    <p className='text-center mt-1'>Recipes Viewed: <span id="recipies_viewed">23</span></p>
                    <p className='text-center mt-1'>Chef Followed: <span id="chef_followed">5</span></p>
                </div>
            </div>
            <div className='border border-gray-200 rounded-lg flex-1'></div>
        </div>
    );
};

export default Profile;