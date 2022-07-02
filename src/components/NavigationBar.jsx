import { Navbar, Nav, NavDropdown, Button } from 'react-bootstrap';
import React, {useState} from 'react';
import Sidebar from "./Sidebar";
import { NavLink, useNavigate} from "react-router-dom";
import { useAuth } from '../contexts/AuthContext';
export default function NavigationBar(){
    const navigate = useNavigate() 
    const {signout} = useAuth()
    const [error, setError] = useState('')

    async function handleLogOut(){
        try {
            setError('')
            await signout()
            navigate("/login")
        }
        catch {
            setError("failed to sign out")
        }
    }

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
                <NavLink className="navbar-item" onClick={handleLogOut} to="/login">Logout</NavLink>
            </Nav>
            </Navbar.Collapse>

        </Navbar>
    </div>
    )
}
