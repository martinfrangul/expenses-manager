import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";
import Card from "../UI/Card";

function Expenses(props) {
  const [filteredSelection, setFilteredSelection] = useState("2020");
  const Selected = (select) => {
    setFilteredSelection(select);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredSelection} onSelected={Selected} />
      {props.data.map((expense) => (
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
}

export default Expenses;
