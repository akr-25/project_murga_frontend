import React, { useState } from "react";
import {NavbarMod as Navbar} from "../../components/Navbar";
import {Button,Form,Container} from 'react-bootstrap';
import PlaceOrder from "../../components/order/PlaceOrder";
import UserDetails from "../../components/order/UserDetails";

function CreateOrder(){

    const [userID, setUserID] = useState("");




    return (
        <div className="pg">
            <Navbar></Navbar>
            {userID == "" ? <UserDetails setUserID={setUserID}></UserDetails> : <PlaceOrder></PlaceOrder>}

        </div>
        
    );
}

export default CreateOrder;