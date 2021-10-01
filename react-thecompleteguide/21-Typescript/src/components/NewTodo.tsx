import React, { useRef, useContext } from "react";
import { TodosContext } from "../store/todos-context";

import classes from './NewTodo.module.css';

//const NewTodo: React.FC<{onAddTodo: (text: string) => void}> = (props) => {
const NewTodo: React.FC = () => {
    const todosCtx = useContext(TodosContext);

    const todoTextInputRef = useRef<HTMLInputElement>(null);

    const submitHandler = (e: React.FormEvent) => {
        e.preventDefault();
        //const enteredText = todoTextInputRef.current?.value; //the question mark is for the ref is not necessarily set to a value yet when we use it
        const enteredText = todoTextInputRef.current!.value; //exclamation mark tells TypeScript that you know that this possibly nullish value will never be null in this spot. 

        if(enteredText.trim().length === 0){
            //throw an error
            return;
        }
        
        todosCtx.addTodo(enteredText);
        //props.onAddTodo(enteredText);
    };

    return (
        <form onSubmit={submitHandler} className={classes.form}>
            <label htmlFor='text'>Todo text</label>
            <input type='text' id='text' ref={todoTextInputRef} />
            <button>Add Todo</button>
        </form>
    )
};

export default NewTodo;