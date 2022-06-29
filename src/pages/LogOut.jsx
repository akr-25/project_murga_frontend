import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from "react-router-dom";

export default function LogOut() {
    const { auth } = useAuth(); 
    const navigate = useNavigate(); 

    function logOut(event){
        event.preventDefault();
        try{
            fetch("http://localhost:3001/auth/logout", {
                credentials: 'include', 
                redirect: 'follow', 
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
            })
            .then(res => res.json())
            .then(data => navigate("/"))
            .catch(err => console.log(err))
        }
        catch(err){
            console.log(err); 
        }
        

        // event.preventDefault();
        // window.open("http://localhost:3001/auth/logout", "_self")
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
