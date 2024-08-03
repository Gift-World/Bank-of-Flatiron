import React from "react";

function SingleTransac({ transac }) {
  return (
    <div className="tableDiv" key={transac.id}>
      <tr className="tableList">
        <td className="tableData">{transac.date}</td>
        <td className="tableData">{transac.description}</td>

        <td className="tableData">{transac.category}</td>
        <td className="tableData">{transac.amount}</td>
      </tr>
    </div>
  );
}

export default SingleTransac;
