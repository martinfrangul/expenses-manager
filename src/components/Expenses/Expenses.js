import React, { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesList from './ExpensesList'

function Expenses(props) {
  const [filteredSelection, setFilteredSelection] = useState("noFilter");
  const Selected = (select) => {
    setFilteredSelection(select);
  };

  let filteredData = props.data.filter(
    (expense) => expense.date.getFullYear().toString() === filteredSelection
  );
  if (filteredSelection === "noFilter") {
    filteredData = props.data;
  }

  
  

  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredSelection} onSelected={Selected} />
      <ExpensesList data={filteredData}/>
      {/* OTRA FORMA DE ESCRIBIRLO SERÍA:

      {filteredData.length === 0 && <p className="noExpenses">No expenses 🎉</p>}
      {filteredData.length > 0 &&
      filteredData.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))
      } */}

      {/* Y OTRA:
      
      {filteredData.length === 0 ? (
        <p className="noExpenses">No expenses 🎉</p>
      ) : (
        filteredData.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))
      )} */}
    </Card>
  );
}


export default Expenses;
