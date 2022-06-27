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
          <Button onClick={(event) => handleClick(props.callback, event)} name="Pending For Completion" variant="primary">PFC</Button>
          <Button onClick={(event) => handleClick(props.callback, event)} name="Pending For Approval" variant="warning">PFA</Button>
          <Button onClick={(event) => handleClick(props.callback, event)} name="Cancelled" variant="danger">Cancelled</Button>
        </div>
    );
}

export default SortTable;