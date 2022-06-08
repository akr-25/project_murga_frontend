import React, { useState } from "react";
import "../../App.css";
import "../../styles/app.css";
import {Table} from 'react-bootstrap'
import {NavbarMod as Navbar} from '../../components/Navbar';
import Pagination from "react-bootstrap-4-pagination";
import DateRangeComp from "../../components/table/DateRangeSelector";
import THead from "../../components/table/THead";
import TBody from "../../components/table/TBody";


function ReqHistory() {
  const [inactive, setInactive] = useState(true);

  return (
    <div className="App">
      <Navbar></Navbar>

      <h1 className="pageTitle">Request req_history</h1>
      <DateRangeComp></DateRangeComp>
      <div className="tableDiv">
        <Table striped bordered hover responsive>
          <THead></THead>
          <TBody></TBody>
        </Table>
        {/* <div className="pagination"> */}
          <Pagination
            threeDots
            totalPages={22}
            currentPage={1}
            showMax={7}
            prevNext
            activeBgColor="#4E73DF"
            activeBorderColor="#b8b8b8"
          />
        {/* </div> */}
        
      </div>
      
    </div>
  );
}

export default ReqHistory;
