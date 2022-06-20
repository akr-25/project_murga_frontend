import React from 'react'
import {Button,Form,Container} from 'react-bootstrap';
import "../App.css";

function AdminLogin() {
  return (
    <div style={{ backgroundColor: "#4E73DF", height: "100%", paddingTop: "5%", paddingBottom: "20%"}}>
      
      <Container className="col-12 col-lg-4 col-md-6 col-sm-6 div-wrapper justify-content-center align-items-center form-container" >
        <Container className="flex form-heading"><h1>Welcome Admin</h1></Container>  
        <Form>

          <Form.Group className="mb-3" controlId="pass">
            {/* <Form.Label className="form-label">Password</Form.Label> */}
            <Form.Control type="password" name="password" placeholder="Enter the password" className="form-control"/>
          </Form.Group>

          <Button variant="primary" type="submit">
            Login
          </Button>
        </Form>
      </Container>
    </div>
  )
}

export default AdminLogin