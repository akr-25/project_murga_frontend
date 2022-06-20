import React, { useState } from "react";
import {NavbarMod as Navbar} from '../components/Navbar';
import {RequestCard} from '../components/RequestCard';

import "../App.css";
import { useEffect } from "react";

export default function Home() {

  const [pendingRequests, setPendingRequests] = useState([{
    order_status: "Pending For Approval",
    requestId: "1932",
    itemType: "Chick",
    quantity: "10"
  },
  {
    order_status: "Pending For Approval",
    requestId: "1933",
    itemType: "Chick",
    quantity: "10"
  },
]);
  const [pendingTxns, setPendingTxns] = useState([{
    order_status: "Pending For Completion",
    requestId: "1934",
    itemType: "Chick",
    quantity: "10"
  }]);
  

  useEffect(() => {
    async function fetchData(){
      let res = await fetch("http://localhost:3001/api/request/fetch", {
        method: "GET", }); 

      res = await res.json();

      const requestData = res.data.requests.filter(item => item.order_status==="Pending For Approval");
      const txnData = res.data.requests.filter(item => item.order_status==="Pending For Completed");
      //here, PFA: Pending For Approval, PFC: Pending For Completion

      setPendingRequests(requestData);
      setPendingTxns(txnData);
    }
    
    try{
      fetchData();
    }
    catch(err){
      console.log(err); 
    }
  }, []);

  return (
    <div className="App">
        <Navbar></Navbar>
        <h1 className="adminLandingHeader">Pending Requests</h1>
        {pendingRequests.length ? <RequestCard requestType="Request" pendingRequests={pendingRequests} pendingTxns={pendingTxns} setPendingRequests={setPendingRequests} setPendingTxns={setPendingTxns}/> : <div style={{alignItems: "center"}}><h3 style={{marginTop: "20px", paddingBottom: "20px", textAlign: "center"}}>No Pending Request found</h3></div>}
        <hr></hr>   
        <h1 className="adminLandingHeader">Pending Transactions</h1>
        {pendingTxns.length ? <RequestCard requestType="Transaction" pendingRequests={pendingRequests} pendingTxns={pendingTxns} setPendingRequests={setPendingRequests} setPendingTxns={setPendingTxns}/> : <div style={{alignItems: "center"}}><h3 style={{marginTop: "20px", paddingBottom: "20px", textAlign: "center"}}>No Pending Transaction found</h3></div>}   
    </div>
  );
}
