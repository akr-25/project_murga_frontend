import React, { useState } from "react";
import Sidebar from "../../components/Sidebar-off-canvas";
import "../../App.css";

function ReqHistory() {
  const [inactive, setInactive] = useState(true);

  return (
    <div className="App">
      <Sidebar/>
      <h1>Request req_history</h1>
    </div>
  );
}

export default ReqHistory;
