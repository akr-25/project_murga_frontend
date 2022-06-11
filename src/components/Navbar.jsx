import { Navbar, Nav, NavDropdown, Button } from 'react-bootstrap';
import React, {useState} from 'react';
import Sidebar from "./Sidebar-off-canvas";

function NavbarMod(props){
    
    //startTyping();
    return(
    <div>
        <Navbar className="color-nav" variant="light"
            sticky="top" expand="sm" collapseOnSelect>
            <Navbar.Brand>
            {/* <img src={logo} width="40px" height="40px" />{' '} */}
            <Sidebar/>
            </Navbar.Brand>

            <Navbar.Toggle className="coloring" />
            <Navbar.Collapse>
            
            <Nav className="nav-items">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#logout">Logout</Nav.Link>
            </Nav>
            </Navbar.Collapse>

        </Navbar>
        {/* {props.children} */}
    </div>
    )
}

    export {NavbarMod};