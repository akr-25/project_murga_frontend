import React, {useState, useEffect} from "react";
import {Form, Container, Button} from "react-bootstrap";
import {NavbarMod as Navbar} from "../../components/Navbar";

function Entry(props){
    const [itemType, setItemType] = useState("Chicken");
    const [itemSubType, setItemSubType] = useState("Egg");
    const [itemQtyType1, setItemQtyType1] = useState(0);
    const [itemQtyType2, setItemQtyType2] = useState(0);
    const [itemPrice, setItemPrice] = useState(100);

    function handleItemType(e){
        setItemType(e.target.value);
    }
    function handleItemSubType(e){
        setItemSubType(e.target.value);
    }
    function handleItemQtyType1(e){
        setItemQtyType1(e.target.value);
    }
    function handleItemQtyType2(e){
        setItemQtyType2(e.target.value);
    }
    function handleItemPrice(e){
        setItemPrice(e.target.value);
    }
    async function createNewBatch(){ // here, there is a confusion regarding batch table and price table... Update it later
        let batchData = {
            type: itemType,
            sub_type: itemSubType
        }
        
        let res = await fetch("http://localhost:3001/api/batch/create", {
            method: "POST", 
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(batchData)
        }); 

        res = await res.json();

        console.log(res); 

        if(res.message === "success"){
            //props.setUserID(3); // change it to the user ID fetched from response of above request.
            alert("Batch Added successfully!");
        }else{
            console.log(res);
        }
    }

    
    return (
        <div className="pg">
        <Navbar></Navbar>
            <div className="items-div">
                <div className="row">
                    <Container className="col-12 col-lg-4 col-md-6 col-sm-6 div-wrapper justify-content-center align-items-center" style={{borderRadius:"10px", marginTop:"100px",marginBottom:"0px", padding:"40px", backgroundColor:"#F8F9FC"}}>
                        <Container className="flex form-heading"><h1>Create a New Batch</h1><hr></hr></Container>  
                        <Form>
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
                                    <option name="C">{itemType === "Chicken" ? "Chick" : "Duckling"}</option>
                                    <option name="L">Layer</option>
                                    <option name="G">Grower</option>
                                </Form.Select>
                            </Form.Group>

                            {/* <Form.Group className="mb-3" controlId="type1_quantity">
                                <Form.Label className="form-label">Quantity-Type 1</Form.Label>
                                <Form.Control value={itemQtyType1} onChange={(e) => handleItemQtyType1(e)} type="number" placeholder="0" className="form-control"/>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="type2_quantity">
                                <Form.Label className="form-label">Quantity-Type 2</Form.Label>
                                <Form.Control value={itemQtyType2} onChange={(e) => handleItemQtyType2(e)} type="number" placeholder="0" className="form-control"/>
                            </Form.Group> */}

                            {/* <Form.Group className="mb-3" controlId="price">
                                <Form.Label className="form-label">New Price(in Rs.)</Form.Label>
                                <Form.Control value={itemPrice} onChange={(e) => handleItemPrice(e)} type="number" placeholder="Rs.0" className="form-control"/>
                            </Form.Group> */}

                            <Button onClick={createNewBatch} variant="primary">
                                Create New Batch
                            </Button>
                        </Form>
                    </Container>
                </div>
                
            </div>
        </div>
    );
}

export default Entry;