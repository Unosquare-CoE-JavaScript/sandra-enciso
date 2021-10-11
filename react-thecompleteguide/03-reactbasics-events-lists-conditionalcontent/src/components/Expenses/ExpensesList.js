/* This component renders a list of the filtered expenses */
import React from "react";

/* importing components */
import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css';

const ExpensesList = props => { //Receives the filtered expenses (items)

    if (props.items.length === 0) { //This will be rendered if no found expenses
        return <h2 className="expenses-list__fallback">Found no expenses.</h2>
    }

    return ( //Creates an array of components using the items
        <ul className="expenses-list">
            {
                props.items.map((expense) => (
                    <ExpenseItem
                        key={expense.id}
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date}
                    />
                ))
            }
        </ul>
    )

};

export default ExpensesList;