/* This file is that React runs first. */
import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App'; //imports App component which contains all our UI

//This instruction takes two arguments, the first argument is our component that we want to show, the second argument is "where" we want to show our component.
ReactDOM.render(<App />, document.getElementById('root'));

/* 

What is React? And Why Would We Use It?
React is a JS library for building interfaces.
React interfaces feels like a mobile app, because mobile apps give us great highly reactive user experience.
Mobile apps and desktop apps feel very "reactive": Things happen instantly, you don't wait for new pages to load or actions to start.
Traditionally, in web apps, you click a link and wait for a new page to load. You click a button and wait for some action to complete

Single Page Applications (SPAs)
React is used to control the entire frontend of a web application. So the SPA approach is when the server only sends one HTML page, thereafer, React takes over and controls the UI
*/