import React, {useState, useEffect} from "react";
import {Form, Container, Button} from "react-bootstrap";





function PlaceOrder(props){

    const [orderType, setOrderType] = useState("SELL");
    const [itemType, setItemType] = useState("-");
    const [itemSubType, setItemSubType] = useState("-");
    const [itemQty1, setItemQty1] = useState(0);
    const [itemQty2, setItemQty2] = useState(0);
    const [itemPrice, setItemPrice] = useState();
    const [availableItemQty1, setAvailableItemQty1] = useState(0);
    const [availableItemQty2, setAvailableItemQty2] = useState(0);
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
    function handleItemQty1(e){
        setItemQty1(e.target.value);
    }
    function handleItemQty2(e){
        setItemQty2(e.target.value);
    }
    function handleItemSellPrice(e){
        setItemSellPrice(e.target.value);
    }
    function handleBatchSelected(e){
        console.log(e.target.value);
        setBatchSelected(e.target.value);
        fetchPrice(e.target.value);
        fetchBalanceLog(e.target.value);
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

    async function fetchPrice(selectedBatchCode){
        //console.log(batchCode);
        try{
            let res = await fetch("http://localhost:3001/api/priceLog/fetch/", {
                method: "GET",
            }); 

            res = await res.json();

            let tmpArray = res.data.pricelogs.filter(item => item.batch_id === selectedBatchCode);
            // console.log(tmpArray[0].BalanceLogs[0].net_balance_type1);
            // console.log(tmpArray[0].BalanceLogs[0].net_balance_type2);

            if(res.message === "success"){
                console.log(tmpArray[0]);
                tmpArray[0].PriceLogs.length !== 0 ? setItemPrice(tmpArray[0].PriceLogs[0].price_per_unit) : setItemPrice(0);
                
            }else{
                console.log(res);
            }
        }
        catch(err){
          console.log(err); 
        }
    }

    async function fetchBalanceLog(selectedBatchCode){
        //console.log(batchCode);
        try{
            let res = await fetch("http://localhost:3001/api/balanceLog/fetch/", {
                method: "GET",
            }); 

            res = await res.json();

            //console.log("YES");
            //console.log(res.data.balancelogs[0].batch_id); 

            let tmpArray = res.data.balancelogs.filter(item => item.batch_id === selectedBatchCode);
            // console.log(tmpArray[0].BalanceLogs[0].net_balance_type1);
            // console.log(tmpArray[0].BalanceLogs[0].net_balance_type2);

            if(res.message === "success"){
                if(tmpArray[0].BalanceLogs.length !== 0){
                    setAvailableItemQty1(tmpArray[0].BalanceLogs[0].net_balance_type1);
                    setAvailableItemQty2(tmpArray[0].BalanceLogs[0].net_balance_type2);
                }else{
                    setItemQty1(0);
                    setItemQty2(0);
                }
                
            }else{
                console.log(res);
            }
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
            applicant_id: props.userID, //Fetch userID after admin enters user details, and put it here
            unit_id: batchSelected,
            order_status: "Pending For Approval",
            type_of_unit: typeOfUnit,
            req_no_of_units_type1: itemQty1,
            req_no_of_units_type2: itemQty2,
            selling_price_per_unit: itemSellPrice * (itemQty1 + itemQty2), // fetch item price when both item type and item sub type are selected
            order_type: orderType,


            // updated_net_balance_type1: parseInt(itemQty1),
            // updated_net_balance_type2: parseInt(itemQty2)
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
            setItemQty1(0);
            setItemQty2(0);
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
                        <Form.Label style={{fontWeight:"500", fontSize:"1.3em"}}><strong><u>Available Quantity of Type-1:</u> {availableItemQty1}</strong></Form.Label>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="quantity">
                        <Form.Label style={{fontWeight:"600", fontSize:"1em"}}>Quantity Type - 1</Form.Label>
                        <Form.Control type="number" min={1} max={2} placeholder="" style={{ fontWeight:"600", fontSize:"1em"}} value={itemQty1} onChange={(e) => handleItemQty1(e)}/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="quantity">
                        <Form.Label style={{fontWeight:"500", fontSize:"1.3em"}}><strong><u>Available Quantity of Type-2:</u> {availableItemQty2}</strong></Form.Label>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="quantity">
                        <Form.Label style={{fontWeight:"600", fontSize:"1em"}}>Quantity Type - 2</Form.Label>
                        <Form.Control type="number" min={1} max={2} placeholder="" style={{ fontWeight:"600", fontSize:"1em"}} value={itemQty2} onChange={(e) => handleItemQty2(e)}/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="quantity">
                        <Form.Label style={{fontWeight:"500", fontSize:"1.3em", textDecoration: "underline"}}><strong>Current Price per Unit: {`Rs. ${itemPrice}`} </strong></Form.Label>
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