import React, { useEffect, useState } from "react";
import SingleTransac from "./SingleTransac";

function TransactionList() {
  const [transacList, setTransacList] = useState([]);
  const [search, setSearchBar] = useState("");
  useEffect(() => {
    fetch("https://flatiron-bank-backend-mjqx.vercel.app/transactions")
      .then((res) => res.json())
      .then((transacList) => setTransacList(transacList))
      .catch((error) => console.log(error));
  }, []);


  // console.log("current state of users");
  // console.log(transacList);
  const handleDeleteButton = (transactionToBeDeleted) => {
  
    const filterTransactions = transacList.filter(
      (transaction) => transaction !== transactionToBeDeleted
    );
    setTransacList(filterTransactions);
  };

  return (
    <div>
      <form>
        <div className="search-bar">
          <input
            type="text"
            className="SearchInput"
            placeholder="Search Transactions..."
            value={search}
            onChange={(e) => setSearchBar(e.target.value)}
          />
        </div>
      </form>
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
          {transacList
            .filter((transac) => {
              return search.toLowerCase() === ""
                ? transac
                : transac.description
                    .toLowerCase()
                    .includes(search.toLowerCase());
            })
        
            .map((transac) => (
              <SingleTransac transac={transac} key={transac.id} onDelete={handleDeleteButton}/>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default TransactionList;
