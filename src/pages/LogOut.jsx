import React from 'react';
import { useAuth } from '../contexts/AuthContext';

export default function LogOut() {
    const { auth } = useAuth(); 

    function logOut(event){
        event.preventDefault();
        window.open("http://localhost:3001/auth/logout", "_self")
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
