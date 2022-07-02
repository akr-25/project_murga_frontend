import { Navbar, Nav, NavDropdown, Button } from 'react-bootstrap';
import React, {useState} from 'react';
import Sidebar from "./Sidebar";
import {NavLink} from "react-router-dom";

export default function NavigationBar(){
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
    </div>
    )
}
