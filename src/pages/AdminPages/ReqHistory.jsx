import React, { useState } from "react";
import "../../App.css";
import {NavLink} from 'react-router-dom'
import {Table} from 'react-bootstrap'
import {NavbarMod as Navbar} from '../../components/Navbar';

function ReqHistory() {
  const [inactive, setInactive] = useState(true);

  return (
    <div className="App">
      <Navbar></Navbar>
      <h1>Request req_history</h1>
      <div style={{padding: "40px"}}>
        <Table striped bordered hover responsive>
          <thead style={{backgroundColor:"#e4e0fa"}}>
            <tr>
              <th>S. No.</th>
              <th>Order No.</th>
              <th>Customer Name</th>
              <th>Order Amount</th>
              <th>Order Date</th>
              <th>Status Updated On</th>
              <th>Order Status</th>
              <th>Order Details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>102934</td>
              <td>Rosy</td>
              <td>Rs. 1432</td>
              <td>28-05-2022</td>
              <td>29-05-2002</td>
              <td></td>
              <td><NavLink to='/orderDetails/102934'>Click Here</NavLink></td>
            </tr>
            <tr>
              <td>2</td>
              <td>102935</td>
              <td>Eeshu</td>
              <td>Rs. 1432</td>
              <td>28-05-2022</td>
              <td>-</td>
              <td></td>
              <td><NavLink to='/orderDetails/102935'>Click Here</NavLink></td>
            </tr>
            <tr>
              <td>3</td>
              <td>-</td>
              <td>Aman</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td></td>
              <td><NavLink to='/orderDetails/000000'>Click Here</NavLink></td>
            </tr>
            <tr>
              <td>2</td>
              <td>102935</td>
              <td>Eeshu</td>
              <td>Rs. 1432</td>
              <td>28-05-2022</td>
              <td>-</td>
              <td></td>
              <td><NavLink to='/orderDetails/102935'>Click Here</NavLink></td>
            </tr>
            <tr>
              <td>2</td>
              <td>102935</td>
              <td>Eeshu</td>
              <td>Rs. 1432</td>
              <td>28-05-2022</td>
              <td>-</td>
              <td></td>
              <td><NavLink to='/orderDetails/102935'>Click Here</NavLink></td>
            </tr>
            <tr>
              <td>2</td>
              <td>102935</td>
              <td>Eeshu</td>
              <td>Rs. 1432</td>
              <td>28-05-2022</td>
              <td>-</td>
              <td></td>
              <td><NavLink to='/orderDetails/102935'>Click Here</NavLink></td>
            </tr>
            <tr>
              <td>2</td>
              <td>102935</td>
              <td>Eeshu</td>
              <td>Rs. 1432</td>
              <td>28-05-2022</td>
              <td>-</td>
              <td></td>
              <td><NavLink to='/orderDetails/102935'>Click Here</NavLink></td>
            </tr>
            <tr>
              <td>2</td>
              <td>102935</td>
              <td>Eeshu</td>
              <td>Rs. 1432</td>
              <td>28-05-2022</td>
              <td>-</td>
              <td></td>
              <td><NavLink to='/orderDetails/102935'>Click Here</NavLink></td>
            </tr>
            <tr>
              <td>2</td>
              <td>102935</td>
              <td>Eeshu</td>
              <td>Rs. 1432</td>
              <td>28-05-2022</td>
              <td>-</td>
              <td></td>
              <td><NavLink to='/orderDetails/102935'>Click Here</NavLink></td>
            </tr>
            <tr>
              <td>2</td>
              <td>102935</td>
              <td>Eeshu</td>
              <td>Rs. 1432</td>
              <td>28-05-2022</td>
              <td>-</td>
              <td></td>
              <td><NavLink to='/orderDetails/102935'>Click Here</NavLink></td>
            </tr>
            <tr>
              <td>2</td>
              <td>102935</td>
              <td>Eeshu</td>
              <td>Rs. 1432</td>
              <td>28-05-2022</td>
              <td>-</td>
              <td></td>
              <td><NavLink to='/orderDetails/102935'>Click Here</NavLink></td>
            </tr>
          </tbody>
        </Table>
      </div>
      
    </div>
  );
}

export default ReqHistory;
