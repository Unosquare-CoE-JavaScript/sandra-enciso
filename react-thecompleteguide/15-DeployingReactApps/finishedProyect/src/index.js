/* this project use redux to storage a list of items to add to the cart.
use Redux to show and manipulate the cart too  */
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './store/index';
import './index.css';
import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);