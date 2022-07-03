import React, { useState } from "react";
import "../../App.css";
import "../../styles/app.css";
import {Table, Form, Button, Container} from 'react-bootstrap';
import DateRangeComp from "../../components/table/DateRangeSelector";
import THead from "../../components/table/THead";
import TBody from "../../components/table/TBody";
import TFoot from "../../components/table/TFoot";
import SortTable from "../../components/table/SortTable";
import { useEffect } from "react";

let reqHistoryData = [
  {
      sNo: "NO DATA FOUND",
      batch_id: "",
      net_balance_type1: "",
      net_balance_type2: "",
      type_of_change: "",
      updateDate: "",
  }];

let allData;



function ReqHistory() {
  const [tableData, setTableData] = useState(reqHistoryData);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const [itemType, setItemType] = useState("-");
  const [itemSubType, setItemSubType] = useState("-");
  const [itemType1Name, setItemType1Name] = useState("");
  const [itemType2Name, setItemType2Name] = useState("");

  const [allBatches, setAllBatches] = useState([]);

  const [batchesToDisplay, setBatchesToDisplay] = useState([]);
  const [batchSelected, setBatchSelected] = useState("");

  const columnNames = [
    "S. No.",
    "Batch ID",
    "Quantity " + itemType1Name,
    "Quantity " + itemType2Name,
    "Reason for change",
    "Update Date"
  ];
  

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = tableData.slice(indexOfFirstRow, indexOfLastRow);

  function MapData(row, index){
    const orderYear = row.createdAt.substring(0, 4);
    const orderMonth = row.createdAt.substring(5, 7);
    const orderDate = row.createdAt.substring(8, 10);
    
    return {
        sNo: index + 1,
        batch_id: row.unit_id,
        net_balance_type1: row.net_balance_type1,
        net_balance_type2: row.net_balance_type2,
        type_of_change: row.type_of_change,
        updateDate: orderDate +"-"+ orderMonth +"-"+ orderYear,
    };
  }


  function handleItemType(e){
      setItemType(e.target.value);
      handleBatchList(e.target.value, itemSubType);
  }
  function handleItemSubType(e){
      setItemSubType(e.target.value);
      handleBatchList(itemType, e.target.value);
  }

  function handleBatchSelected(e){
      console.log(e.target.value);
      setBatchSelected(e.target.value);
      fetchTypeNames(e.target.value);
      fetchLogs(e.target.value);
  }
  function fetchTypeNames(batch_id){
      console.log(batch_id);
      if(batch_id[1] === 'E'){
          setItemType1Name("Table");
          setItemType2Name("Hatching");
      }else if(batch_id[1] === 'C' || batch_id[1] === 'D'){
          batch_id[1] === 'C' ? setItemType1Name("Chick") : setItemType1Name("Duckling");
          setItemType2Name(null);
      }else if(batch_id[1] === 'L' || batch_id[1] === 'G'){
          setItemType1Name("Male");
          setItemType2Name("Female");
      }
  }
  function handleBatchList(item, subItem){
      let itemTypeCode = item.substring(0, 1);
      let itemSubTypeCode = subItem.substring(0, 1);
      const itemCode = itemTypeCode + itemSubTypeCode;

      console.log(allBatches);

      const extractedBatchesObject = allBatches.filter(batch => batch.batch_id.substring(0, 2) === itemCode);
      const extractedBatches = extractedBatchesObject.map(item => item.batch_id);

      setBatchesToDisplay(extractedBatches);
      console.log(extractedBatches[0]);
      extractedBatches.length > 0 ? setBatchSelected(extractedBatches[0]) : setBatchSelected("");
      extractedBatches.length > 0 ? fetchTypeNames(extractedBatches[0]) : fetchTypeNames("");
      extractedBatches.length > 0 ? fetchLogs(extractedBatches[0]) : fetchTypeNames("");
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

    async function fetchLogs(batch_id){
        try{
            let res = await fetch("http://localhost:3001/api/balanceLog/fetchAll/?batch_id=" + batch_id, {
                method: "GET",
            }); 

            res = await res.json();

            //console.log("YES");
            console.log(res.data.balancelogs); 

            // console.log(tmpArray[0].BalanceLogs[0].net_balance_type1);
            // console.log(tmpArray[0].BalanceLogs[0].net_balance_type2);

            if(res.message === "success"){
                const fetchedData = res.data.balancelogs.map((currentRow, index) => MapData(currentRow, index));
                allData = fetchedData;
                allData.length === 0 ? setTableData(reqHistoryData) : setTableData(fetchedData);
            }else{
                console.log(res);
            }
        }
        catch(err){
          console.log(err); 
        }
    }

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

  function ListABatch(batch){
    //console.log(batch);
    return (
        <option key={batch} name={batch}>{batch}</option>
    );
  }

  return (
    <div>
      <h1 className="pageTitle">Balance Logs</h1>
      <div className="containerDateSort">
        <div
            className="d-flex flex-row justify-content-between w-80 mt-0 mb-0"
            style={{ width: "80%", margin: "auto" }}>
            <div style={{ display: "flex", gap: "1rem" }}>
                <span>
                    <Form.Label style={{fontWeight:"600", fontSize:"1em"}}>Item type</Form.Label>
                    <Form.Select value={itemType} onChange={(e) => handleItemType(e)} style={{fontWeight:"600", fontSize:"1em"}}>
                        <option name="-">Select Item Type</option>
                        <option name="C">Chicken</option>
                        <option name="D">Duck</option>
                    </Form.Select>
                </span>
                <span>
                    <Form.Label style={{fontWeight:"600", fontSize:"1em"}}>Item Sub-type</Form.Label>
                    <Form.Select value={itemSubType} onChange={(e) => handleItemSubType(e)} style={{fontWeight:"600", fontSize:"1em"}}>
                        <option name="-">Select Item SubType</option>
                        <option name="E">Egg</option>
                        <option name="C">{itemType === "Chicken" ? "Chick" : "Duckling"}</option>
                        <option name="L">Layer</option>
                        <option name="G">Grower</option>
                    </Form.Select>
                </span>
                <span>
                    <Form.Label style={{fontWeight:"600", fontSize:"1em"}}>Active Batches</Form.Label>
                    <Form.Select value={batchSelected} onChange={handleBatchSelected} style={{fontWeight:"600", fontSize:"1em"}}>
                        {batchesToDisplay.map(ListABatch)}
                    </Form.Select>
                </span>
            </div>
        </div>
      </div>

      <div className="tableDiv">
        <Table striped bordered hover responsive>
          <THead columnNames={columnNames}></THead>
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
