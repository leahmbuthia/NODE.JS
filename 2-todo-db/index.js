import  express  from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import logger from './src/utils/logger.js'


dotenv.config();
const app = express();
const PORT =process.env.PORT || 3000;


//MIDDLEWARES

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));



app.listen(PORT, ()=>
{
 logger.info('server is running on port ${PORT}');
})