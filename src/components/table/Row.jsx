import React from 'react';
import {NavLink} from 'react-router-dom'
import {Button} from 'react-bootstrap'
import {generateInvoice} from '../Invoice';

function Row(props){
    return(
        <tr>
            <td className="tableData">{props.sNo}</td>
            <td className="tableData">{props.orderNo}</td>
            <td className="tableData">{props.custName}</td>
            <td className="tableData">{(props.amt !== "-" ? props.amt : "")}</td>
            <td className="tableData">{props.orderDate}</td>
            <td className="tableData">{props.statusUpdateDate}</td>
            <td className="tableData">{props.orderStatus}</td>
            {/* {props.orderStatus !== "Rejected" && props.sNo !== "NO DATA FOUND" ? <td className="tableData"><NavLink to={'/orderDetails/' + props.orderNo}>Click Here</NavLink></td> : <td></td>} */}
            {props.orderStatus !== "Rejected" && props.sNo !== "NO DATA FOUND" ? <td className="tableData"><Button onClick = {()=>generateInvoice(props)}>Click Here</Button></td> : <td></td>}
        </tr>
    );
}

export default Row;