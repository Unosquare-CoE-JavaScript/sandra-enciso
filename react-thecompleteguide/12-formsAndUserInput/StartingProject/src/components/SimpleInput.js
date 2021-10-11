/*
If you need the entered value after every keystroke, for exaple, for instant validation, then using the state is better.
Another reason for using a state instead of a ref could be if you want to reset the entered input.
*/

/*
if the input is invaid and was touched, we wanna show the user an error, otherwise we don't want to do that.
 */
import { useState } from "react";

const SimpleInput = (props) => {
  /* create a state for every input */
  const [enteredName, setEnteredName] = useState('');
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== '';
  const nameInputIsValid = !enteredNameIsValid && enteredNameTouched;

  const enteredEmailIsValid = enteredEmail.includes('@');
  const enteredEmailIsInvalid = !enteredEmailIsValid && enteredEmailTouched;

  let formIsValid = false;

  if(enteredNameIsValid && enteredEmailIsValid){ //check if the form is valid
    formIsValid = true;
  }

  // useEffect(() => {
  //   if(enteredNameIsValid){
  //     setFormIsValid(true);
  //   }else{
  //     setFormIsValid(false);
  //   }
  // }, [enteredNameIsValid]);

  /* These functions changes the state every keystroke */
  const nameInputChangeHandler = e => {
    setEnteredName(e.target.value);
  }

  const emailInputChangeHandler = e => {
    setEnteredEmail(e.target.value);
  };

  const nameInputBlurHandler = e => {
    setEnteredNameTouched(true);
  }

  const emailInputBlurHandler = e => {
    setEnteredEmailTouched(true);
  }

  /* This function handles the submission of the form */
  const formSubmissionHandler = e => {
    e.preventDefault(); //prevents the default behavior

    setEnteredNameTouched(true);
    
    if(!enteredNameIsValid){ 
      return;
    }

    console.log(enteredName);
    setEnteredName('');
    setEnteredNameTouched(false);

    setEnteredEmail('');
    setEnteredEmailTouched(false);
  }


  // const nameInputRef = useRef();
  // const [enteredName, setEnteredName] = useState('');
  // const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
  // const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  // const nameInputChangeHandler = e => {
  //   setEnteredName(e.target.value);

  //   if (enteredName.trim() !== ''){
  //     setEnteredNameIsValid(true);
  //     return; //stop with the execution.
  //   }
  // };

  // const nameInputBlurHandler = e => {
  //   setEnteredNameTouched(true);

  //   if (enteredName.trim() === ''){
  //     setEnteredNameIsValid(false);
  //     return; //stop with the execution.
  //   }
  // }

  // const formSubmissionHandler = e => {
  //   e.preventDefault();

  //   setEnteredNameTouched(true);

  //   if (enteredName.trim() === ''){
  //     setEnteredNameIsValid(false);
  //     return; //stop with the execution.
  //   }

  //   console.log(enteredName);
  //   const enteredValue = nameInputRef.current.value;
  //   console.log(enteredValue);

  //   nameInputRef.current.value = ''; //This is not an ideal way of doing it. We're manipulating the DOM here
  //   setEnteredName('');
  // };

 

  const nameInputClasses = nameInputIsValid 
    ? 'form-control invalid' 
    : 'form-control';

  const emailInputClasses = enteredEmailIsInvalid 
    ? 'form-control invalid' 
    : 'form-control';

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input 
          /* ref={nameInputRef} */
          type='text' 
          id='name' 
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
          value={enteredName}
        />
        {nameInputIsValid && <p className="error-text">Name must not be empty.</p>}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='name'>Your E-Mail</label>
        <input 
          /* ref={nameInputRef} */
          type='email' 
          id='email' 
          onChange={emailInputChangeHandler}
          onBlur={emailInputBlurHandler}
          value={enteredEmail}
        />
        {nameInputIsValid && <p className="error-text">Please enter a valid email.</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;

/*
When to validate?
When form is submitted,  when a input is losing focus, on every keystroke
*/