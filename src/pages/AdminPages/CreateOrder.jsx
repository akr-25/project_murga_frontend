import React, { useState } from "react";
import {NavbarMod as Navbar} from "../../components/NavigationBar";
import PlaceOrder from "../../components/order/PlaceOrder";
import UserDetails from "../../components/order/UserDetails";

function CreateOrder(){
    const [userID, setUserID] = useState("");
    return (
        <div className="pg">
            {userID === "" ? <UserDetails setUserID={setUserID}></UserDetails> : <PlaceOrder userID={userID}></PlaceOrder>}
        </div>
    );
}

export default CreateOrder;