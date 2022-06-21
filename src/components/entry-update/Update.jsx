import React, {useState, useEffect} from "react";
import {Form, Container, Button} from "react-bootstrap";
import {NavbarMod as Navbar} from "../../components/Navbar";

function Update(props){
    const [itemType, setItemType] = useState("Chicken");
    const [itemSubType, setItemSubType] = useState("Egg");
    const [itemQtyType1, setItemQtyType1] = useState(0);
    const [itemQtyType2, setItemQtyType2] = useState(0);
    const [itemPrice, setItemPrice] = useState(100);

    const [allBatches, setAllBatches] = useState([
    {
        batch_id: "CE-21",
        is_active: "Y"
    },
    {
        batch_id: "CC-42",
        is_active: "Y"
    },
    {
        batch_id: "DC-222",
        is_active: "Y"
    },
    {
        batch_id: "CE-211",
        is_active: "Y"
    },
    {
        batch_id: "DG-25",
        is_active: "Y"
    },
]);
    const [batchesToDisplay, setBatchesToDisplay] = useState([]);

    async function handleItemType(e){
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
    function handleBatchList(e){
        //if(itemType != "" && itemSubType != ""){
            const itemTypeCode = itemType.substring(0, 1);
            const itemSubTypeCode = itemSubType.substring(0, 1);

            const itemCode = itemTypeCode + itemSubTypeCode;
            console.log(itemCode);

            
            const extractedBatchesObject = allBatches.filter(batch => batch.batch_id.substring(0, 2) === itemCode);
            const extractedBatches = extractedBatchesObject.map(item => item.batch_id);

            setBatchesToDisplay(extractedBatches);
        //}
    }

    // useEffect(() => {
    //     async function fetchActiveBatches(){ 

    //         let res = await fetch("http://localhost:3001/api/batch/", {
    //             method: "GET",
    //         }); 
    
    //         res = await res.json();
    
    //         console.log(res); 

    //         if(res.message === "success"){
    //             setAllBatches(res);
    //         }else{
    //             console.log(res);
    //         }
    //     }
    //     try{
    //         fetchActiveBatches();
    //     }
    //     catch(err){
    //       console.log(err); 
    //     }
    //   }, []);
    

    async function updateBatch(){ // here, there is a confusion regarding batch table and price table... Update it later
        let batchData = {
            is_active: ""
        }
        
        let res = await fetch("http://localhost:3001/api/batch/create", {
            method: "POST", 
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(batchData)
        }); 

        res = await res.json();

        console.log(res); 

        // if(res.message === "success"){
        //     props.setUserID(3); // change it to the user ID fetched from response of above request.
        //     alert("User Fetched Successfully");
        // }else{
        //     console.log(res);
        // }
    }

    function ListABatch(batch){
        console.log(batch);
        return (
            <option name={batch}>{batch}</option>
        );
    }

    
    return (
        <div className="pg">
        <Navbar></Navbar>
            <div className="items-div">
                <div className="row">
                    <Container className="col-12 col-lg-4 col-md-6 col-sm-6 div-wrapper justify-content-center align-items-center" style={{borderRadius:"10px", marginTop:"100px",marginBottom:"0px", padding:"40px", backgroundColor:"#F8F9FC"}}>
                        <Container className="flex" style={{margin: "0%"}}><h1 style={{marginBottom: "15px"}}>Create New entry</h1></Container>  
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
                                    <option name="C">Chick</option>
                                    <option name="L">Layer</option>
                                    <option name="G">Grower</option>
                                </Form.Select>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="batchesToDisplay">
                                <Form.Label style={{fontWeight:"600", fontSize:"1em"}}>Active Batches</Form.Label>
                                <Form.Select onClick={handleBatchList} style={{fontWeight:"600", fontSize:"1em"}}>
                                    {batchesToDisplay.map(ListABatch)}
                                </Form.Select>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="type1_quantity">
                                <Form.Label className="form-label">Quantity-Type 1</Form.Label>
                                <Form.Control value={itemQtyType1} onChange={(e) => handleItemQtyType1(e)} type="number" placeholder="0" className="form-control"/>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="type2_quantity">
                                <Form.Label className="form-label">Quantity-Type 2</Form.Label>
                                <Form.Control value={itemQtyType2} onChange={(e) => handleItemQtyType2(e)} type="number" placeholder="0" className="form-control"/>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="price">
                                <Form.Label className="form-label">New Price(in Rs.)</Form.Label>
                                <Form.Control value={itemPrice} onChange={(e) => handleItemPrice(e)} type="number" placeholder="Rs.0" className="form-control"/>
                            </Form.Group>

                            <Button onClick={updateBatch} variant="primary">
                                Update Entry
                            </Button>
                        </Form>
                    </Container>
                </div>
                
            </div>
        </div>
    );
}

export default Update;