import { Router } from "express";
import {
  createTodo,
  getTodos,
  updateTodo,
  deleteTodo,
} from "../controllers/todos";

const router = Router(); // this allows us to register middlewares

router.post("/", createTodo); // allows to add a new todo
router.get("/", getTodos); // gets all todos
router.patch("/:id", updateTodo); //updates a todo
router.delete("/:id", deleteTodo); //deletes a todo

export default router;
