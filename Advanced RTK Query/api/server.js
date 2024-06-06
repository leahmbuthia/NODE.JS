import express from 'express';
import axios from 'axios';
import bodyParser from 'body-parser';
import logger from './src/utils/logger.js';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();
const port = process.env.PORT || 3000;
const app = express();
var corsOptions = {
    origin: 'http://localhost:5173',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

//middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors(corsOptions));

app.get('/health', (req, res) => {
    res.status(200).send('I am very healthy💪');
});

// Fetch posts from JSONPlaceholder API
app.get('/api/posts', async (req, res) => {
    try {
        const response = await axios.get(' http://localhost:8000/api/posts');
        res.status(200).json(response.data);
    } catch (error) {
        logger.error('Error fetching posts:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Fetch a single post by ID from JSONPlaceholder API
app.get('/api/posts/:id', async (req, res) => {
    const postId = req.params.id;
    try {
        const response = await axios.get(` http://localhost:8000/api/posts${postId}`);
        res.status(200).json(response.data);
    } catch (error) {
        logger.error(`Error fetching post with ID ${postId}:`, error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.listen(port, () => {
    logger.info(`server running on http://localhost:${port} `);
});
