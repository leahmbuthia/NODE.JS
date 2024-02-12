import express, { json } from 'express';
import todos from './data/data.json' assert { type:"json" }
import bodyParser from 'body-parser'


const app=express();
const PORT =8000;
app.use(bodyParser.json())
// creating a new todo list 
app.post('/add', (req, res) => {
    const { id, tasks, completed } = req.body;
    todos.push({ id, tasks, completed });
    console.log(todos); 
    res.status(201).json({
        msg: "Todo was created successfully"
    });
});
//updating data in todos
app.put('/todos/update/:id', (req, res) => {
    const { task, priority, completed } = req.body;
    const id = req.params.id;
    
    const index = todos.findIndex(todo => Number(todo.id) === Number(id));

    if (index !== -1) {
        todos[index] = {
            ...todos[index],
            task,
            priority,
            completed
        };
        res.status(201).json({
            msg: "Updated Successfully",
            updatedTodo: todos[index]
        });
    } else {
        res.status(404).json({
            msg: "Todo not found"
        });
    }
});




// Define a route to fetch all todos
app.get('/todos', (req, res) => {
    console.table(todos);
    res.json(todos); 
});
// Define a route to fetch a specific todo by ID
app.get('/todos/:id',(req,res)=>{
    const id=req.params.id
    console.log(id);
    const todo=todos.find(todo=>Number(todo.id)==id)
    res.status(200).json(todo)
});

app.delete('/todos/:id', (req, res) => {
    const id = req.params.id;
    console.log(id);
    const index = todos.findIndex(todo => Number(todo.id) === Number(id));
    if (index !== -1) {
        todos.splice(index, 1); 
        res.status(203).json({ msg: "Todo deleted successfully" });
    } else {
        res.status(404).json({ msg: "Todo not found" });
    }
});
  

app.listen(PORT, (req, res)=>{
    console.log(`This App is running on port http://localhost/:${PORT}`);
})