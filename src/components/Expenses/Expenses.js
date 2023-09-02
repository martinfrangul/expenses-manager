import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";
import Card from "../UI/Card";

function Expenses(props) {
  const [filteredSelection, setFilteredSelection] = useState("noFilter");
  const Selected = (select) => {
    setFilteredSelection(select);
  };
  
  let filteredData = props.data.filter((expense) => expense.date.getFullYear().toString() === filteredSelection)
  if (filteredSelection === 'noFilter') {
    filteredData = props.data
  }

  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredSelection} onSelected={Selected} 
      />
      {filteredData.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
      
    </Card>
  );
}

export default Expenses;
