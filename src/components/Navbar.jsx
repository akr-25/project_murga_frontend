import { Navbar, Nav, NavDropdown, Button } from 'react-bootstrap';
import React, {useState} from 'react';

function NavbarMod(props){
    
    //startTyping();
    return(
    <div>
        <Navbar className="color-nav" variant="light"
            sticky="top" expand="sm" collapseOnSelect>
            <Navbar.Brand>
            {/* <img src={logo} width="40px" height="40px" />{' '} */}
            </Navbar.Brand>

            <Navbar.Toggle className="coloring" />
            <Navbar.Collapse>
            
            <Nav className="nav-items">
                <Nav.Link href="#home">Home</Nav.Link>
                <NavDropdown title="My Account">
                <NavDropdown.Item href="#account/notifications">
                <img className="dropdownIconImg" src="https://www.pinclipart.com/picdir/big/189-1895786_big-image-transparent-background-notification-icon-clipart.png"></img>Notifications</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#account/logout">
                <img className="dropdownIconImg" src="https://cdn-icons-png.flaticon.com/512/17/17367.png"></img>Logout</NavDropdown.Item>
                </NavDropdown>
            </Nav>
            </Navbar.Collapse>

        </Navbar>
        {/* {props.children} */}
    </div>
    )
}

    export {NavbarMod};