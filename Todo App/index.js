import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import logger from './src/utils/logger.js';
import todoRouter from './src/routes/todoRouters.js';


dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

//middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/health', (req, res) => {
    res.status(200).send('I am very healthy💪');
});

app.use('/api', todoRouter);

app.listen(port, () => {
    logger.info(`server running on port http://localhost:${port}`);
})