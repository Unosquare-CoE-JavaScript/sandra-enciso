/*
const [state, dispatch] = useReducer(reducer, initialArg, init);
An alternative to useState. 
Accepts a reducer of type (state, action) => newState, and returns the current state paired with a dispatch method. (If you’re familiar with Redux, you already know how this works.)
useReducer is usually preferable to useState when you have complex state logic that involves multiple sub-values or when the next state depends on the previous one. 
useReducer also lets you optimize performance for components that trigger deep updates because you can pass dispatch down instead of callbacks.
*/
import { useReducer } from "react";

const initialInputState = {
    value: '',
    isTouched: false   
};

/* every action has a type, so we make a comparision to then dispatch the action */
const inputStateReducer = (state, action) => {
    if(action.type === 'INPUT'){
        return { value: action.value, isTouched: state.isTouched };
    }
    if(action.type === 'BLUR'){
        return { value: state.value, isTouched: true };
    }
    if(action.type === 'RESET'){
        return { value: '', isTouched: false };
    }
    return initialInputState;
}

const useInput = (validateValue) => {
    const [inputState, dispatch] = useReducer(inputStateReducer, initialInputState)

    const valueIsValid = validateValue(inputState.value);
    const hasError = !valueIsValid && inputState.isTouched;

    const valueChangeHandler = e => {
        dispatch({type: 'INPUT', value: e.target.value});
    }

    const inputBlurHandler = e => {
        dispatch({type:'BLUR'});
    }

    const reset = e => {
        dispatch({type: 'RESET'});
    }

    /*
    These functions which are dfined in the hook can be called from the place where to hook is being used
    */
    return {
        value: inputState.value,
        isValid: valueIsValid,
        hasError, 
        valueChangeHandler, 
        inputBlurHandler,
        reset
    }
}

export default useInput;