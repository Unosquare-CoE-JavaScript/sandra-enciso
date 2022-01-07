import React, { useRef } from "react";

import "./NewTodo.css";

/* NewTodoProps interface defines how the props will be passed. Here, onAddTodo is passed as a function that receives a string and its return is void */
interface NewTodoProps {
  onAddTodo: (todoText: string) => void;
}

const NewTodo: React.FC<NewTodoProps> = (props) => {
  // useRef returns a mutable ref object whose .current property is initialized to the passes argument (initialValue)
  // The returned object will persist fot the full lifetime of the component.
  const textInputRef = useRef<HTMLInputElement>(null); // capture the value of the HTML element

  const todoSubmitHandler = (event: React.FormEvent) => {
    //handles the submit of the form
    event.preventDefault();
    const enteredText = textInputRef.current!.value;
    props.onAddTodo(enteredText); // executes the onAddTodo function that has been passed by props
  };

  return (
    <form onSubmit={todoSubmitHandler}>
      <div className="form-control">
        <label htmlFor="todo-text">Todo Text</label>
        <input type="text" id="todo-text" ref={textInputRef} />
      </div>
      <button type="submit">ADD TODO</button>
    </form>
  );
};

export default NewTodo;
