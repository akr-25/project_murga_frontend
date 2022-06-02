import axios from 'axios';
import React from 'react';
import { BACKEND_URLS } from '../config/urls';
import { useAuth } from '../contexts/AuthContext';

export default function LogOut() {
    const { auth } = useAuth(); 

    const logOut = async (event) => {
        event.preventDefault();
        // await axios.post(BACKEND_URLS.AUTH.LOGOUT, {}); //!FIX THIS
        window.open(BACKEND_URLS.AUTH.LOGOUT, "_self")
    }
    
    return <div>
        {
            auth ?
            <button onClick={logOut}>ARE YOU LEAVING ME?? DADDY?? WAS I NOT CUTE ENOUGH? ~uWu~</button> 
            :
            <button onClick={() => {alert("NOT LOGGED IN, FUCK OFF PEDO ~<>~")}}>FUCK OFF PEDO!</button> 
        }
        
    </div>;
}
