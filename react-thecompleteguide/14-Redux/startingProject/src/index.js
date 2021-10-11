/* This project introduces to Redux */
/*
What is Redux?
A state management system for cross-component or app-wide state

React Context Disadvantages
Complex Setup/Management
In more complex apps, managing ReactContext can lead to deeply nested JSX code and/or huge "Context Provider" components.

Performance
React Context is not optimized for high-frequency state changes

Core Redux Concepts
Redux is a Central Data (State) Store and components subscribes to it

IMPORTANT - Components never directly manipulate the store data
*/
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import store from './store/index';

ReactDOM.render(<Provider store={store} ><App /></Provider>, document.getElementById('root'));

/*
You could also wrap nested components with provider, but only wrapped components and their child components will have access to Redux
Redux is included in redux tools
*/
