import React, { useState } from "react";
import {Button,Form,Container} from 'react-bootstrap';
import {NavbarMod as Navbar} from "../../components/Navbar";
// import "../../App.css";

function FeedLog() {

  const [type,setType]=useState("chick");

  return (
    <div className="pg">
      <Navbar/>
      
      <Container className="col-12 col-lg-4 col-md-6 col-sm-6 div-wrapper justify-content-center align-items-center form-container" >
        <Container className="flex form-heading"><h1>FeedLog</h1></Container>  
        <Form>

          <Form.Group className="mb-3" controlId="entryDate">
              <Form.Label className="form-label">Select Date</Form.Label>
              <Form.Control type="date" name="date" placeholder="Entry Date" className="form-control"/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="batchType">
            <Form.Label className="form-label">Batch Type</Form.Label>
            <Form.Control as="select" value={type} className="form-control" onChange={e => {console.log("e.target.value", e.target.value);setType(e.target.value);}}>
              <option value="chick">Chick</option>
              <option value="Duck">Duck</option>
            </Form.Control>
          </Form.Group>

          <Form.Group className="mb-3" controlId="batchNo">
            <Form.Label className="form-label">Batch No</Form.Label>
            <Form.Control type="text" placeholder="Enter Batch No" className="form-control"/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="perPerson">
            <Form.Label className="form-label">Food per Chick (in grams)</Form.Label>
            <Form.Control type="text" placeholder="0g" className="form-control"/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="price">
            <Form.Label className="form-label">Price per gram</Form.Label>
            <Form.Control type="text" placeholder="Rs.0" className="form-control"/>
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