import React, { useState, useCallback } from 'react'; //useCallback store a function across component executions.

import Button from './components/UI/Button/Button';
import DemoOutput from './components/Demo/DemoOutput';

import './App.css';

/*
If a component is re-executed, all its child components will also be re-executed and re-evaluated
*/
function App() {

  const [showParagraph, setShowParagraph] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);

  console.log('APP RUNNING'); //see this whenever we clicked a button and yet.

  /* When the app function reruns useCallback will look for that stored function which React stored for us and reuse that same function object*/
  const toggleParagraphHandler = useCallback(() => {
    if(allowToggle){
      setShowParagraph(prevShowParagraph => !prevShowParagraph);
    }
  }, [allowToggle]);

  const allowToggleHandler = () => {
    setAllowToggle(true);
  }

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showParagraph} />
      <Button onClick={allowToggleHandler}>Allow Toggling</Button>
      <Button onClick={toggleParagraphHandler}>Toggle Paragraph!</Button>
    </div>
  );
}

export default App;

/*
1. SUMMARY
Whenever you change state in a component, that component where the sate changed is reevaluated, means that the component function is executed again
React simply takes the result of this latest evaluation and compares it to the previous evaluation's result and it does that for all affected components
and ReactDOM will take those changes and apply them to the real DOM in the browser, and really only those changes, nothing else.
To avoid unnecessary re-executions of child components, you can use React.memo to re-execute only if the props really changed  
*/