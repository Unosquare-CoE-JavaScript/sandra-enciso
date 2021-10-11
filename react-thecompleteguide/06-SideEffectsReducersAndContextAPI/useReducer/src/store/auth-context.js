/* This manages the entire login state in this AuthContextProvider component and which also sets up all the context 
And the advntage here could be, now we can strip that all out of App component
*/
/*
Context Limitations
useContext can be great for app-wide or component-wide state, so essentialy state that affects multiple components.
It's not a replacement for component configuration.
So use props for configuration and context for state management across components or possibly across the entire app.
Limitations. React Context is specifically not optimized for high frequency changes. That means, for exaple, if you have state changes that does not change that often, use Context
But if you have state changes that happen much more frequently (multiple changes per second and so on) then React Context is not optimized for that.
React Context also shouldn't be used to replace ALL component communications and props.
Component should still be configurable via props and short "prop chains" might not need any replacement.
 */
import React, { useEffect, useState } from "react";

/* The rules of hooks
Only Call Hooks at the Top Level 
Only Call Hooks from React Functions (function components and custom hooks) */

const AuthContext = React.createContext({ //This is out initial state
    isLoggedIn: false,
    onLogout: () => {},
    onLogin: (email, password) => {}
});

export const AuthContextProvider = (props) => { /* Here is all our logic to share to other components */
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    /* Here uses the localStorage (Browser) to store/check if the session is active */
    useEffect(() => {
        const storedUserLoggedInInformation = localStorage.getItem('isLoggedIn');
    
        if (storedUserLoggedInInformation === '1') { // if in localStorage exists the isLoggedIn and the value is 1
          setIsLoggedIn(true); //then the state of isLoggedIn is true
        }
    }, []); //no dependencies, so it is treated like componentDidMount

    const logoutHandler = () => { //function that handles the logout of the user
        localStorage.removeItem('isLoggedIn'); //remove form the localStorage
        setIsLoggedIn(false);
    };

    const loginHandler = () => { //function thath handles the login of the user
        localStorage.setItem('isLoggedIn', '1'); // set or "create" to localStorage
        setIsLoggedIn(true);
    }

    return (
        /* Here returns the autcontext provider and the components that want to listen the context, then will be wrapped by this */
        <AuthContext.Provider 
            value={{
                isLoggedIn: isLoggedIn, 
                onLogout: logoutHandler
            }} 
        >
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext;