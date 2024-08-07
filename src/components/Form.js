import React, { useState } from "react";
// import SearchBar from "./SearchBar";

function Form() {
  const [date, setDate] = useState("2024-08-03");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");
  //    console.log(date);
  //    console.log(description)
  //    console.log(category);
  //    console.log(amount);

  const handleOnChangeDate = (e) => setDate(e.target.value);
  const handleOnChangeDescription = (e) => setDescription(e.target.value);
  const handleOnChangeCategory = (e) => setCategory(e.target.value);
  const handleOnChangeAmount = (e) => setAmount(e.target.value);
  const handleSubmitForm = (e) => {
    e.preventDefault();

    const formData = {
      date: date,
      description: description,
      category: category,
      amount: amount,
    };
    // console.log("datass");
    // console.log(formData);
    fetch("https://flatiron-bank-backend-mjqx.vercel.app/transactions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => data("posted successfully"))
      .catch((error) => console.log(error));

    setDate("");
    setDescription("");
    setCategory("");
    setAmount("");
  };
  return (
    <div className="form">
      <form className="form-items" onSubmit={handleSubmitForm}>
        <div>
          <h1 className="Transaction-form">Transaction Form</h1>
        </div>
        <tr>
          <td>
            <div>
              <input
                className="form-input"
                type="date"
                placeholder="Date"
                value={date}
                onChange={handleOnChangeDate}
              ></input>
            </div>
          </td>

          <td>
            <div>
              <input
                className="form-input"
                type="text"
                placeholder="Description"
                value={description}
                onChange={handleOnChangeDescription}
              ></input>
            </div>
          </td>
          <td>
            <div>
              <input
                className="form-input"
                type="text"
                placeholder="Category"
                value={category}
                onChange={handleOnChangeCategory}
              ></input>
            </div>
          </td>
          <td>
            <div>
              <input
                className="form-input"
                type="number"
                placeholder="Amount"
                value={amount}
                onChange={handleOnChangeAmount}
              ></input>
            </div>
          </td>
        </tr>
        <div>
          <input
            className="submit"
            type="submit"
            value="Add Transaction"
          ></input>
        </div>
      </form>
    </div>
  );
}

export default Form;
