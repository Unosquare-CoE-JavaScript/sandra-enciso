/*
This example combine the value and the validity of email into one state managed by useReducer.
*/
import React, {useState, useEffect, useReducer, useContext, useRef } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import Input from '../UI/Input.js/Input';

import AuthContext from '../../store/auth-context';

/*
useReducer() Is great if you need "more power", it means that you can write such a reducer function that can contain more complex state updating logic where you always are
guaranteed to work with the lastest state snapshot

Problem: Passing a lot of data through a lot of components via props
Use component-wide, "behind the scenes" State Storage.
React contex. This alows us to, for example, trigger an action in that component-wide State Storage and then directly pass that to the component that is interested without building such a long prop chain
and then allow us to solve problems in  more elegant way 
*/


/* This function is declared outside, because inside of the reducer function we won't need any data that's generated inside of the component function,
So this reducer function can be created outside of the scope of this component function because it doesn't need to interact with anything defined inside of the component function.
All the data which will be required and used inside of the reducer function will be passed into this function when it's executed by React, automatically.
So that's why we can define it outside off the component function here.
*/
const emailReducer = (state, action) => {
  if(action.type === 'USER_INPUT'){
    return { value: action.val, isValid: action.val.includes('@') }
  }
  if(action.type === 'INPUT_BLUR'){
    return { value: state.value, isValid: state.value  } //state is the absolute last state snapshot
  }
  return {value: '', isValid: false}
}; //Return a new state

const passwordReducer = (state, action) => {
  if(action.type === 'USER_INPUT'){
    return { value: action.val, isValid: action.val.trim().length > 6 }
  }
  if(action.type === 'INPUT_BLUR'){
    return { value: state.value, isValid: state.value.trim().length > 6  } //state is the absolute last state snapshot
  }
  return {value: '', isValid: false}
}

const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState('');
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmail] = useReducer( emailReducer, {value: '', isValid: null} ); //This is the initial state

  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {value: '', isValid: null});

  const authCtx = useContext(AuthContext);

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const { isValid: emailIsValid } = emailState; //de-structuring with alias assignment
  const { isValid: passwordIsValid } = passwordState;

  /*
  The advantages that since now, i'm pulling out the isValid state here, whenever just the value changes and the validity did not change, this effect will not rerun. 
  */
  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log('Checking form validity!');
      setFormIsValid(
        emailIsValid && passwordIsValid
      )
    }, 500);

    return () => {
      console.log('CLEANUP');
      clearTimeout(identifier);
    }
  }, [emailIsValid, passwordIsValid]);


  const emailChangeHandler = (event) => {
    dispatchEmail({type: 'USER_INPUT', val: event.target.value});

    // setFormIsValid(
    //   event.target.value.includes('@') && passwordState.isValid
    // ) 
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({ type: 'USER_INPUT', val: event.target.value });

    setFormIsValid(
      emailState.isValid && event.target.value.trim().length > 6
    );
  };

  const validateEmailHandler = () => {
    dispatchEmail({type: 'INPUT_BLUR'});
  };

  const validatePasswordHandler = () => {
    dispatchPassword({ type: 'INPUT_BLUR' });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if(formIsValid){
      authCtx.onLogin(emailState.value, passwordState.value);
    } else if (!emailIsValid){
      emailInputRef.current.focus();
    } else {
      passwordInputRef.current.focus();
    }
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input 
          ref={emailInputRef}
          id="email"
          label="E-Mail"
          type="email"
          isValid={emailIsValid}
          value={emailState.value}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
        />
        <Input
          ref={passwordInputRef} 
          id="password"
          label="Password"
          type="password"
          isValid={passwordIsValid}
          value={passwordState.value}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
        />
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} >
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
