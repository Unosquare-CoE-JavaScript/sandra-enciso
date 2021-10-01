/* This component handles the addition of a new user, shows errors, etc. */
import React, { useState, useRef } from 'react';
/* const refContainer = useRef(initialValue);
useRef returns a mutable ref object whose .current property is initialized to the passed argument (initialValue). 
The returned object will persist for the full lifetime of the component. */

import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';

import Wrapper from '../Helpers/Wrapper';

import classes from './AddUser.module.css';


const AddUser = props => {
    const nameInputRef = useRef();
    const ageInputRef = useRef();
    /* useRef returns a value which allows us to work with that ref later */

    const [error, setError] = useState();

    const addUserHandler = (e) => {
        e.preventDefault();

        const enteredName = nameInputRef.current.value;
        const enteredUserAge = ageInputRef.current.value;

        if(enteredName.trim().length === 0 || enteredUserAge.trim().length === 0){
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid name and age (non-empty values).'
            });
            return;
        }

        if(+enteredUserAge < 1){
            setError({
                title: 'Invalid age',
                message: 'Please enter a valid age (> 0).'
            });
            return;
        }
        props.onAddUser(enteredName, enteredUserAge); //Executes the function sended by the parent component
        nameInputRef.current.value = '';
        ageInputRef.current.value = '';
    }

    const errorHandler = () => {
        setError(null);
    }

    return(
        <Wrapper>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />}
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username" >Username</label>
                    <input 
                        id="username" 
                        type="text" 
                        ref={nameInputRef} /* here are referred the values */
                    />
                    <label htmlFor="age" >Age (Years)</label>
                    <input 
                        id="age" 
                        type="number" 
                        ref={ageInputRef}    
                    />
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </Wrapper>
        
    )
};

export default AddUser;