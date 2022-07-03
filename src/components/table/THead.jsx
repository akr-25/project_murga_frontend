import React from 'react';



function THead(props){
    function TH(columnName){
        return(
            <th>{columnName}</th>
        )
    }
    return(
        <thead style={{backgroundColor:"#e4e0fa"}}>
            <tr>
              {props.columnNames.map(TH)}
            </tr>
        </thead>
    )
}


export default THead;