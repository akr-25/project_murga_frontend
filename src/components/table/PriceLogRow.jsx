import React from 'react';
import {NavLink} from 'react-router-dom'


function PLRow(props){
    return(
        <tr>
            <td className="tableData">{props.entry.sNo}</td>
            <td className="tableData">{props.entry.batch_id}</td>
            <td className="tableData">{props.entry.price_per_unit}</td>
            <td className="tableData">{props.entry.updateDate}</td>
        </tr>
    );
}

export default PLRow;