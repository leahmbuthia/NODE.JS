import express from 'express';

const app = express();
const port = 8000;
//middlewares

app.get('/health', (req, res) => {
    res.status(200).send('I am healthy wooow');
});
app.get('/health', (req, res) => {
    res.status(200).send('I this is my work');
});
app.use('/Images', express.static('images'));

//get download method 
app.get('/download' , (req ,res)=>{
    res.download('./images/Avatar (1)');
})
 


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});


app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
});
