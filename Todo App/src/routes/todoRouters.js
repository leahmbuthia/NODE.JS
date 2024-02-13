import { Router } from 'express';
import { getTodoById, createTodo, deleteTodo, getTodos, updateTodo, completeTodo } from "../controllers/todoController.js";
const todoRouter = Router();
    todoRouter.get('/todos', getTodos);
    todoRouter.post('/todos', createTodo);
    todoRouter.put('/todos/:id', updateTodo);
    todoRouter.get('/todos/:id', getTodoById);
    todoRouter.delete('/todos/:id', deleteTodo);
    todoRouter.patch('/todos/:id', completeTodo);



export default todoRouter;