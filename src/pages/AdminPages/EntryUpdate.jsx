import React, { useState } from "react";
import "../../App.css";
import {NavbarMod as Navbar} from '../../components/Navbar';

function EntryUpdate() {
  const [inactive, setInactive] = useState(true);

  return (
    <div className="App">
      <Navbar></Navbar>
      <h1>EntryUpdate</h1>
    </div>
  );
}

export default EntryUpdate;
