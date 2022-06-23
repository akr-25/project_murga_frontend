import React, { useState } from "react";
import {Button,Form,Container} from 'react-bootstrap';
import {NavbarMod as Navbar} from "../../components/Navbar";
import FeedForm from "../../components/feed/FeedForm";
// import "../../App.css";

function FeedLog() {

  const [type,setType]=useState("chick");

  return (
    <div className="pg">
      <Navbar/>
      <FeedForm />
    </div>
  );
}

export default FeedLog;