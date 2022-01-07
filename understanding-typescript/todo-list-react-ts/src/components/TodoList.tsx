import React from "react";

import "./TodoList.css";

/* TodoListProps interface defines how the props will be passed. Here receives an array of objects and a function called onDeleteTodo*/
interface TodoListProps {
  items: { id: string; text: string }[];
  onDeleteTodo: (id: string) => void;
}

/* Renders a list of todos. When an item is clicked then the onDeleteTodo is executed  */
const TodoList: React.FC<TodoListProps> = (props) => {
  return (
    <ul>
      {props.items.map((todo) => (
        <li key={todo.id}>
          <span>{todo.text}</span>
          <button onClick={props.onDeleteTodo.bind(null, todo.id)}>
            DELETE
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
