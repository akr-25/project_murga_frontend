import React from "react";
import {NavbarMod as Navbar} from "../../components/Navbar";
import FeedForm from "../../components/feed/FeedForm";
// import "../../App.css";

function FeedLog() {


  return (
    <div className="pg">
      <Navbar/>
      <FeedForm />
    </div>
  );
}

export default FeedLog;
