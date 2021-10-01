import React from 'react';
import ReactDOM from 'react-dom';
/* react router dom allows us to handle URLs and change what is visible on the screen without fetching new HTML pages */
import { BrowserRouter } from 'react-router-dom'
/* BrowserRouter is a component and you can use it as a HTML element */

import './index.css';
import App from './App';
import { FavoritesContextProvider } from './store/favorites-context';

ReactDOM.render(
    /* All the components in this application are able to interact with this context  */
    <FavoritesContextProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </FavoritesContextProvider>, 
    document.getElementById('root')
);
