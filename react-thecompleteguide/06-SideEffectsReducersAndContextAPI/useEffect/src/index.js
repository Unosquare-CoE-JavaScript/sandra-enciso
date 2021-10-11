/* This project introduces to the side Effect
What is an "Effect" (or a "Side Effect")?
Data fetching, setting up a subscription, and manually changing the DOM in React components are all examples of side effects*/
/*These tasks must happen outside of the normal component evaluation nd render cycle-expecially since they might block/delay rendering (eg Http requests) */
import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));
