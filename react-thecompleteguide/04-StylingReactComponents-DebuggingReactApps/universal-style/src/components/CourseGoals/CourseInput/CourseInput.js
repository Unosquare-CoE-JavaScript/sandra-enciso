/* This component is a form where we can submit a new course goal */
import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = props => {
  /* useState to storage the entered value (new couse goal) */
  const [enteredValue, setEnteredValue] = useState('');

  const goalInputChangeHandler = event => { //This function handles the changing of the value of the input which contains the new goal, is capturing every keystroke
    setEnteredValue(event.target.value); //Gets every keystroke using the event arg and assign a new state
  };

  const formSubmitHandler = event => { //Function which handles the form submit
    event.preventDefault(); //prevents the default behavior
    props.onAddGoal(enteredValue); //executes the function passed by props
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
