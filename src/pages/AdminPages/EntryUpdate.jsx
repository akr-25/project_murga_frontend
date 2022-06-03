import React, { useState } from "react";
import Sidebar from "../../components/Sidebar-off-canvas";
import "../../App.css";

function EntryUpdate() {
  const [inactive, setInactive] = useState(true);

  return (
    <div className="App">
      <Sidebar/>
      <h1>EntryUpdate</h1>
    </div>
  );
}

export default EntryUpdate;
