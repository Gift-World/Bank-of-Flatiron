import React, { useEffect, useState } from "react";
import SingleTransac from "./SingleTransac";

function TransactionList() {
  const [transacList, setTransacList] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/transactions")
      .then((res) => res.json())
      .then((transacList) => setTransacList(transacList))
      .catch((error) => console.log(error));
  }, []);
  console.log("current state of users");
  console.log(transacList);

  const displayList = transacList.map((transac) => <SingleTransac transac={transac} key={transac.id}/>)
  ;
  return (
    <div>
      TransactionList
      {displayList}
    </div>
  );
}

export default TransactionList;
