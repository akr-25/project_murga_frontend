import React, { useState } from "react";
import {Button,Form,Container} from 'react-bootstrap';
import Navbar from "../../components/Navbar";
import "../../App.css";

function FeedLog() {

  const [type,setType]=useState("update");

  return (
    <div className="pg" >
      <Navbar/>
      
        <Container className="col-12 col-lg-4 col-md-6 col-sm-6 div-wrapper justify-content-center align-items-center form-container" >
          <Container className="flex form-heading"><h1>Entry/Update</h1></Container>  
          <Form>

            <Form.Group className="mb-3" controlId="entryUpdate">
              <Form.Label className="form-label">Entry Or Update</Form.Label>
              <Form.Control as="select" value={type} className="form-control" onChange={e => {console.log("e.target.value", e.target.value);setType(e.target.value);}}>
                <option value="update">Update</option>
                <option value="entry">Entry</option>
              </Form.Control>
            </Form.Group>

            {/* <Form.Group className="mb-3" controlId="entryDate">
                <Form.Label className="form-label">Select Date</Form.Label>
                <Form.Control type="date" name="date" placeholder="Entry Date" className="form-control"/>
            </Form.Group> */}

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

            <Form.Group className="mb-3" controlId="type1_quantity">
              <Form.Label className="form-label">Quantity/Type 1</Form.Label>
              <Form.Control type="text" placeholder="0" className="form-control"/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="type2_quantity">
              <Form.Label className="form-label">Quantity/Type 2</Form.Label>
              <Form.Control type="text" placeholder="0" className="form-control"/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="price">
              <Form.Label className="form-label">New Price</Form.Label>
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
