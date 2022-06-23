import React, { useState } from "react";
import {Button,Form,Container} from 'react-bootstrap';
import {NavbarMod as Navbar} from "../../components/Navbar";
import PriceForm from "../../components/price/PriceForm";
import "../../App.css";

function PriceLog() {

  const [type,setType]=useState("chick");

  return (
    <div className="pg">
      <Navbar/>
      <PriceForm />
    </div>
  );
}

export default PriceLog;