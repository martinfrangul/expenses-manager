import React, { useState } from "react";
import "./ExpenseForm.css";

/////////////////////////////////////////////////////////////////////////////////
//Dos posibilidades distintas de usar el State:
//una repitiendo el useState y cada una con su State, más código pero más clara
//y bastante usada. La otra más ordenada, usando sólo un state con un objeto pero
//menos usada y legible, aunque más eficiente.
/////////////////////////////////////////////////////////////////////////////////

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  // const [userInput, setUserInput] = useState({
  //     enteredTitle: '',
  //     enteredAmount:'',
  //     enteredDate: ''
  // })

  // const titleChangeHandler = (event) => {
  //     setEnteredTitle(event.target.value);
  // setUserInput({
  //      ...userInput,
  //      enteredTitle: event.target.value});

  //PARA EVITAR EL SPREAD OP, SI QUIERO MANTENER EL STATE PUEDO USAR ESTA FORMA

  // setUserInput((prevState) => {
  //     return {...prevState, enteredTitle: event.target.value}
  // })

  // }
  // const amountChangeHandler = (event) => {
  //     setEnteredAmount(event.target.value);
  // setUserInput({
  //     ...userInput,
  //     enteredAmount: event.target.value});
  // }
  // const dateChangeHandler = (event) => {
  // setEnteredDate(event.target.value);
  // setUserInput({
  //     ...userInput,
  //     enteredDate: event.target.value});
  // }

  const inputChangeHandler = (ident, val) => {
    if (ident === "title") {
      setEnteredTitle(val);
    } else if (ident === "amount") {
      setEnteredAmount(val);
    } else if (ident === "date") {
      setEnteredDate(val);
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(expenseData)
    setEnteredTitle('')
    setEnteredAmount('')
    setEnteredDate('')
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            onChange={(event) =>
              inputChangeHandler("title", event.target.value)
            }
            value={enteredTitle}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            onChange={(event) =>
              inputChangeHandler("amount", event.target.value)
            }
            min="0.01"
            step="0.01"
            value={enteredAmount}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            onChange={(event) => inputChangeHandler("date", event.target.value)}
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
          ></input>
        </div>
      </div>
      <div className="new-expenses__actions">
        <button type="button" onClick={props.onCancel} >Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
