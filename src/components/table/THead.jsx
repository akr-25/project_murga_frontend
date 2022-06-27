import React from 'react';

function THead(){
    return(
        <thead style={{backgroundColor:"#e4e0fa"}}>
            <tr>
              <th>S. No.</th>
              <th>Order No.</th>
              <th>Customer Name</th>
              <th>Order Amount</th>
              <th>Order Date</th>
              <th>Status Updated On</th>
              <th>Order Status</th>
              <th>Order Details</th>
            </tr>
        </thead>
    )
}

export default THead;