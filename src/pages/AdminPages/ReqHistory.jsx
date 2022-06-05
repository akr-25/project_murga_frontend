import React, { useState } from "react";
import "../../App.css";
import {NavbarMod as Navbar} from '../../components/Navbar';

function ReqHistory() {
  const [inactive, setInactive] = useState(true);

  return (
    <div className="App">
      <Navbar></Navbar>
      <h1>Request req_history</h1>
    </div>
  );
}

export default ReqHistory;
