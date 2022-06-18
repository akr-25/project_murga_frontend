import React from 'react';
import {Card, Button} from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'

function RequestCard(){
    return(
        <div className="cardBox">
            <Row xs={1} sm={2} md={3} lg={4} className="g-4">
            {Array.from({ length: 4 }).map((_, idx) => (
                <Col>
                <Card>
                    <Card.Body>
                        <Card.Title>Request #12</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Item - Quantity</Card.Subtitle>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <div>
                            <Button variant="success">Approve</Button>{'    '}
                            <Button variant="danger">Reject</Button>
                        </div>
                        </Card.Body>
                </Card>
                </Col>
            ))}
            </Row>
        </div>

        
        
    )
    
}

export {RequestCard};