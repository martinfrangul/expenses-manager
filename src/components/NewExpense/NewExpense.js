import React, {useState} from "react";
import './NewExpense.css';
import ExpenseForm from './ExpenseForm'



function NewExpense(props) {
    const [isEditing, setIsEditing] = useState(false)
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onSendNewExpense(expenseData)
        setIsEditing(false)
    }
    
    const startEditingHandler = () => {
        setIsEditing(true)
    }

    const stopEditingHandler = () => {
        setIsEditing(false)
    }

    let displayExpenses = <button onClick={startEditingHandler}>Add new expenses</button>

    if (isEditing === true) {
        displayExpenses = <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler}/>
    }

    return (
        <div className="new-expense">

            {/* OTRA FORMA DE HACERLO CON EL && TRICK SERÍA ASÍ */}

            {/* {!isEditing && <button onClick={startEditingHandler}>Add new expenses</button>}
            {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler}/>} */}
            {displayExpenses}
        </div>
    )
}

export default NewExpense;