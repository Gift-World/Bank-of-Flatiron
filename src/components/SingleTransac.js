import React from "react";

function SingleTransac({ transac }) {
  return (
      <tr className="tableList">
        
        <td className="tableData">{transac.date}</td>
        <td className="tableData">{transac.description}</td>

        <td className="tableData">{transac.category}</td>
        <td className="tableData">{transac.amount}</td>
      </tr>
     
  
  );
}

export default SingleTransac;
