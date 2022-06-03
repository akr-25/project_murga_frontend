import React, { useState } from "react";
import Sidebar from "../components/Sidebar-off-canvas";
import {NavbarMod as Navbar} from '../components/Navbar';
// import {TypewriterMod as Typewriter} from '../components/Typewriter';
import {RequestCard} from '../components/RequestCard';

import "../App.css";

export default function Home() {
  const [inactive, setInactive] = useState(true);
  
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="App">
      <Sidebar
        handleClose = {handleClose}
        handleShow = {handleShow}
        setShow = {setShow}

        onCollapse={(inactive) => {
          setInactive(inactive);
        }}
      />

        
      {/* </Sidebar> */}

      <div className={`page_container`}>
        {/* <Navbar></Navbar> */}
        <RequestCard />
      </div>
      
    </div>
  );
}
