import React from "react";
import {ListGroup, Card, Button, Row, Col} from "react-bootstrap";

const styles = {
    mediaItem: {
      border: "1px solid black",
      backgroundColor: "#f5f5f5",
      paddingTop: "5px",
      paddingBottom: "5px"
    },
    mediaItemButtons: {
      paddingTop: "5px",
      paddingBottom: "5px"
    }
  };

function remove(item, cartData, setCartData){
    const filterArr = cartData.filter((checkedItem) => {return checkedItem !== item});
    setCartData(filterArr);

    console.log(filterArr);
    
}

function LisItems(item, cartData, setCartData){
    return(
        item.itemQty ?
        <Card className="cart-item">
        <p>{item.itemSubType + ' (' + item.itemType + ')'}</p>
                <Row>
                  <Col xs={6}>
                    <strong>Rs. {item.itemTotal}</strong>
                  </Col>
                  <Col xs={6}>{item.itemQty} piece</Col>
                </Row>

                <Row style={styles.mediaItemButtons}>
                  {/* <Col xs={6}>
                    <Button variant="primary" size="sm">
                      Details
                    </Button>
                  </Col> */}
                  <Col xs={6}>
                    <Button onClick={() => remove(item, cartData, setCartData)} variant="danger" size="sm">
                      Delete
                    </Button>
                  </Col>
                </Row>
        </Card>
        : <div></div>
    //     <ListGroup.Item>Item - {item.itemType + item.itemSubType} Qty - {item.qty} Price - {item.itemTotal}</ListGroup.Item>
    );
}   

function Cart(props){
    return (
        <div className="cart">
            <Card style={{ width: '18rem' }}>
                <ListGroup variant="flush">
                    {props.cartData.map((item) => LisItems(item, props.cartData, props.updateCartData))}
                </ListGroup>
            </Card>
        </div>
    );
}

export default Cart;