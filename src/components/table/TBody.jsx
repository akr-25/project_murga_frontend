import React from 'react';
import {NavLink} from 'react-router-dom'
import Row from './Row';



function CreateRow(entry){
    return(
        <Row key={entry.sNo} entry={entry}></Row>
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