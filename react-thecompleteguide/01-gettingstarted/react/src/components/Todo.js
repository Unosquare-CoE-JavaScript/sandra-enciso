/* This code is the responsible to render the todos */
/*
We dont have a bunch of step by step instructions here like in pure Js 
*/
/* Rules of the Hooks: 1. Only calls hooks at the Top level. 2. Only call hooks from react functions or custom hooks */
import { useState } from 'react'; //UseState is the core hook of React
/* When to use useState?
When we want to register different States to our application. React will react to changes in these states and allows us to render different components depending on which state is active*/

/* Imports other components to be rendered in this Todo component */
import Backdrop from './Backdrop';
import Modal from './Modal';

/* Here renders the Todo Component */
function Todo(props) { //props is a parameter that is passed by the component which renders this component
  //The name of the function should start with a capital character to differentiate it from the built-in HTML elements
  const [showModal, setShowModal] = useState(false); //the initial state is 'false'
  //This hook returns an array with two elements, the first is the value of our state and the second is the function that allows us to change the state value

  function showModalHandler() {
    setShowModal(true); /*Whenever you call this state changing function, React will in the end re-execute the component function to which this state belongs and re-evaluated 
    and update what is rendered on the screen*/
  }

  function closeModalHandler() {
    setShowModal(false);
  }

  /* JSX  is a syntax extension to JavaScript. Its used with React to describe what the UI should look like. JSX is like a template language but it comes with the full powe of JS
  JSX produces React "elements" */
  return (
    <div className='card'>
      <h2>{props.text}</h2> {/* Here uses text prop */}
      <div className='actions'>
        <button className='btn' onClick={showModalHandler}>{/* Points to a function. When clicks the button, showModalHandler is excuted */}
          Delete
        </button>
      </div>
      {showModal && <Backdrop onClick={closeModalHandler} />} {/* renders conditionally and depends of the showModal state value */}
      {showModal && <Modal text='Are you sure?' onClose={closeModalHandler} />}
    </div>
  );
}

export default Todo;
/* You must to export your function to then be accessible from another files */