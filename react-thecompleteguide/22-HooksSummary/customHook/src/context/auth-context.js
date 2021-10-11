/* Our context to authentication */
import React, { useState } from 'react';

export const AuthContext = React.createContext({ //initial context
  isAuth: false,
  login: () => {}
});

const AuthContextProvider = props => { 
  const [isAuthenticated, setIsAuthenticated] = useState(false); //manages the state (is logged or not)

  const loginHandler = () => { //handles the loggin
    setIsAuthenticated(true);
  };

  return (
    <AuthContext.Provider
      value={{ login: loginHandler, isAuth: isAuthenticated }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;