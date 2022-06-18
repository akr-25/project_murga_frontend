import React, { useState } from "react";
import {NavbarMod as Navbar} from "../../components/Navbar";
import {Button,Form,Container} from 'react-bootstrap';

function CreateOrder(){
    const [itemType, setItemType] = useState("Chick");
    const [itemSubType, setItemSubType] = useState("Egg");

    function handleChange(e){
        setItemType(e.target.value);
        setItemSubType(e.target.value);
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="items-div">
                <Container className="col-12 col-lg-4 col-md-6 col-sm-6 div-wrapper justify-content-center align-items-center" style={{borderRadius:"10px", marginTop:"100px",marginBottom:"0px", padding:"40px", backgroundColor:"#F8F9FC"}}>
                    <Container className="flex" style={{margin: "0%"}}><h1>Add Items to cart</h1></Container>  
                    <Form>
                        <Form.Group className="mb-3" controlId="itemType">
                            <Form.Label style={{fontWeight:"600", fontSize:"1em"}}>Item Type</Form.Label>
                            <Form.Select value={itemType} onChange={handleChange} style={{fontWeight:"600", fontSize:"1em"}}>
                                <option name="Chick">Chick</option>
                                <option name="Duck">Duck</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="itemSubType">
                            <Form.Label style={{fontWeight:"600", fontSize:"1em"}}>Item Sub-type</Form.Label>
                            <Form.Select value={itemSubType} onChange={handleChange} style={{fontWeight:"600", fontSize:"1em"}}>
                                <option name="Chick">Egg</option>
                                <option name="Layer">Layer</option>
                                <option name="Grower">Grower</option>
                            </Form.Select>
                        </Form.Group>

                        {/* change "Food per chick" to "Food per batch" */}
                        <Form.Group className="mb-3" controlId="quantity">
                        <Form.Label style={{fontWeight:"600", fontSize:"1em"}}>Quantity</Form.Label>
                        <Form.Control type="number" min={0} max={2} placeholder="" style={{ fontWeight:"600", fontSize:"0.8em"}}/>
                        </Form.Group>
                        
                        <Button variant="primary" type="submit">
                        Add To Cart
                        </Button>
                    </Form>
                </Container>
            </div>


        </div>
        
    );
}

export default CreateOrder;