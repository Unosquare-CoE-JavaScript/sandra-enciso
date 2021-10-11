/* Custom Redux like store implementation using only React Hooks */
import { useState, useEffect } from 'react';

/* These variables only exist once in our application lifetime, so they're shared in the entire application.
So, every other file which imports from the store.js file will use the same values which are stored here */
let globalState = {}; //Its not global, only exist here but works like global. its global and its not recreated when we call use store
let listeners = []; //Listeners are interesed in state changes, which in turn are triggered by actions in our useStore hook
let actions = {};

/* This is our custom hook */
/* Here we're not just sharing the hook logic, but also some share data */
export const useStore = (shouldListen = true) => { /* shouldListen is an argument which determines whether we actually want to register a listener for this component or not */
    
    const setState =  useState(globalState)[1]; //extracts only the function

    /* Our dispatch function makes sure that whenever we call dispatch, we update our global state */
    const dispatch = (actionIdentifier, payload) => {
        const newState = actions[actionIdentifier](globalState, payload);
        globalState = {...globalState, ...newState};

        for(const listener of listeners) {
            listener(globalState); //call our listeners. Any component which uses this hook will re-render
        }
    };

    useEffect(() => {

        if(shouldListen){
            /* Every component which uses this custom hook, will get its own setState function, which is then added to the shared listeners array */
            listeners.push(setState); //register one listener per component
        }

        return () => { //cleanup function... unregister when a component is destroyed
            listeners = listeners.filter(li => li !== setState) //remove the listeners
        }
    }, [setState, shouldListen]);

    
    return [globalState, dispatch];

};

/* Initialize our store, you can call this multiple times because we're not replacing our global state or replacing our actions. Instead, we're always taking
the curent global state and the current actions to map to emerging new data */
export const initStore = (userActions, initialState) => {
    if (initialState){
        globalState = {...globalState, ...initialState};
    }
    actions = { ...actions, ...userActions };
};