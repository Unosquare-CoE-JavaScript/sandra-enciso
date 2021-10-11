
/*
const [state, setState] = useState(initialState);
Returns a stateful value, and a function to update it.
During the initial render, the returned state (state) is the same as the value passed as the first argument (initialState).
The setState function is used to update the state. It accepts a new state value and enqueues a re-render of the component.
React guarantees that setState function identity is stable and won’t change on re-renders.
This is why it’s safe to omit from the useEffect or useCallback dependency list.
*///imports React and the core hook useState.
import React, { useState } from 'react';

import CourseGoalList from './components/CourseGoals/CourseGoalList/CourseGoalList';
import CourseInput from './components/CourseGoals/CourseInput/CourseInput';
import './App.css';

const App = () => {
  const [courseGoals, setCourseGoals] = useState([ //Here we use useState to store the goals of the course
    { text: 'Do all exercises!', id: 'g1' },
    { text: 'Finish the course!', id: 'g2' }
  ]);

  const addGoalHandler = enteredText => { //function that add a new goal to the state of goals
    setCourseGoals(prevGoals => { //When we must to update the state usinig a previous value of the state, we have to use a function that use the prev state
      const updatedGoals = [...prevGoals]; //We must not change directly the state, we must to create a new value to the state.
      updatedGoals.unshift({ text: enteredText, id: Math.random().toString() }); //The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.
      return updatedGoals; //Returns the new value of the state
    });
  };

  const deleteItemHandler = goalId => { //function that remove a goal from the state
    setCourseGoals(prevGoals => { //using the prev state to create a new value for the state
      const updatedGoals = prevGoals.filter(goal => goal.id !== goalId); //The filter() method creates a new array with all elements that pass the test implemented by the provided function.
      return updatedGoals; //Returns the new value of the state
    });
  };

  /* Rendering conditional content. We can store JSX code in a variable, to then return o use this value */
  let content = (
    <p style={{ textAlign: 'center' }}>No goals found. Maybe add one?</p> //By default, no goals stored
  );

  if (courseGoals.length > 0) { // if goals length is greather than 0. then render a list of these goals
    content = (
      <CourseGoalList items={courseGoals} onDeleteItem={deleteItemHandler} /> //use the imported component CourseGoalList and sends by props the list of the goals and functions
    );
  }

  return (
    <div>
      <section id="goal-form">
        <CourseInput onAddGoal={addGoalHandler} />
      </section>
      <section id="goals">
        {content}
        {/* {courseGoals.length > 0 && (
          <CourseGoalList
            items={courseGoals}
            onDeleteItem={deleteItemHandler}
          />
        ) // <p style={{ textAlign: 'center' }}>No goals found. Maybe add one?</p>
        } */}
      </section>
    </div>
  );
};

export default App;
