import React, {useState} from 'react';
import {NavLink} from 'react-router-dom'
import {Button,Container,Offcanvas,Card,ListGroup} from 'react-bootstrap';

function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        {/* <div className="d-grid gap-2">
          <Button variant="primary" size="lg">
            Block level button
          </Button>
          <Button variant="primary" size="lg">
            Block level button
          </Button>
        </div> */}
        
          <ListGroup variant="flush">
            <ListGroup.Item><NavLink to='/home' className={isActive =>"nav-link" + (!isActive ? " unselected" : "")}>Home</NavLink></ListGroup.Item>
            <ListGroup.Item><NavLink to='/home/entry_update' className={isActive =>"nav-link" + (!isActive ? " unselected" : "")}>Entry_Update</NavLink></ListGroup.Item>
            <ListGroup.Item><NavLink to='/home/feed_log' className={isActive =>"nav-link" + (!isActive ? " unselected" : "")}>FeedLog</NavLink></ListGroup.Item>
            <ListGroup.Item><NavLink to='/home/pricing_table' className={isActive =>"nav-link" + (!isActive ? " unselected" : "")}>Pricing_Table</NavLink></ListGroup.Item>
            <ListGroup.Item><NavLink to='/home/req_history' className={isActive =>"nav-link" + (!isActive ? " unselected" : "")}>Request_History</NavLink></ListGroup.Item>
            <ListGroup.Item><NavLink to='/home/create_an_order' className={isActive =>"nav-link" + (!isActive ? " unselected" : "")}>Create_An_Order</NavLink></ListGroup.Item>
          </ListGroup>
  
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Example;