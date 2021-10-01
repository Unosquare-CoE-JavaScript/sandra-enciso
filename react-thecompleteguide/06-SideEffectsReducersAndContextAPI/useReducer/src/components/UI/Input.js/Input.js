import React, { useRef, useImperativeHandle } from 'react';

import classes from './Input.module.css';

const Input = React.forwardRef((props, ref) => { //Input is now a component that is capable of being bound to ref

    const inputRef = useRef();

    const activate = () => {
        inputRef.current.focus();
    }

    /*
    with the useImperativeHandle and forwardRef, you can expose functionalities from a React Component to its parent Component to then use your Component in the parent Component
    through refs and trigger certain functionalities
    */
    useImperativeHandle(ref, () => {
        return {
            focus: activate //points at the internl function that should be accesible from outside through that name
        }
    });

    return (
        <div
            className={`${classes.control} ${
                props.isValid === false ? classes.invalid : ''
            }`}
        >
            <label htmlFor={props.id}>props.label</label>
            <input
                ref={inputRef}
                type={props.type}
                id={props.id}
                value={props.value}
                onChange={props.onChange}
                onBlur={props.onBlur}
            />
        </div>
    )
});

export default Input;