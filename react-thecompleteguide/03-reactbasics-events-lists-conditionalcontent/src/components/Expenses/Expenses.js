/*
This component shows a filter, chart and a list of expenses
*/
import React, { useState } from 'react';

/* Imports components */
import Card from "../UI/Card";
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';
import './Expenses.css';

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020'); //The first value to filter is 2020

    const filterChangeHandler = (selectedYear) => { //Handles the change of the field
        setFilteredYear(selectedYear); //set a new value to selectedYear
    };

    const filteredExpenses = props.items.filter((expense) => { //filter the list of elements (items) and return a new array
        return expense.date.getFullYear().toString() === filteredYear;
    });    

    return (
        <Card className="expenses">
            <ExpensesFilter 
                selected={filteredYear}
                onChangeFilter={filterChangeHandler}
            />{/* Renders the filter */}
            <ExpensesChart expenses={filteredExpenses} /> {/* Renders the Chart. Shows only the filtered expenses */}
            <ExpensesList items={filteredExpenses} /> {/* Renders the list of expenses, Only filtered expenses */}
        </Card>
    )
}

export default Expenses;