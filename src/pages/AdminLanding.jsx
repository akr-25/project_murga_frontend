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
        <Typewriter msg1="Hola Admin!" msg2="Following requests are pending"></Typewriter>
        <RequestCard type="Request" acceptBtnText="Approve" rejectBtnText="Reject"/>
        <hr></hr>   
        <Typewriter msg1="Hola Admin!" msg2="Following Transactions are pending"></Typewriter>
        <RequestCard type="Transaction" acceptBtnText="Complete" rejectBtnText="Cancel"/>   
    </div>
  );
}
