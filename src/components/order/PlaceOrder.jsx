import React, {useState, useEffect} from "react";
import {Form, Container, Button} from "react-bootstrap";





function PlaceOrder(){

    const [orderType, setOrderType] = useState("SELL");
    const [itemType, setItemType] = useState("Chick");
    const [itemSubType, setItemSubType] = useState("Egg");
    const [itemQty, setItemQty] = useState(0);
    const [itemPrice, setItemPrice] = useState(100);


    function handleOrderType(e){
        setOrderType(e.target.value);
    }
    function handleItemType(e){
        setItemType(e.target.value);
    }
    function handleItemSubType(e){
        setItemSubType(e.target.value);
    }
    function handleItemQty(e){
        setItemQty(e.target.value);
    }
    async function placeOrder(){
        const typeOfUnit = itemType.substring(0,1) + itemSubType.substring(0, 1);
    
        const orderData = {
            applicant_id: "7", //Fetch userID after admin enters user details, and put it here
            order_status: "Pending For Approval",
            type_of_unit: typeOfUnit,
            req_no_of_units: itemQty,
            price: itemPrice * itemQty, //! fetch item price when both item type and item sub type are selected
            order_type: orderType
        }

        console.log(orderData);
        
        let res = await fetch("http://localhost:3001/api/request/create", {
            method: "POST", 
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(orderData)
        }); 
    
        res = await res.json();
    
        console.log(res); 
    
        if(res.message === "success"){
            alert("Order Placed Successfully");
            setOrderType("SELL");
            setItemType("Chick");
            setItemSubType("Egg");
            setItemQty(0);
            setItemPrice(100);
        }else{
            console.log(res);
        }
    }
    return (
        <div className="items-div">
            <div className="row">
                <Container className="col-12 col-lg-4 col-md-6 col-sm-6 div-wrapper justify-content-center align-items-center" style={{borderRadius:"10px", marginTop:"100px",marginBottom:"0px", padding:"40px", backgroundColor:"#F8F9FC"}}>
                    <Container className="flex" style={{margin: "0%"}}><h1>Add Items to cart</h1></Container>  
                    <Form>
                        <Form.Group className="mb-3" controlId="itemType">
                            <Form.Label style={{fontWeight:"600", fontSize:"1em"}}>Order Type</Form.Label>
                            <Form.Select value={orderType} onChange={(e) => handleOrderType(e)} style={{fontWeight:"600", fontSize:"1em"}}>
                                <option name="SELL">SELL</option>
                                <option name="BUY">BUY</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="itemType">
                            <Form.Label style={{fontWeight:"600", fontSize:"1em"}}>Item Type</Form.Label>
                            <Form.Select value={itemType} onChange={(e) => handleItemType(e)} style={{fontWeight:"600", fontSize:"1em"}}>
                                <option name="C">Chicken</option>
                                <option name="D">Duck</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="itemSubType">
                            <Form.Label style={{fontWeight:"600", fontSize:"1em"}}>Item Sub-type</Form.Label>
                            <Form.Select value={itemSubType} onChange={(e) => handleItemSubType(e)} style={{fontWeight:"600", fontSize:"1em"}}>
                                <option name="E">Egg</option>
                                <option name="C">Chick</option>
                                <option name="L">Layer</option>
                                <option name="G">Grower</option>
                            </Form.Select>
                        </Form.Group>

                        
                        <Form.Group className="mb-3" controlId="quantity">
                        <Form.Label style={{fontWeight:"600", fontSize:"1em"}}>Quantity</Form.Label>
                        <Form.Control type="number" min={1} max={2} placeholder="" style={{ fontWeight:"600", fontSize:"0.8em"}} value={itemQty} onChange={(e) => handleItemQty(e)}/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="quantity">
                        <Form.Label style={{fontWeight:"600", fontSize:"1.3em"}}>Total Price: Rs. {itemQty * itemPrice} </Form.Label>
                        </Form.Group>
                        
                        <Button type="button" onClick={placeOrder} variant="primary">
                        Place Order
                        </Button>
                    </Form>
                </Container>

            </div>
            
        </div>
    );
}

export default PlaceOrder;