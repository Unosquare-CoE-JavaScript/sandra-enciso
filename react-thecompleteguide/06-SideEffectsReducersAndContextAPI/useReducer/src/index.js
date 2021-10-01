/* This project introduces to useContext and useReducer */
import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import { AuthContextProvider } from './store/auth-context';

/*
  AuthContext.Provider is a component which we can use in our JSX code and we can wrap it around other components, and those other components and all ther descendant components.
  So all their children and their childrens, and all those components will now have access to that context
  */

ReactDOM.render(
    <AuthContextProvider>
        <App />
    </AuthContextProvider>, 
    document.getElementById('root')
);

/* context is ready to be used for low frequency unlikely updates (like locale/theme). It's also good to use it in the same ways as old context was used. ie. for static values
and then propagate updates through susbcriptions. It's not ready to be used as replacement for all flux-like state propagation. */
