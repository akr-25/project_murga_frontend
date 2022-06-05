import React, { useState } from "react";
import "../../App.css";
import {NavbarMod as Navbar} from '../../components/Navbar';

function FeedLog() {
  const [inactive, setInactive] = useState(true);

  return (
    <div className="App">
      <Navbar></Navbar>
      <h1>FeedLog</h1>
      
    </div>
  );
}

export default FeedLog;
