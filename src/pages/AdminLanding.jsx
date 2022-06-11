import React, { useState } from "react";
import {NavbarMod as Navbar} from '../components/Navbar';
import {TypewriterMod as Typewriter} from '../components/Typewriter';
import {RequestCard} from '../components/RequestCard';

import "../App.css";

export default function Home() {
  const [inactive, setInactive] = useState(true);
  
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="App">
        <Navbar></Navbar>
        <h1 className="adminLandingHeader">Pending Requests</h1>
        {/* <Typewriter msg1="Hola Admin!" msg2="Following requests are pending"></Typewriter> */}
        <RequestCard type="Request" acceptBtnVariant="primary" acceptBtnText="Approve" rejectBtnText="Reject"/>
        <hr></hr>   
        <h1 className="adminLandingHeader">Pending Transactions</h1>
        {/* <Typewriter msg1="Hola Admin!" msg2="Following Transactions are pending"></Typewriter> */}
        <RequestCard type="Transaction"  acceptBtnVariant="success" acceptBtnText="Complete" rejectBtnText="Cancel"/>   
    </div>
  );
}
