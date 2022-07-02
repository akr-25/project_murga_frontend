import React, { useState } from "react";
import {RequestCard} from '../components/RequestCard';
import "../App.css";
import { useEffect } from "react";

export default function AdminLanding() {

  const [pendingRequests, setPendingRequests] = useState([]);
  const [pendingTxns, setPendingTxns] = useState([]);
  

  useEffect(() => {
    async function fetchData(){
      let res = await fetch("http://localhost:3001/api/request/fetch", { 
        method: "GET", }); 

      res = await res.json();
      console.log(res); 

      const requestData = res.data.requests.filter(item => item.order_status==="Pending For Approval");
      const txnData = res.data.requests.filter(item => item.order_status==="Pending For Completion");
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
        <h1 className="adminLandingHeader">Pending Requests</h1>
        {pendingRequests.length ? <RequestCard requestType="Request" pendingRequests={pendingRequests} pendingTxns={pendingTxns} setPendingRequests={setPendingRequests} setPendingTxns={setPendingTxns}/> : <div style={{alignItems: "center"}}><h3 style={{marginTop: "20px", paddingBottom: "20px", textAlign: "center"}}>No Pending Request found</h3></div>}
        <hr></hr>   
        <h1 className="adminLandingHeader">Pending Transactions</h1>
        {pendingTxns.length ? <RequestCard requestType="Transaction" pendingRequests={pendingRequests} pendingTxns={pendingTxns} setPendingRequests={setPendingRequests} setPendingTxns={setPendingTxns}/> : <div style={{alignItems: "center"}}><h3 style={{marginTop: "20px", paddingBottom: "20px", textAlign: "center"}}>No Pending Transaction found</h3></div>}   
    </div>
  );
}
