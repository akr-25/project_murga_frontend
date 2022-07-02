import React from "react";
import NavigationBar from '../components/NavigationBar';

import "../App.css";
import { Outlet } from "react-router-dom";

export default function Home() {
  return (
    <div className="App">
        <NavigationBar></NavigationBar>
        <Outlet/>
    </div>
  );
}
