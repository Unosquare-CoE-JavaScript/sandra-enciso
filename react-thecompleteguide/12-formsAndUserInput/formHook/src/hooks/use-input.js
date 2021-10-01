import { useState } from "react";
/*
Keep in mind that the hook (and custom hooks in general) should be generic - it's not limited to one specific input!
*/
const useInput = (validateValue) => {
    const [enteredValue, setEnteredValue] = useState('');
    const [isTouched, setIsTouched] = useState(false);

    const valueIsValid = validateValue(enteredValue);
    const hasError = !valueIsValid && isTouched;

    const valueChangeHandler = e => {
        setEnteredValue(e.target.value);
    }

    const inputBlurHandler = e => {
        setIsTouched(true);
    }

    const reset = e => {
        setEnteredValue('');
        setIsTouched(false);
    }

    /*
    These functions which are dfined in the hook can be called from the place where to hook is being used
    */
    return {
        value: enteredValue,
        isValid: valueIsValid,
        hasError, 
        valueChangeHandler, 
        inputBlurHandler,
        reset
    }
}

export default useInput;