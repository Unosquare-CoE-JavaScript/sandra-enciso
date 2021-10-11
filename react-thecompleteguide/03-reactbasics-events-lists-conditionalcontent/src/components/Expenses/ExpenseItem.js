/* This component renders the item (expense) to be shown */
import React from 'react'; 
//useState is a function provided by React libary and allows us to define values as state where changes to these values should reflect in the component

import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css'
/* A component in react is just a JS function */

const ExpenseItem = (props) => { //You must have only a root element for return
    /* This approach of building a user interface for smaller building blocks is called composition */

    //const [title, setTitle] = useState(props.title); //useState is a React hook, and hooks can be called only inside of React component
    /* useState returns an array where the first value is the variable itself and the second is that updating function */
    //console.log('ExpenseItem evaluated by React');
    // let title = props.title;

    // //function attached to an event listener
    // const clickHandler = () => {
    //     title = 'Updated!'; //This code doesn't update the show content in JSX
    // }

    return (
        /* Custom components doesn't support className, so must be defined into component's file */
        <li>
            <Card className='expense-item'>
                <ExpenseDate date={props.date} />
                {/* You can run basic JS expressions inside {} */}
                <div className='expense-item_description'>
                    <h2>{props.title}</h2>
                    <div className='expense-item__price' >${props.amount}</div>
                </div>
            </Card>
        </li>
    )
}

export default ExpenseItem;