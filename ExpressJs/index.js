import express from 'express';
import usersDb from './data/data.json' assert { type:"json" }
import bodyParser from 'body-parser'

const app = express();
const port = 8000;

// Middlewares
app.use(bodyParser.json());

// Health Check
app.get('/health', (req, res) => {
    res.status(200).send('I am very healthy');
});

// Serving Static Files
app.use('/images', express.static('images'));

// Download File
app.get('/download', (req, res) => {
    res.download('./images/Avatar (2).png');
});

// CRUD Operations

// Create a user
app.post('/user', (req, res) => {
    if (!req.body) {
        res.status(400).send('Missing body params');
    } else {
        const { name, age, home } = req.body;
        usersDb.push({ name, age, home });
        res.status(201).json(usersDb);
    }
});

// Read all users
app.get('/user', (req, res) => {
    res.status(200).json(usersDb);
});

// Read user by age
app.get('/user/:userId', (req, res) => {
    const user = usersDb.find(user => user.age == req.params.userId);
    if (!user) {
        res.status(404).json({ msg: "User not found" });
    } else {
        res.status(200).json(user);
    }
});

// Read users by age filter
app.get('/userFilter/:userId', (req, res) => {
    const users = usersDb.filter(user => user.age >= req.params.userId);
    res.status(200).json(users);
});

// Update user by age
app.put('/user/:userAge', (req, res) => {
    const userAge = Number(req.params.userAge);
    const updatedUser = usersDb.map(user => {
        if (user.age === userAge) {
            Object.assign(user, req.body);
            return user;
        }
        return user;
    });
    res.status(200).json(updatedUser);
});

// Delete user by age
app.delete('/user/:userId', (req, res) => {
    const userId = req.params.userId;
    const usersAfterDeletion = usersDb.filter(user => user.age != userId);
    res.status(200).json(usersAfterDeletion);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
