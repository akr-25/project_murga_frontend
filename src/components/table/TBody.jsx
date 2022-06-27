import React from 'react';
import {NavLink} from 'react-router-dom'
import Row from './Row';



function CreateRow(entry){
    return(
        <Row key={entry.sNo} sNo={entry.sNo} orderNo={entry.orderNo} custName={entry.custName}  amt={entry.amt} orderDate={entry.orderDate} statusUpdateDate={entry.statusUpdateDate} orderStatus= {entry.orderStatus}></Row>
    )
}

function TBody(props){
    return(
        <tbody>
            {props.tableData.map(CreateRow)}
        </tbody>
    )
}

export default TBody;