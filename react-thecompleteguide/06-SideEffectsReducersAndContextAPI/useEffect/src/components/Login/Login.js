/*
what to add and not to add as dependencies (useEffect)
-You dont need to add state updating functions.
-"build-in" APIs or functions likee fetch(), localStorage, etc
-Variables or functions you might've defined OUTSIDE of your components.

You must add all things you use in your effect function if those "things" could change because your component (or some parent component) re-redered.
That's why variables or state defined in component functions, props or functions defined in component functions have to be added as dependencies!
*/

import React, { useState, useEffect } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';

const Login = (props) => {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [emailIsValid, setEmailIsValid] = useState();
  const [enteredPassword, setEnteredPassword] = useState('');
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);




  useEffect(() => {
    console.log('EFFECT RUNNING');

    return () => { //we might want to set up a subscription to some external data source. 
      //In that case, it is important to clean up so that we don’t introduce a memory leak! so use the cleanup. This acts like componentDidUnmount
      console.log('EFFECT CLEANUP');
    }
  }, [enteredPassword]);

  /*debouncing */
  useEffect(() => {
    
    const identifier = setTimeout(() => {
      console.log('Checking form validity!');
      setFormIsValid(
        enteredEmail.includes('@') && enteredPassword.trim().length > 6
      );
    }, 500);
    return () => { //whenever the cleanup function runs, I clear the timer that was set before this cleanup function ran,
      console.log('CLEANUP');
      clearTimeout(identifier);
    };//cleanup process
  }, [enteredEmail, enteredPassword]);
  /* After every login component function execution, it will rerun this useEffect function but only if either enteredEmail, or enteredPassword 
  changed in the last component rerender cycle. If neither of the three changed, this effect funtion will not rerun*/

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);

    setFormIsValid(
      event.target.value.includes('@') && enteredPassword.trim().length > 6
    );
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);

    setFormIsValid(
      enteredEmail.includes('@') && event.target.value.trim().length > 6
    );
  };
  
  const validateEmailHandler = () => {
    setEmailIsValid(enteredEmail.includes('@'));
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(enteredEmail, enteredPassword);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailIsValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={enteredEmail}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordIsValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={enteredPassword}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
