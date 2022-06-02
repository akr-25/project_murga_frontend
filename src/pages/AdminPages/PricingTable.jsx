import React, { useState } from "react";
import { Sidebar } from "../../components";
import "../../App.css";

function PricingTable() {
  const [inactive, setInactive] = useState(true);

  return (
    <div className='App'>
      <Sidebar
        onCollapse={(inactive) => {
          setInactive(inactive);
        }}
      />

      <div className={`page_container ${inactive ? "inactive" : ""}`}>
        <h1>PricingTable</h1>
      </div>
    </div>
  );
}

export default PricingTable;
