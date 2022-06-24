import React, {useState, useEffect} from "react";
import {Form, Container, Button} from "react-bootstrap";





function PlaceOrder(){

    const [orderType, setOrderType] = useState("SELL");
    const [itemType, setItemType] = useState("-");
    const [itemSubType, setItemSubType] = useState("-");
    const [itemQty, setItemQty] = useState(0);
    const [itemPrice, setItemPrice] = useState();
    const [itemSellPrice, setItemSellPrice] = useState(100);
    const [allPrices, setAllPrices] = useState([]);

    const [allBatches, setAllBatches] = useState([]);

    const [batchesToDisplay, setBatchesToDisplay] = useState([]);
    const [batchSelected, setBatchSelected] = useState("");
    
    function handleOrderType(e){
        setOrderType(e.target.value);
    }
    function handleItemType(e){
        setItemType(e.target.value);
        handleBatchList(e.target.value, itemSubType);
    }
    function handleItemSubType(e){
        setItemSubType(e.target.value);
        handleBatchList(itemType, e.target.value);
    }
    function handleItemQty(e){
        setItemQty(e.target.value);
    }
    function handleItemSellPrice(e){
        setItemSellPrice(e.target.value);
    }
    function handleBatchSelected(e){
        //console.log(e.target.value);
        setBatchSelected(e.target.value);
        fetchPrice(e.target.value);
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

    async function fetchPrice(batchCode){
        console.log(batchCode);
        let res = await fetch("http://localhost:3001/api/priceLog/fetch/" + batchCode, {
            method: "GET",
        }); 

        res = await res.json();

        console.log("YES");
        console.log(res); 

        if(res.message === "success"){
            setItemPrice(res.data.price);
        }else{
            console.log(res);
        }
    
        try{
            fetchPrice();
        }
        catch(err){
          console.log(err); 
        }
    }

    useEffect(() => {
        async function fetchActiveBatches(){ 

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
        }
        try{
            fetchActiveBatches();
        }
        catch(err){
          console.log(err); 
        }
    }, []);
    


    async function placeOrder(){
        const typeOfUnit = itemType.substring(0,1) + itemSubType.substring(0, 1);
    
        const orderData = {
            applicant_id: "1", //Fetch userID after admin enters user details, and put it here
            order_status: "Pending For Approval",
            type_of_unit: typeOfUnit,
            req_no_of_units: itemQty,
            price: 100 * itemQty, // fetch item price when both item type and item sub type are selected
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
            setItemPrice(0);
        }else{
            console.log(res);
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
                    <Container className="flex form-heading"><h1>Place a New Order</h1><hr></hr></Container>  
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

                        <Form.Group className="mb-3" controlId="quantity">
                        <Form.Label style={{fontWeight:"600", fontSize:"1em"}}>Quantity</Form.Label>
                        <Form.Control type="number" min={1} max={2} placeholder="" style={{ fontWeight:"600", fontSize:"1em"}} value={itemQty} onChange={(e) => handleItemQty(e)}/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="quantity">
                        <Form.Label style={{fontWeight:"500", fontSize:"1.3em", textDecoration: "underline"}}><strong>Current Price per Unit: Rs. {itemPrice} </strong></Form.Label>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="quantity">
                        <Form.Label style={{fontWeight:"600", fontSize:"1em"}}>Selling Price per Unit : Rs.</Form.Label>
                        <Form.Control type="number" min={0} placeholder="" style={{ fontWeight:"600", fontSize:"1em"}} value={itemSellPrice} onChange={(e) => handleItemSellPrice(e)}/>
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