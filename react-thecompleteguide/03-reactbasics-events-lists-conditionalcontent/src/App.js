import React, { useState } from "react"; //importing React and useState
/*
The setState function is used to update the state. It accepts a new state value and enqueues a re-render of the component.
*/

/* Importing components to render inside this component */
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [ //Simulates a data base of expenses
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => { //JSX produces React “elements”
  /*
  useState During the initial render, the returned state (state) is the same as the value passed as the first argument (initialState).
  */
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = expense => { //Function which handles the creation of a new expense
    setExpenses(prevExpenses => { //uses a previous state to save it, including a new expense
      return [expense, ...prevExpenses] //The new expense comes from a child component (NewExpense)
    });
  }

  /* Using Lifting state up. Uses the closer parent component to send data between sibling components */
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} /> {/* This is how React send messages. Using props */}
      <Expenses items={expenses} />
    </div>  
  );
  /* Without using JSX it's less readable but this is the under-the-hood code */
  /* return React.createElement( //Arguments: 
    'div', //the element which should be created
    {}, //an object that configures this element (sets all the attributes). This element hasn't attributes
    React.createElement('h2', {}, 'Lets get started'), //the elements... inside 'div'
    React.createElement(Expenses, {items: expenses})
  ); */
}

export default App; //exporting App
