import React, { useState } from "react";
import Sidebar from "../../components/Sidebar-off-canvas";
import "../../App.css";

function PricingTable() {
  const [inactive, setInactive] = useState(true);

  return (
    <div className="App">
      <Sidebar/>
      <h1>PricingTable</h1>
    </div>
  );
}

export default PricingTable;
