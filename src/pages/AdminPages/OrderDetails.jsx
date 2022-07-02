import React, { useState } from "react";
import {Form, Button, Container} from 'react-bootstrap'
import "../../App.css";
import {NavbarMod as Navbar} from '../../components/NavigationBar';

function OrderDetails() {
  const [inactive, setInactive] = useState(true);

  return (
    <div className="App">
      {/* <Navbar></Navbar> */}
      <h1>OrderDetails</h1>
    </div>
  );
}

export default OrderDetails;
