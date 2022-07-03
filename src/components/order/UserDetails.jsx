import React, { useState } from "react";
import {Button,Container} from 'react-bootstrap';
import "../../App.css";
import FindUser from "./FindUser";
import CreateUser from "./CreateUser";

function UserDetails(props) {

  const [method, setMethod] = useState(0);

  if(method === 0){
    return (
      <div className="pg" >
        <div className="items-div">
          <div className="row"></div>
            <Container className="col-12 col-lg-4 col-md-6 col-sm-6 div-wrapper justify-content-center align-items-center form-container" >
              <Container className="flex form-heading"><h1>Select One to Proceed</h1><hr></hr></Container>  
              <div className="flex-parent jc-center">
                <Button size="lg" onClick={() => setMethod(1)} variant="primary" style={{marginRight: "40px"}}>Existing User</Button>
                <Button size="lg" onClick={() => setMethod(2)} variant="primary">New User</Button>
              </div>          
            </Container>
          </div>
        </div>
    );
  }else if(method === 1){
    return (
      <FindUser setUserID={props.setUserID}/>
    );
  }else{
    return (
      <CreateUser setUserID={props.setUserID}/>
    );
  }
  
}

export default UserDetails;
