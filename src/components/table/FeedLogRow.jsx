import React from 'react';
import {NavLink} from 'react-router-dom'


function FLRow(props){
    return(
        <tr>
            <td className="tableData">{props.entry.sNo}</td>
            <td className="tableData">{props.entry.batch_id}</td>
            <td className="tableData">{props.entry.rate}</td>
            <td className="tableData">{props.entry.cost_per_gram}</td>
            <td className="tableData">{props.entry.updateDate}</td>
        </tr>
    );
}

export default FLRow;