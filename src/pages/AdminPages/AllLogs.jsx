import React, { useState } from "react";
import {Button,Container} from 'react-bootstrap';
import "../../App.css";
import FeedLogTable from "../../components/log-tables/FeedLogTable";
import PriceLogTable from "../../components/log-tables/PriceLogTable";
import BalanceLogTable from "../../components/log-tables/BalanceLogTable";

function EntryUpdate() {

  const [method, setMethod] = useState(0);

  if(method === 0){
    return (
      <div className="pg" >
        <div className="items-div">
          <div className="row"></div>
            <Container className="col-12 col-lg-4 col-md-6 col-sm-6 div-wrapper justify-content-center align-items-center form-container" >
                <Container className="flex form-heading"><h1>Select One to Proceed</h1><hr></hr></Container>  
                <div className="flex-parent jc-center">
                <Button size="lg" onClick={() => setMethod(1)} variant="primary" style={{marginRight: "40px", textAlign: "left"}}>BalanceLogs</Button>
                <Button size="lg" onClick={() => setMethod(2)} variant="primary" style={{marginRight: "40px", textAlign: "left"}}>FeedLogs</Button>
                <Button size="lg" onClick={() => setMethod(3)} variant="primary" style={{textAlign: "left"}}>PriceLogs</Button>
                </div>          
            </Container>
        </div>
      </div>
    );
  }else if(method === 1){
    return (
      <BalanceLogTable />
    );
  }else if(method === 2){
    return (
      <FeedLogTable />
    );
  }else{
    return(
      <PriceLogTable />
    )
  }
  
}

export default EntryUpdate;
