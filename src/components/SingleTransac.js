import React from "react";

function SingleTransac({ transac ,onDelete}) {
  return (
    <>
      <tr className="tableList">
        <td className="tableData">{transac.date}</td>
        <td className="tableData">{transac.description}</td>

        <td className="tableData">{transac.category}</td>
        <td className="tableData">{transac.amount}</td>
        <button className="del" onClick={()=>onDelete(transac)}>Delete Transaction</button>
      </tr>
    </>
  );
}

export default SingleTransac;
