/*
This component shows a form that allows to create a new expense
*/
import React from "react";

import ExpenseForm from "./ExpenseForm"; //Here imports the form
import './NewExpense.css';

const NewExpense = (props) => { //Recieves props that contains the function onAddExpense which is executed in the parent component

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData);
    }

    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} /> {/* Sends the function saveExpenseDataHandler*/}
        </div>
    )
};

export default NewExpense;