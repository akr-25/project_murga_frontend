import React from 'react';
import {Card, Button} from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'

async function handleConfirm(item, pendingRequests, pendingTxns, setPendingRequests, setPendingTxns){
    console.log(item);

    const newOrderStatus = item.order_status === "Pending For Approval" ? "Pending For Completion" : "Completed" ;

    let newData = JSON.stringify({"request_id": item.request_id, "order_status": newOrderStatus});

    let res = await fetch("http://localhost:3001/api/request/update", {
        method: "POST", 
        headers: { "Content-Type": "application/json" },
        body: newData
    }); 

    res = await res.json();

    console.log(res); 

    if(res.message === "success"){
       console.log("res status 200 recieved");
        if(newOrderStatus === "Pending For Completion"){
            let updatedPendingRequests = pendingRequests.filter(checkedItem => item !== checkedItem);
            console.log(updatedPendingRequests);
            setPendingRequests(updatedPendingRequests);

            item.order_status = newOrderStatus;
            setPendingTxns([...pendingTxns, item]);
        }else{
            let updatedPendingTxns = pendingTxns.filter(checkedItem => item !== checkedItem);
            //console.log(updatedPendingTxns);
            setPendingTxns(updatedPendingTxns);
        }
    }
}

async function handleReject(item, pendingRequests, pendingTxns, setPendingRequests, setPendingTxns){
    //console.log(item);
    const newOrderStatus = "Cancelled";

    let res = await fetch("http://localhost:3001/api/request/update", {
        method: "POST", 
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({request_id: item.request_id, order_status: newOrderStatus})
    }); 

    res = await res.json();

    console.log(res); 

    if(res.message === "success"){
        //if(newOrderStatus === "Rejected"){
            let updatedPendingRequests = pendingRequests.filter(checkedItem => item !== checkedItem);
            //console.log(updatedPendingRequests);
            setPendingRequests(updatedPendingRequests);
        //}else{
            let updatedPendingTxns = pendingTxns.filter(checkedItem => item !== checkedItem);
            //console.log(updatedPendingTxns);
            setPendingTxns(updatedPendingTxns);
        //}
    }
}

function aRequest(item, requestType, pendingRequests, pendingTxns, setPendingRequests, setPendingTxns){
    return (
        <Col key={item.request_id}>
            <Card>
                <Card.Body>
                    <Card.Title style={{textAlign: "center"}}><strong>{"Request #" +item.request_id}</strong></Card.Title>
                    <hr></hr>
                    {/* <Card.Subtitle className="mb-2 text-muted">{item.itemType} - {item.quantity}</Card.Subtitle> */}
                    <Card.Text style={{fontWeight:"400", fontSize:"1.2em"}}>
                        Buyer's Name: <strong>{item.User.first_name + " " + item.User.last_name}</strong><br></br>
                        Batch ID: <strong>{item.unit_id}</strong><br></br>
                        Item Type: <strong>{item.type_of_unit}</strong><br></br>
                        Item SubType: <strong>Egg</strong><br></br>
                        Quantity Type -1: <strong>{item.req_no_of_units_type1}</strong><br></br>
                        Quantity Type -2: <strong>{item.req_no_of_units_type2}</strong><br></br>
                        Price: <strong>{item.selling_price_per_unit}</strong>
                    </Card.Text>
                    <div>
                        <Button onClick={() => handleConfirm(item, pendingRequests, pendingTxns, setPendingRequests, setPendingTxns)} variant={requestType === "Request" ? "primary" : "success"}>{requestType === "Request" ? "Approve" : "Complete"}</Button>{'    '}
                        <Button onClick={() => handleReject(item, pendingRequests, pendingTxns, setPendingRequests, setPendingTxns)} variant="danger">Cancel</Button>
                    </div>
                    </Card.Body>
            </Card>
        </Col>
    );
}

function RequestCard(props){
    return(
        <div className="cardBox">
            <Row xs={1} sm={2} md={3} lg={4} className="g-4">
                {props.requestType === "Request" ? props.pendingRequests.map((item) => aRequest(item, props.requestType, props.pendingRequests, props.pendingTxns, props.setPendingRequests, props.setPendingTxns)) : props.pendingTxns.map((item) => aRequest(item, props.requestType, props.pendingRequests, props.pendingTxns, props.setPendingRequests, props.setPendingTxns))}
            </Row>
        </div>   
    )
    
}

export {RequestCard};