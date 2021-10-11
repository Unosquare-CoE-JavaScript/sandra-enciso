/*
This component render only an item and can be reused by other components
*/
import React from 'react';

import './CourseGoalItem.css';

const CourseGoalItem = props => {
  // const [deleteText, setDeleteText] = useState('');

  const deleteHandler = () => {
    // setDeleteText('(Deleted!)');
    props.onDelete(props.id); //executes the function passed by the props from the parent component
  };

  return ( //renders an element li which contains a goal
    <li className="goal-item" onClick={deleteHandler}>
      {props.children} {/* renders the prop children */}
    </li>
  );
};

export default CourseGoalItem;
