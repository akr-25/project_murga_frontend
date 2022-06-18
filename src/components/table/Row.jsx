import React from 'react';
import {NavLink} from 'react-router-dom'

function Row(props){
    return(
        <tr>
            <td className="tableData">{props.sNo}</td>
            <td className="tableData">{props.orderNo}</td>
            <td className="tableData">{props.custName}</td>
            <td className="tableData">{(props.amt != "-" ? "Rs. " + props.amt : "")}</td>
            <td className="tableData">{props.orderDate}</td>
            <td className="tableData">{props.statusUpdateDate}</td>
            <td className="tableData">{props.orderStatus}</td>
            {props.orderStatus != "Rejected" ? <td className="tableData"><NavLink to={'/orderDetails/' + props.orderNo}>Click Here</NavLink></td> : <td></td>}
        </tr>
    );
}

export default Row;