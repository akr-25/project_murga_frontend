import React, { useState } from "react";
import {Button,Form,Container} from 'react-bootstrap';
import {NavbarMod as Navbar} from "../../components/Navbar";
import "../../App.css";

function FeedLog() {

  return (
    <div className="App" style={{height:"100%", background: "linear-gradient(to bottom, #4E73DF 50%, #fff 50%)",paddingBottom:"5%"}}>
      <Navbar/>
      
        <Container className="col-12 col-lg-4 col-md-6 col-sm-6 div-wrapper justify-content-center align-items-center" style={{borderRadius:"10px", marginTop:"100px",marginBottom:"0px", padding:"40px", backgroundColor:"#F8F9FC"}}>
          <Container className="flex" style={{margin: "0%"}}><h1>FeedLog</h1></Container>  
          <Form>

            <Form.Group className="mb-3" controlId="entryDate">
                <Form.Label style={{fontWeight:"600", fontSize:"1em"}}>Select Date</Form.Label>
                <Form.Control type="date" name="date" placeholder="Entry Date" style={{backgroundColor: "#9C9C9C", color:"white", fontWeight:"600", fontSize:"0.8em"}}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="batchNo">
              <Form.Label style={{fontWeight:"600", fontSize:"1em"}}>Batch No</Form.Label>
              <Form.Control type="text" placeholder="Enter Batch No" style={{backgroundColor: "#9C9C9C", color:"white", fontWeight:"600", fontSize:"0.8em"}}/>
            </Form.Group>

            {/* change "Food per chick" to "Food per batch" */}
            <Form.Group className="mb-3" controlId="perPerson">
              <Form.Label style={{fontWeight:"600", fontSize:"1em"}}>Food per Batch (in grams)</Form.Label>
              <Form.Control type="text" placeholder="0g" style={{backgroundColor: "#9C9C9C", color:"white", fontWeight:"600", fontSize:"0.8em"}}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="price">
              <Form.Label style={{fontWeight:"600", fontSize:"1em"}}>Price per gram</Form.Label>
              <Form.Control type="text" placeholder="Rs.0" style={{backgroundColor: "#9C9C9C", color:"white", fontWeight:"600", fontSize:"0.8em"}}/>
            </Form.Group>

            <Button variant="primary" type="submit">
              Entry
            </Button>
          </Form>
      </Container>
    </div>
  );
}

export default FeedLog;
