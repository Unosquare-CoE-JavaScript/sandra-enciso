/* This project allows us to create a list of goals, and we can delete these goals from the list 
This project uses styles in the components, but use a general document to styles the application. Using react we must to have care using this type of styling
because when we have a lot of components or elements, they can have the same className and maybe we expect different styles for these components but sharing the same className
is difficult to handle with the styles*/
import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));//App is the root component and React renders the return of this component
//Put the App component inside root element