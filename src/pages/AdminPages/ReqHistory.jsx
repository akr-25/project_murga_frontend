import React, { useState } from "react";
import "../../App.css";
import "../../styles/app.css";
import {Table} from 'react-bootstrap'
import {NavbarMod as Navbar} from '../../components/NavigationBar';
import DateRangeComp from "../../components/table/DateRangeSelector";
import THead from "../../components/table/THead";
import TBody from "../../components/table/TBody";
import TFoot from "../../components/table/TFoot";
import SortTable from "../../components/table/SortTable";
import { useEffect } from "react";

let reqHistoryData = [
  {
      sNo: "NO DATA FOUND",
      orderNo: "",
      custName: "",
      amt: "",
      orderDate: "",
      statusUpdateDate: "",
      orderStatus: ""
  }];

let allData;


function ReqHistory() {
  const [tableData, setTableData] = useState(reqHistoryData);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = tableData.slice(indexOfFirstRow, indexOfLastRow);

  function MapData(row, index){
    const orderYear = row.createdAt.substring(0, 4);
    const orderMonth = row.createdAt.substring(5, 7);
    const orderDate = row.createdAt.substring(8, 10);
    
    const statusYear = row.createdAt.substring(0, 4);
    const statusMonth = row.createdAt.substring(5, 7);
    const statusDate = row.createdAt.substring(8, 10);
    
    return {sNo: index + 1,
    orderNo: row.request_id,
    custName: row.User.first_name + " " + row.User.last_name,
    amt: "Rs. " + row.selling_price_per_unit,
    orderDate: orderDate +"-"+ orderMonth +"-"+ orderYear,
    statusUpdateDate: statusDate +"-"+ statusMonth +"-"+ statusYear,
    orderStatus: row.order_status};
  }

  useEffect(() => {
    async function fetchData(){
      try{
        let res = await fetch("http://localhost:3001/api/request/fetch", {
          method: "GET", }); 

        res = await res.json();

        const fetchedData = res.data.requests.map((currentRow, index) => MapData(currentRow, index));
        allData = fetchedData;
        allData.length === 0 ? setTableData(reqHistoryData) : setTableData(fetchedData);
      }
      catch(err){
        console.log(err);
      } 
    }
    fetchData();
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
      allData.length === 0 ? setTableData(reqHistoryData) : setTableData(allData);
    }else{
      const newTableData = allData.filter(filterData(sortOption));
      setCurrentPage(1);
      if(newTableData.length){
        setTableData(newTableData);
      }else{
        setTableData(reqHistoryData);
      }
    }
  }

  // function to manage currentPageNumber and currentPageData
  function handlePaginationClick(pageNumClicked){
    setCurrentPage(pageNumClicked);
  }



  return (
    <div>
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
