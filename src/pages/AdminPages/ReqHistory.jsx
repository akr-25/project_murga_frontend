import React, { useState } from "react";
import "../../App.css";
import "../../styles/app.css";
import {Table} from 'react-bootstrap'
import {NavbarMod as Navbar} from '../../components/Navbar';
import DateRangeComp from "../../components/table/DateRangeSelector";
import THead from "../../components/table/THead";
import TBody from "../../components/table/TBody";
import TFoot from "../../components/table/TFoot";
import SortTable from "../../components/table/SortTable";
import { useEffect } from "react";

let reqHistoryData = [
  {
      sNo: "1",
      orderNo: "102934",
      custName: "Rosy",
      amt: "1432",
      orderDate: "28-05-2022",
      statusUpdateDate: "29-05-2022",
      orderStatus: "Approved"
  },
  {
      sNo: "2",
      orderNo: "102935",
      custName: "Eeshu",
      amt: "1432",
      orderDate: "28-05-2022",
      statusUpdateDate: "29-05-2022",
      orderStatus: "Pending"
  },
  {
      sNo: "3",
      orderNo: "-",
      custName: "Aman",
      amt: "-",
      orderDate: "-",
      statusUpdateDate: "-",
      orderStatus: "Rejected"
  },
  {
      sNo: "4",
      orderNo: "102934",
      custName: "Rosy",
      amt: "1432",
      orderDate: "28-05-2022",
      statusUpdateDate: "29-05-2022",
      orderStatus: "Approved"
  },
  {
      sNo: "5",
      orderNo: "102935",
      custName: "Eeshu",
      amt: "1432",
      orderDate: "28-05-2022",
      statusUpdateDate: "29-05-2022",
      orderStatus: "Pending"
  },
  {
      sNo: "6",
      orderNo: "-",
      custName: "Aman",
      amt: "-",
      orderDate: "-",
      statusUpdateDate: "-",
      orderStatus: "Completed"
  },
  {
      sNo: "7",
      orderNo: "102934",
      custName: "Rosy",
      amt: "1432",
      orderDate: "28-05-2022",
      statusUpdateDate: "29-05-2022",
      orderStatus: "Approved"
  },
  {
      sNo: "8",
      orderNo: "102935",
      custName: "Eeshu",
      amt: "1432",
      orderDate: "28-05-2022",
      statusUpdateDate: "29-05-2022",
      orderStatus: "Pending after approval"
  },
  {
      sNo: "9",
      orderNo: "-",
      custName: "Aman",
      amt: "-",
      orderDate: "-",
      statusUpdateDate: "-",
      orderStatus: "Rejected"
  },
  {
      sNo: "10",
      orderNo: "102934",
      custName: "Rosy",
      amt: "1432",
      orderDate: "28-05-2022",
      statusUpdateDate: "29-05-2022",
      orderStatus: "Approved"
  },
  {
      sNo: "11",
      orderNo: "102935",
      custName: "Eeshu",
      amt: "1432",
      orderDate: "28-05-2022",
      statusUpdateDate: "29-05-2022",
      orderStatus: "Pending"
  },
  {
      sNo: "12",
      orderNo: "-",
      custName: "Aman",
      amt: "-",
      orderDate: "-",
      statusUpdateDate: "-",
      orderStatus: "Rejected"
  }
  ];


function ReqHistory() {
  const [tableData, setTableData] = useState(reqHistoryData);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = tableData.slice(indexOfFirstRow, indexOfLastRow);

  function MapData(row){
    return {sNo: "0",
    orderNo: row.request_id,
    custName: row.applicant_id,
    amt: "Rs." + row.price,
    orderDate: row.createdAt,
    statusUpdateDate: row.updatedAt,
    orderStatus: row.order_status};
  }

  useEffect(() => {
    async function fetchData(){
      let res = await fetch("http://localhost:3001/api/request/fetch", {
        method: "GET", }); 

      res = await res.json();

      const fetchedData = res.data.requests.map(MapData);
      setTableData(fetchedData);
    }
    
    try{
      fetchData();
    }
    catch(err){
      console.log(err); 
    }
  }, []);

  // Function to filter data as per sort option clicked. 
  // It is passed as a callback function in filter of reqHistoryData Array.

  function filterData(sortOption){
    return function(element){
      return element.orderStatus === sortOption;
    }
  }

  // Function to set/update Value of "tableData" variable as per sort option selected.
  function updateDataOnSort(sortOption){
    if(sortOption === "All"){
      setTableData(reqHistoryData);
    }else{
      const newTableData = reqHistoryData.filter(filterData(sortOption));
      setCurrentPage(1);
      setTableData(newTableData);
    }
  }

  // function to manage currentPageNumber and currentPageData
  function handlePaginationClick(pageNumClicked){
    setCurrentPage(pageNumClicked);
  }



  return (
    <div>
      <Navbar></Navbar>

      <h1 className="pageTitle">Requests History</h1>
      <div className="containerDateSort">
        <DateRangeComp></DateRangeComp>
        <SortTable callback={updateDataOnSort}></SortTable>
      </div>

      <div className="tableDiv">
        <Table striped bordered hover responsive>
          <THead></THead>
          <TBody tableData={currentRows}></TBody>
        </Table>

        <TFoot 
        indexOfFirstRow={indexOfFirstRow} 
        currentRowsLength={currentRows.length} 
        currentPage={currentPage}
        tableDataLength={tableData.length}
        rowsPerPage={rowsPerPage}
        handlePaginationClick={handlePaginationClick}></TFoot>
          
      </div>
      
    </div>
  );
}

export default ReqHistory;
