/* eslint-disable no-unused-vars */
import { favIcon1, favIcon2, favIcon3, favIcon4, favIcon5 } from "../assets/images.jsx";

let message = 1;
let foods = [favIcon1, favIcon2, favIcon3, favIcon4, favIcon5];
// let icons = ["🥐", "🍕", "🍔", "🍗", "🍖"]

setInterval(()=>{
    message += 1;
    message == foods.length ? message = 0:null;
    document.querySelector("link[rel='icon']").setAttribute("href", foods[message]);
},1000)