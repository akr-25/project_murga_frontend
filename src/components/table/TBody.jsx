import React from 'react';
import {NavLink} from 'react-router-dom'
import Row from './Row';
import BalanceLogRow from './BalanceLogRow';
import FeedLogRow from './FeedLogRow';
import PriceLogRow from './PriceLogRow';



function CreateRow(entry, rowFor){
    if(rowFor === "RH"){
        return(
            <Row key={entry.sNo} entry={entry}></Row>
        )
    }else if(rowFor === "BL"){
        return(
            <BalanceLogRow key={entry.sNo} entry={entry}></BalanceLogRow>
        )
    }else if(rowFor === "FL"){
        return(
            <FeedLogRow key={entry.sNo} entry={entry}></FeedLogRow>
        )
    }else if(rowFor === "PL"){
        return(
            <PriceLogRow key={entry.sNo} entry={entry}></PriceLogRow>
        )
    }
}

function TBody(props){
    return(
        <tbody>
            {props.tableData.map((entry) => CreateRow(entry, props.rowFor))}
        </tbody>
    )
}

export default TBody;