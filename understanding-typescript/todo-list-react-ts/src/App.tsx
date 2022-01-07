import React, { useState } from "react";
//import { Route } from "react-router-dom";

import TodoList from "./components/TodoList";
import NewTodo from "./components/NewTodo";
import { Todo } from "./todo.model";
//Creates a todo model which ensures all the elements that will be stored  has the correct content

const App: React.FunctionComponent = () => {
  //const [todos, setTodos] = useState([]); // TS inferred that our state initally is an empty array always
  const [todos, setTodos] = useState<Todo[]>([]); // This stores a todos array

  // This is a function component in React
  const todoAddHandler = (text: string) => { //Takes the old todos and merges it with the new todo
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: Math.random().toString(), text: text },
    ]);
  };

  //Filters the todo list to return a new list without the item we want to delete
  const todoDeleteHandler = (todoId: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== todoId); //returns a new array without the todoId passed
    });
  };

  return (
    <div className="App">
      <NewTodo onAddTodo={todoAddHandler} />  {/* Pass the todoAddHAndler function and then be accessed by the onAddTodo property */}
      <TodoList items={todos} onDeleteTodo={todoDeleteHandler} /> {/* Pass the todoDeleteHandler function and then be accessed by the onDeleteTodo property */}
    </div>
  );
};

export default App;
