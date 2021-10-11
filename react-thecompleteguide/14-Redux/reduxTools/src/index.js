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
