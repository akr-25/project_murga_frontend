import React, {useState} from 'react';
import {NavLink} from 'react-router-dom'
import {Button,Offcanvas,ListGroup} from 'react-bootstrap';

function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        #
      </Button>

      <Offcanvas show={show} onHide={handleClose} style={{backgroundColor:"#4E73DF"}}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title style={{'color':'white'}}>ProjectMurga</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        
          <ListGroup variant="flush" >
            <ListGroup.Item style={{backgroundColor:"#4E73DF"}}><NavLink style={{'color':'white'}} to='/home/entry_update' className={isActive =>"nav-link" + (!isActive ? " unselected" : "")}>Entry_Update</NavLink></ListGroup.Item>
            <ListGroup.Item style={{backgroundColor:"#4E73DF"}}><NavLink style={{'color':'white'}} to='/home/feed_log' className={isActive =>"nav-link" + (!isActive ? " unselected" : "")}>FeedLog</NavLink></ListGroup.Item>
            <ListGroup.Item style={{backgroundColor:"#4E73DF"}}><NavLink style={{'color':'white'}} to='/home/pricing_table' className={isActive =>"nav-link" + (!isActive ? " unselected" : "")}>Pricing_Table</NavLink></ListGroup.Item>
            <ListGroup.Item style={{backgroundColor:"#4E73DF"}}><NavLink style={{'color':'white'}} to='/home/req_history' className={isActive =>"nav-link" + (!isActive ? " unselected" : "")}>Request_History</NavLink></ListGroup.Item>
            <ListGroup.Item style={{backgroundColor:"#4E73DF"}}><NavLink style={{'color':'white'}} to='/home/create_an_order' className={isActive =>"nav-link" + (!isActive ? " unselected" : "")}>Create_An_Order</NavLink></ListGroup.Item>
          </ListGroup>
  
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Example;

<ListGroup.Item><NavLink to='/home/create_an_order' className={isActive =>"nav-link" + (!isActive ? " unselected" : "")}>Create_An_Order</NavLink></ListGroup.Item>
          