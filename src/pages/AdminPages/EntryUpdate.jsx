import React, { useState } from "react";
import {Button,Form,Container} from 'react-bootstrap';
import {NavbarMod as Navbar} from "../../components/Navbar";
import "../../App.css";
import Entry from "../../components/entry-update/Entry";
import Update from "../../components/entry-update/Update";

function FeedLog() {

  const [method, setMethod] = useState(0);

  if(method === 0){
    return (
      <div className="pg" >
        <Navbar/>
        
          <Container className="col-12 col-lg-4 col-md-6 col-sm-6 div-wrapper justify-content-center align-items-center form-container" >
            <Container className="flex form-heading"><h1>Select one</h1></Container>  
            
            <Button onClick={() => setMethod(1)} variant="primary" style={{marginRight: "40px"}}> New Entry</Button>
            <Button onClick={() => setMethod(2)} variant="primary"> Update Entry</Button>
        </Container>
        
      </div>
    );
  }else if(method === 1){
    return (
      <Entry />
    );
  }else{
    return (
      <Update />
    );
  }
  
}

export default FeedLog;