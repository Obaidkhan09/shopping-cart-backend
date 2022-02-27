import express from "express";
import Cors from 'cors';


//App Config
const app = express();
const port = process.env.PORT || 5000;

//Middlewares
app.use(express.json());
app.use(Cors());

//DB Config

//API Endpoints
app.get('/', (req, res)=>{
    res.status(200).send('Hello..!');
})

app.get('/products', (req, res) => {
    res.status(200).send(data);
})

//Listner
app.listen(port, ()=> {console.log(`Listening on port : ${port}`)} )