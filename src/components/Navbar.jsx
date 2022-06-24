import { Navbar, Nav, NavDropdown, Button } from 'react-bootstrap';
import React, {useState} from 'react';
import Sidebar from "./Sidebar-off-canvas";
import {NavLink} from "react-router-dom";

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
                <NavLink className="navbar-item" to="/logout">Logout</NavLink>
            </Nav>
            </Navbar.Collapse>

        </Navbar>
        {/* {props.children} */}
    </div>
    )
}

    export {NavbarMod};