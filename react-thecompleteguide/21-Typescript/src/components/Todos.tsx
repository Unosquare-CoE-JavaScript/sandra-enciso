import React, { useContext } from "react";
//Using a class like a type
import TodoItem from './TodoItem';
import { TodosContext } from '../store/todos-context';

import classes from './Todos.module.css';

/* React.FC is a type definition for Functional Component  */
// const Todos: React.FC<{items: Todo[]; onRemoveTodo: (id: string) => void}> = (props) => { //We can define our own props inside <>
const Todos: React.FC = () => {   
    const todosCtx = useContext(TodosContext);

    return (
        <ul className={classes.todos}>
            {todosCtx.items.map(item => 
                <TodoItem key={item.id} text={item.text} onRemoveTodo={todosCtx.removeTodo.bind(null, item.id)} /> 
            )}
        </ul>
    )
}

export default Todos;