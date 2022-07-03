import React from 'react';
import {NavLink} from 'react-router-dom'


function BLRow(props){
    return(
        <tr>
            <td className="tableData">{props.entry.sNo}</td>
            <td className="tableData">{props.entry.batch_id}</td>
            <td className="tableData">{props.entry.net_balance_type1}</td>
            <td className="tableData">{props.entry.net_balance_type2}</td>
            <td className="tableData">{props.entry.type_of_change}</td>
            <td className="tableData">{props.entry.updateDate}</td>
        </tr>
    );
}

export default BLRow;