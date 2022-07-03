import React from 'react';
import {NavLink} from 'react-router-dom'

function Row(props){
    return(
        <tr>
            <td className="tableData">{props.entry.sNo}</td>
            <td className="tableData">{props.entry.orderNo.substring(0, 12) + "..."}</td>
            <td className="tableData">{props.entry.custName}</td>
            <td className="tableData">{(props.entry.amt !== "-" ? props.entry.amt : "")}</td>
            <td className="tableData">{props.entry.orderDate}</td>
            <td className="tableData">{props.entry.statusUpdateDate}</td>
            <td className="tableData">{props.entry.orderStatus}</td>
            {props.entry.orderStatus !== "Rejected" && props.entry.sNo !== "NO DATA FOUND" ? <td className="tableData"><NavLink to={'/orderDetails/' + props.entry.orderNo}>Click Here</NavLink></td> : <td></td>}
        </tr>
    );
}

export default Row;