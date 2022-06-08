import React from 'react';
import {NavLink} from 'react-router-dom'
import Row from './Row';

let reqHistoryData =[
{
    sNo: "1",
    orderNo: "102934",
    custName: "Rosy",
    amt: "1432",
    orderDate: "28-05-2022",
    statusUpdateDate: "29-05-2022",
    orderStatus: "Approved"
},
{
    sNo: "2",
    orderNo: "102935",
    custName: "Eeshu",
    amt: "1432",
    orderDate: "28-05-2022",
    statusUpdateDate: "29-05-2022",
    orderStatus: "Pending"
},
{
    sNo: "3",
    orderNo: "-",
    custName: "Aman",
    amt: "-",
    orderDate: "-",
    statusUpdateDate: "-",
    orderStatus: "Rejected"
},
{
    sNo: "1",
    orderNo: "102934",
    custName: "Rosy",
    amt: "1432",
    orderDate: "28-05-2022",
    statusUpdateDate: "29-05-2022",
    orderStatus: "Approved"
},
{
    sNo: "2",
    orderNo: "102935",
    custName: "Eeshu",
    amt: "1432",
    orderDate: "28-05-2022",
    statusUpdateDate: "29-05-2022",
    orderStatus: "Pending"
},
{
    sNo: "3",
    orderNo: "-",
    custName: "Aman",
    amt: "-",
    orderDate: "-",
    statusUpdateDate: "-",
    orderStatus: "Rejected"
},
{
    sNo: "1",
    orderNo: "102934",
    custName: "Rosy",
    amt: "1432",
    orderDate: "28-05-2022",
    statusUpdateDate: "29-05-2022",
    orderStatus: "Approved"
},
{
    sNo: "2",
    orderNo: "102935",
    custName: "Eeshu",
    amt: "1432",
    orderDate: "28-05-2022",
    statusUpdateDate: "29-05-2022",
    orderStatus: "Pending"
},
{
    sNo: "3",
    orderNo: "-",
    custName: "Aman",
    amt: "-",
    orderDate: "-",
    statusUpdateDate: "-",
    orderStatus: "Rejected"
},
{
    sNo: "1",
    orderNo: "102934",
    custName: "Rosy",
    amt: "1432",
    orderDate: "28-05-2022",
    statusUpdateDate: "29-05-2022",
    orderStatus: "Approved"
},
{
    sNo: "2",
    orderNo: "102935",
    custName: "Eeshu",
    amt: "1432",
    orderDate: "28-05-2022",
    statusUpdateDate: "29-05-2022",
    orderStatus: "Pending"
},
{
    sNo: "3",
    orderNo: "-",
    custName: "Aman",
    amt: "-",
    orderDate: "-",
    statusUpdateDate: "-",
    orderStatus: "Rejected"
}
];

function CreateRow(entry){
    return(
        <Row sNo={entry.sNo} orderNo={entry.orderNo} custName={entry.custName}  amt={entry.amt} orderDate={entry.orderDate} statusUpdateDate={entry.statusUpdateDate} orderStatus= {entry.orderStatus}></Row>
    )
}

function TBody(){
    return(
        <tbody>
            {reqHistoryData.map(CreateRow)}
        </tbody>
    )
}

export default TBody;