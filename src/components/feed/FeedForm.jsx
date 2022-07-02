import React, {useState, useEffect} from "react";
import {Form, Container, Button} from "react-bootstrap";

function FeedForm(props){
    const [itemType, setItemType] = useState("-");
    const [itemSubType, setItemSubType] = useState("-");
    const [foodQty, setFoodQty] = useState(0);
    const [foodPrice, setFoodPrice] = useState(0);

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
    function handleFoodQty(e){
        setFoodQty(e.target.value);
    }
    function handleFoodPrice(e){
        setFoodPrice(e.target.value);
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
    


    async function enterFeedLog(){ // update corresonding routes when ready
        try{
            let feedData = {
                unit_id: batchSelected,
                rate: foodQty,
                cost_per_gram: foodPrice
            }
            
            let res = await fetch("http://localhost:3001/api/feedConsumptionLog/create", {
                method: "POST", 
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(feedData)
            }); 
    
            res = await res.json();
    
            console.log(res); 
    
            if(res.message === "success"){
                alert("Feed data logged successfully");
            }else{
                console.log(res);
            }
        }
        catch(err){
            console.log(err);
        }
    }

    function ListABatch(batch){
        //console.log(batch);
        return (
            <option key={batch} name={batch}>{batch}</option>
        );
    }

    
    return (
        <div className="items-div">
            <div className="row">
                <Container className="col-12 col-lg-4 col-md-6 col-sm-6 div-wrapper justify-content-center align-items-center" style={{borderRadius:"10px", marginTop:"100px",marginBottom:"0px", padding:"40px", backgroundColor:"#F8F9FC"}}>
                    <Container className="flex form-heading"><h1>Feed-Log</h1><hr></hr></Container>  
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

                        <Form.Group className="mb-3" controlId="food_quantity">
                            <Form.Label className="form-label">Food per Unit (in grams)</Form.Label>
                            <Form.Control value={foodQty} onChange={(e) => handleFoodQty(e)} type="number" placeholder="0" className="form-control"/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="price">
                            <Form.Label className="form-label">Price per gram(in Rs.)</Form.Label>
                            <Form.Control value={foodPrice} onChange={(e) => handleFoodPrice(e)} type="number" placeholder="Rs.0" className="form-control"/>
                        </Form.Group>

                        <Button onClick={enterFeedLog} variant="primary">
                            Submit FeedLog
                        </Button>
                    </Form>
                </Container>
            </div>
            
        </div>
    );
}

export default FeedForm;