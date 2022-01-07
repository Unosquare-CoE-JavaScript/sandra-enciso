import { RequestHandler } from "express"; // here is just importing a type, it isnt code

import { Todo } from "../models/todo";

const TODOS: Todo[] = []; //simulates TODOS from a data base

export const createTodo: RequestHandler = (req, res, next) => {
  const text = (req.body as { text: string }).text; // we expected a string here, so we do the cast
  const newTodo = new Todo(Math.random().toString(), text);

  TODOS.push(newTodo);
  res.status(201).json({ message: "Created the todo.", createTodo: newTodo }); //201 code indicates that is successful
};

export const getTodos: RequestHandler = (req, res, next) => {
  res.json({ todos: TODOS });
};

export const updateTodo: RequestHandler<{ id: string }> = (req, res, next) => {
  const todoId = req.params.id;

  const updatedText = (req.body as { text: string }).text;

  const todoIndex = TODOS.findIndex((todo) => todo.id === todoId);

  if (todoIndex < 0) {
    throw new Error("Could not find todo!");
  }

  TODOS[todoIndex] = new Todo(todoId, updatedText);

  res.json({ message: "Updated!", updatedTodo: TODOS[todoIndex] });
};

export const deleteTodo: RequestHandler<{ id: string }> = (req, res, next) => {
  const todoId = req.params.id;

  const todoIndex = TODOS.findIndex((todo) => todo.id === todoId);

  if (todoIndex < 0) {
    throw new Error("Could not find todo!");
  }

  TODOS.splice(todoIndex, 1);

  res.json({ message: "Todo deleted!" });
};
