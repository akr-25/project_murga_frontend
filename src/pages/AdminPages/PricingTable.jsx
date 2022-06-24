import React from "react";
import {NavbarMod as Navbar} from "../../components/Navbar";
import PriceForm from "../../components/price/PriceForm";
import "../../App.css";

function PriceLog() {

  return (
    <div className="pg">
      <Navbar/>
      <PriceForm />
    </div>
  );
}

export default PriceLog;