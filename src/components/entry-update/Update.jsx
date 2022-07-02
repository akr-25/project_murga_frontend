import React, {useState, useEffect} from "react";
import {Form, Container, Button} from "react-bootstrap";

function Update(props){
    const [itemType, setItemType] = useState("-");
    const [itemSubType, setItemSubType] = useState("-");
    const [itemQtyType1, setItemQtyType1] = useState("");
    const [itemQtyType2, setItemQtyType2] = useState("");
    const [typeOfChange, setTypeOfChange] = useState("");

    const [allBatches, setAllBatches] = useState([]);

//     const tp = [
//     {
//         batch_id: "CE-21",
//         is_active: "Y"
//     },
//     {
//         batch_id: "CC-42",
//         is_active: "Y"
//     },
//     {
//         batch_id: "DC-222",
//         is_active: "Y"
//     },
//     {
//         batch_id: "CE-211",
//         is_active: "Y"
//     },
//     {
//         batch_id: "DG-25",
//         is_active: "Y"
//     },
// ];
    const [batchesToDisplay, setBatchesToDisplay] = useState([]);
    const [batchSelected, setBatchSelected] = useState("");
    
    function handleItemType(e){
        setItemType(e.target.value);
        handleBatchList(e.target.value, itemSubType);
    }
    function handleItemSubType(e){
        setItemSubType(e.target.value);
        handleBatchList(itemType, e.target.value);
    }
    function handleItemQtyType1(e){
        setItemQtyType1(e.target.value);
    }
    function handleItemQtyType2(e){
        setItemQtyType2(e.target.value);
    }
    function handleTypeOfChange(e){
        setTypeOfChange(e.target.value);
    }
    function handleBatchSelected(e){
        console.log(e.target.value);
        setBatchSelected(e.target.value);
    }
    
    function handleBatchList(item, subItem){
        let itemTypeCode = item.substring(0, 1);
        let itemSubTypeCode = subItem.substring(0, 1);
        const itemCode = itemTypeCode + itemSubTypeCode;

        console.log(allBatches);

        const extractedBatchesObject = allBatches.filter(batch => batch.batch_id.substring(0, 2) === itemCode);
        const extractedBatches = extractedBatchesObject.map(item => item.batch_id);

        setBatchesToDisplay(extractedBatches);
        extractedBatches.length > 0 ? setBatchSelected(extractedBatches[0]) : setBatchSelected("");
    }

    async function prevBalanceLog(){ // here, there is a confusion regarding batch table and price table... Update it later
        let batchData = {
            unit_id: batchSelected,
            net_balance_type1: parseInt(itemQtyType1),
            net_balance_type2: parseInt(itemQtyType2),
            type_of_change: typeOfChange
        }

        let res = await fetch("http://localhost:3001/api/balanceLog/create", {
            method: "POST", 
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(batchData)
        }); 

        res = await res.json();

        console.log(res); 

        if(res.message === "success"){
            alert("Data updated successfully");
        }else{
            console.log(res);
        }
    }

    useEffect(() => {
        async function fetchActiveBatches(){ 
            try{
                let res = await fetch("http://localhost:3001/api/batch/fetch", {
                    method: "GET",
                }); 
        
                res = await res.json();
        
                console.log("YES");
                console.log(res); 

                if(res.message === "success"){
                    setAllBatches(res.data.batch);
                    handleBatchList("Chicken", "Egg");
                }else{
                    console.log(res);
                }
            }catch(err){
                console.log(err); 
            }
            
        }
        fetchActiveBatches();
      },[]);
    
    

    async function updateBatch(){ // here, there is a confusion regarding batch table and price table... Update it later
        try{
            let batchData = {
                unit_id: batchSelected,
                net_balance_type1: parseInt(itemQtyType1),
                net_balance_type2: parseInt(itemQtyType2),
                type_of_change: typeOfChange
            }

            let res = await fetch("http://localhost:3001/api/balanceLog/create", {
                method: "POST", 
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(batchData)
            }); 

            res = await res.json();

            console.log(res); 

            if(res.message === "success"){
                alert("Data updated successfully");
            }else{
                console.log(res);
            }
        }
        catch(err){
            console.log(err);
        }
            
    }

    function ListABatch(batch){
        return (
            <option key={batch} name={batch} value={batch}>{batch}</option>
        );
    }

    
    return (
        <div className="pg">
            <div className="items-div">
                <div className="row">
                    <Container className="col-12 col-lg-4 col-md-6 col-sm-6 div-wrapper justify-content-center align-items-center" style={{borderRadius:"10px", marginTop:"100px",marginBottom:"0px", padding:"40px", backgroundColor:"#F8F9FC"}}>
                        <Container className="flex form-heading"><h1>Update An Entry</h1><hr></hr></Container>  
                        <Form>
                        <Form.Group className="mb-3" controlId="itemType">
                                <Form.Label style={{fontWeight:"600", fontSize:"1em"}}>Item Type</Form.Label>
                                <Form.Select value={itemType} onChange={(e) => handleItemType(e)} style={{fontWeight:"600", fontSize:"1em"}}>
                                    <option name="-">Select Item Type</option>
                                    <option name="C">Chicken</option>
                                    <option name="D">Duck</option>
                                </Form.Select>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="itemSubType">
                                <Form.Label style={{fontWeight:"600", fontSize:"1em"}}>Item Sub-type</Form.Label>
                                <Form.Select value={itemSubType} onChange={(e) => handleItemSubType(e)} style={{fontWeight:"600", fontSize:"1em"}}>
                                    <option name="-">Select Item SubType</option>
                                    <option name="E">Egg</option>
                                    <option name="C">{itemType === "Chicken" ? "Chick" : "Duckling"}</option>
                                    <option name="L">Layer</option>
                                    <option name="G">Grower</option>
                                </Form.Select>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="batchesToDisplay">
                                <Form.Label style={{fontWeight:"600", fontSize:"1em"}}>Active Batches</Form.Label>
                                <Form.Select value={batchSelected} onChange={handleBatchSelected} style={{fontWeight:"600", fontSize:"1em"}}>
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
                                <Form.Label className="form-label">Type of change / Reason for Update</Form.Label>
                                <Form.Control value={typeOfChange} onChange={(e) => handleTypeOfChange(e)} type="text" placeholder="e.g Item sold" className="form-control"/>
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