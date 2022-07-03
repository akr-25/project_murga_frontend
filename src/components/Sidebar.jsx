import React, {useState} from 'react';
import {NavLink} from 'react-router-dom'
import {Button,Offcanvas,ListGroup} from 'react-bootstrap';

function Sidebar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        ###
      </Button>

      <Offcanvas show={show} onHide={handleClose} style={{backgroundColor:"#4E73DF"}}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title style={{'color':'white'}}>ProjectMurga</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        
          <ListGroup variant="flush" >
            <ListGroup.Item style={{backgroundColor:"#4E73DF"}}><NavLink style={{'color':'white', fontSize: "18px"}} to=''  onClick={handleClose} className={isActive =>"nav-link" + (!isActive ? " unselected" : "")}>Home</NavLink></ListGroup.Item>
            <ListGroup.Item style={{backgroundColor:"#4E73DF"}}><NavLink style={{'color':'white', fontSize: "18px"}} to='entry_update'  onClick={handleClose} className={isActive =>"nav-link" + (!isActive ? " unselected" : "")}>Entry / Update</NavLink></ListGroup.Item>
            <ListGroup.Item style={{backgroundColor:"#4E73DF"}}><NavLink style={{'color':'white', fontSize: "18px"}} to='feed_log'  onClick={handleClose} className={isActive =>"nav-link" + (!isActive ? " unselected" : "")}>FeedLog</NavLink></ListGroup.Item>
            <ListGroup.Item style={{backgroundColor:"#4E73DF"}}><NavLink style={{'color':'white', fontSize: "18px"}} to='pricing_table'  onClick={handleClose} className={isActive =>"nav-link" + (!isActive ? " unselected" : "")}>PriceLog</NavLink></ListGroup.Item>
            <ListGroup.Item style={{backgroundColor:"#4E73DF"}}><NavLink style={{'color':'white', fontSize: "18px"}} to='req_history'  onClick={handleClose} className={isActive =>"nav-link" + (!isActive ? " unselected" : "")}>Request History</NavLink></ListGroup.Item>
            <ListGroup.Item style={{backgroundColor:"#4E73DF"}}><NavLink style={{'color':'white', fontSize: "18px"}} to='create_an_order'  onClick={handleClose} className={isActive =>"nav-link" + (!isActive ? " unselected" : "")}>Create An Order</NavLink></ListGroup.Item>
          </ListGroup>
  
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Sidebar;


          