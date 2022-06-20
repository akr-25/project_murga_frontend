import React, { useState } from "react";
import {NavbarMod as Navbar} from "../../components/Navbar";
import {Button,Form,Container} from 'react-bootstrap';
import Cart from "../../components/order/Cart";
import Image from "react-bootstrap/Image";

function CreateOrder(){
    const [itemType, setItemType] = useState("Chick");
    const [itemSubType, setItemSubType] = useState("Egg");
    const [itemQty, setItemQty] = useState(0);

    const [type,setType]=useState("chick");

    const [cartData, setCartData] = useState([]);
    const [cartDesc, setCartDesc] = useState("Cart is empty");

    function handleItemType(e){
        setItemType(e.target.value);
    }
    function handleItemSubType(e){
        setItemSubType(e.target.value);
    }
    function handleItemQty(e){
        setItemQty(e.target.value);
    }

    function addToCart(){
        let curData = cartData;
        const newItem ={
            itemType: itemType,
            itemSubType: itemSubType,
            itemQty: itemQty,
            itemTotal: 200
        }
        if(newItem.itemQty > 0){
            curData.push(newItem);
        
            console.log(curData);
            setCartData(curData);
        }


        setItemType("Chick");
        setItemSubType("Egg");
        setItemQty(0);
    }

    return (
        <div className="pg">
            <Navbar></Navbar>
            <div className="items-div">
                <div className="row">
                    <Container className="col-12 col-lg-4 col-md-6 col-sm-6 div-wrapper justify-content-center align-items-center" style={{borderRadius:"10px", marginTop:"100px",marginBottom:"0px", padding:"40px", backgroundColor:"#F8F9FC"}}>
                        <Container className="flex" style={{margin: "0%"}}><h1>Add Items to cart</h1></Container>  
                        <Form>
                            <Form.Group className="mb-3" controlId="itemType">
                                <Form.Label style={{fontWeight:"600", fontSize:"1em"}}>Item Type</Form.Label>
                                <Form.Select value={itemType} onChange={handleItemType} style={{fontWeight:"600", fontSize:"1em"}}>
                                    <option name="Chick">Chick</option>
                                    <option name="Duck">Duck</option>
                                </Form.Select>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="itemSubType">
                                <Form.Label style={{fontWeight:"600", fontSize:"1em"}}>Item Sub-type</Form.Label>
                                <Form.Select value={itemSubType} onChange={handleItemSubType} style={{fontWeight:"600", fontSize:"1em"}}>
                                    <option name="Chick">Egg</option>
                                    <option name="Layer">Layer</option>
                                    <option name="Grower">Grower</option>
                                </Form.Select>
                            </Form.Group>

                            {/* change "Food per chick" to "Food per batch" */}
                            <Form.Group className="mb-3" controlId="quantity">
                            <Form.Label style={{fontWeight:"600", fontSize:"1em"}}>Quantity</Form.Label>
                            <Form.Control type="number" min={1} max={2} placeholder="" style={{ fontWeight:"600", fontSize:"0.8em"}} value={itemQty} onChange={handleItemQty}/>
                            </Form.Group>
                            
                            <Button type="button" onClick={addToCart} variant="primary">
                            Add To Cart
                            </Button>
                        </Form>
                    </Container>
                    <Container className="col-12 col-lg-4 col-md-6 col-sm-6 div-wrapper justify-content-center align-items-center form-container" >
                    <Container className="flex"><h1>Your Cart</h1></Container>   
                        {cartData.length ? <Cart cartData={cartData} updateCartData={setCartData}></Cart> : <div style={{alignItems: "center"}}><h3 style={{marginTop: "20px", textAlign: "center"}}>{cartDesc}</h3></div>}
                    </Container>
                </div>
                
                <div>
                    
                </div>
                
            </div>


        </div>
        
    );
}

export default CreateOrder;