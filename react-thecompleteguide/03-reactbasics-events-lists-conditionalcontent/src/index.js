/* This proyect creates a bar graph that shows the behavior of a list of expenses through years */
//This is the file which runs first (The Main File)

import React from 'react'; //imports React and React Dom to create and render components
import ReactDOM from 'react-dom';

import './index.css'; //Importing a css file into a js file, css file for all our application
import App from './App'; //App is a component (The Root component). For JS files, the extension can be ommited


ReactDOM.render( //App is the root component and React renders the return of this component
  <React.StrictMode>
    <App /> 
  </React.StrictMode>,
  document.getElementById('root') //Put the App component inside root element
); //default JS DOM calling

/*
React is a JavaScript library for building user interfaces
React makes buildong complex, interactive and reactive user interfaces simpler
Component-Driven User Interfaces
Components are reusable building blocks in your user interface
Building Interactive And Scalable UIs

Why use components?
Reusability - Don't repeat yourself. 
Separation of Concerns - Don't do too many things in one and the same place (function)
Split big chunks of code into multiple smaller functions

React and Components
React allows you to create re-usable and reactive components consisting of HTML and JavaScript (and CSS)
Uses Declarative Approach. You will not tell React that a cetain HRML element should be created and inserted in a specific place on user interface as you would be doing it with vanilla JS

package.json
in the end holds al the dependencies of this project

npm install
goes to the package.json file and download and install all the required packages and dependecies into this project folder
*/  