import React from 'react';
import {Card, Button} from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'

async function handleConfirm(item, pendingRequests, pendingTxns, setPendingRequests, setPendingTxns){
    //console.log(item);
    const newOrderStatus = item.order_status === "Pending For Approval" ? "Approved" : "Completed" ;

    let res = await fetch("http://localhost:3001/api/request/update", {
        method: "POST", 
        data: {request_id: item.requestId, order_status: newOrderStatus}
    }); 

    res = await res.json();

    if(res.status == 200){
        if(newOrderStatus === "Approved"){
            let updatedPendingRequests = pendingRequests.filter(checkedItem => item !== checkedItem);
            //console.log(updatedPendingRequests);
            setPendingRequests(updatedPendingRequests);

            item.order_status = newOrderStatus;
            let updatedPendingTxns = pendingTxns;
            updatedPendingTxns.push(item);
            setPendingTxns(updatedPendingTxns);
        }else{
            let updatedPendingTxns = pendingTxns.filter(checkedItem => item !== checkedItem);
            //console.log(updatedPendingTxns);
            setPendingTxns(updatedPendingTxns);
        }
        
    }
}

async function handleReject(item, pendingRequests, pendingTxns, setPendingRequests, setPendingTxns){
    //console.log(item);
    const newOrderStatus = item.order_status === "Pending For Approval" ? "Rejected" : "Cancelled" ;

    let res = await fetch("http://localhost:3001/api/request/update", {
        method: "POST", 
        data: {request_id: item.requestId, order_status: newOrderStatus}
    }); 

    res = await res.json();

    if(res.status == 200){
        if(newOrderStatus === "Rejected"){
            let updatedPendingRequests = pendingRequests.filter(checkedItem => item !== checkedItem);
            //console.log(updatedPendingRequests);
            setPendingRequests(updatedPendingRequests);
        }else{
            let updatedPendingTxns = pendingTxns.filter(checkedItem => item !== checkedItem);
            //console.log(updatedPendingTxns);
            setPendingTxns(updatedPendingTxns);
        }
    }
}
    

function aRequest(item, requestType, pendingRequests, pendingTxns, setPendingRequests, setPendingTxns){
    return (
        <Col key={item.requestId}>
            <Card>
                <Card.Body>
                    <Card.Title style={{textAlign: "center"}}><strong>{requestType + "#" +item.requestId}</strong></Card.Title>
                    <hr></hr>
                    {/* <Card.Subtitle className="mb-2 text-muted">{item.itemType} - {item.quantity}</Card.Subtitle> */}
                    <Card.Text style={{fontWeight:"400", fontSize:"1.2em"}}>
                        Item Type: <strong>Chick</strong><br></br>
                        Item SubType: <strong>Egg</strong><br></br>
                        Quantity: <strong>10</strong><br></br>
                        Price: <strong>Rs. 200</strong>
                    </Card.Text>
                    <div>
                        <Button onClick={() => handleConfirm(item, pendingRequests, pendingTxns, setPendingRequests, setPendingTxns)} variant={requestType === "Request" ? "primary" : "success"}>{requestType === "Request" ? "Approve" : "Complete"}</Button>{'    '}
                        <Button onClick={() => handleReject(item, pendingRequests, pendingTxns, setPendingRequests, setPendingTxns)} variant="danger">{requestType === "Request" ? "Reject" : "Cancel"}</Button>
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