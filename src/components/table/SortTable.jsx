import { useEffect, useRef, useState } from 'react'
import { Button } from 'react-bootstrap';

function handleClick(callback, event){
    callback(event.target.name);
}

function SortTable(props){
    return (
        <div className="sortWrap">
          <label>
            Filter by: 
          </label> 
          <Button onClick={(event) => handleClick(props.callback, event)} name="All" variant="secondary">All</Button>
          <Button onClick={(event) => handleClick(props.callback, event)} name="Completed" variant="success">Completed</Button>
          <Button onClick={(event) => handleClick(props.callback, event)} name="Approved" variant="primary">Approved</Button>
          <Button onClick={(event) => handleClick(props.callback, event)} name="Pending" variant="warning">Pending</Button>
          <Button onClick={(event) => handleClick(props.callback, event)} name="Rejected" variant="danger">Rejected</Button>
        </div>
    );
}

export default SortTable;