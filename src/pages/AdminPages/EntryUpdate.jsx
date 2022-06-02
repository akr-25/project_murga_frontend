import React, { useState } from "react";
import Sidebar from "../../components/Sidebar";
import "../../App.css";

function EntryUpdate() {
  const [inactive, setInactive] = useState(true);

  return (
    <div className="App">
      <Sidebar
        onCollapse={(inactive) => {
          setInactive(inactive);
        }}
      />

      <div className={`page_container ${inactive ? "inactive" : ""}`}>
        <h1>EntryUpdate</h1>
      </div>
    </div>
  );
}

export default EntryUpdate;
