import React from 'react';
import Pagination from "react-bootstrap-4-pagination";

function TFoot(props){
    return (
        <div className="tableFooter">
            <div className="footer-1">
                <p>Rows: {props.indexOfFirstRow + 1} - {props.indexOfFirstRow + props.currentRowsLength} of {props.tableDataLength}</p>
            </div>
            <div className="footer-2">
                <Pagination
                threeDots
                totalPages={Math.ceil(props.tableDataLength / props.rowsPerPage)}
                currentPage={props.currentPage}
                showMax={7}
                prevNext
                activeBgColor="#4E73DF"
                activeBorderColor="#b8b8b8"
                onClick={props.handlePaginationClick}
                />
            </div>
        </div>
    );
}

export default TFoot;