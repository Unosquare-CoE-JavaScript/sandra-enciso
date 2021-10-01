/* This component contains the fields to show in the NewExpense form */
import React, {useState} from "react";

import './ExpenseForm.css';

const ExpenseForm = (props) => { //Recieves props which contain a function to execute inside the parent component
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    /* const [userInput, setUserInput] = useState({ //You can use useState like an object, like this
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: '',
    }); */

    /*
    Whenever you update state and you depend on the previous state, you should not do it like this (above)
    */

    const titleChangeHandler = e => { //Handling the change of the title field
        setEnteredTitle(e.target.value); //Setting a new value
        /*
        Whenever you update state and you depend on the previous state, you should not do it like this
        */
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: e.target.value
        // });

        // setUserInput((prevState) => {
        //     return { ...prevState, enteredTitle: e.target.value };
        // });
    }

    const amountChangeHandler = e => { //Handling the change of the amount field
        setEnteredAmount(e.target.value); //Setting a new value
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: e.target.value
        // })
    }

    const dateChangeHandler = e => { //Handling the change of the date field
        setEnteredDate(e.target.value); //Setting a new value
        // setUserInput({
        //     ...userInput,
        //     enteredDate: e.target.value
        // })
    }

    const submitHandler = (e) => { //Handling the event submit of the form
        e.preventDefault(); //Prevents the default behavior of the form

        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate),

        };

        props.onSaveExpenseData(expenseData); //Executes the function

        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label> {/* Using value, biattached to enteredTitle */}
                    <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" value={enteredAmount} min="0.01" step="0.01" onChange={amountChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" value={enteredDate} min="2019-01-01" step="2022-12-31" onChange={dateChangeHandler} />
                </div>
                <div className="new-expsense__actions">
                    <button type="submit">Add Expense</button>
                </div>
            </div>
        </form>
    )
};

export default ExpenseForm;