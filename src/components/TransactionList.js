import React, { useEffect, useState } from "react";
import SingleTransac from "./SingleTransac";

function TransactionList() {
  const [transacList, setTransacList] = useState([]);
  useEffect(() => {
    fetch("https://flatiron-bank-backend-mjqx.vercel.app/transactions")
      .then((res) => res.json())
      .then((transacList) => setTransacList(transacList))
      .catch((error) => console.log(error));
  }, []);
  console.log("current state of users");
  console.log(transacList);

  const displayList = transacList.map((transac) => (
    <SingleTransac transac={transac} key={transac.id} />
  ));
  return (
    <div>
      <h1 className="Transaction-form">Transaction List</h1>
      <table className="table">
        <thead>
        <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Category</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
        {displayList}
        </tbody>
      </table>
     
    </div>
  );
}

export default TransactionList;
