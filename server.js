import express from "express";
import Cors from 'cors';
import mongoose from 'mongoose';
import 'dotenv/config';
import Product from "./models/productsScheme.js";
//App Config
const app = express();
const port = process.env.PORT || 5000;
const connection_url = `mongodb+srv://tinderadmin:${process.env.REACT_APP_PASSWORD}@cluster0.g0dgp.mongodb.net/shoppingCartdb?retryWrites=true&w=majority`

//Middlewares
app.use(express.json());
app.use(Cors());

//DB Config
async function connectingDB () {
    await mongoose.connect(connection_url)
    .then( ()=> console.log('connected to DB'))
    .then ( ()=> app.listen(port, ()=> {console.log(`Listening on port : ${port}`)} ))
    .catch( (err)=> console.log('err'));
}
connectingDB();

//API Endpoints
app.get('/', (req, res)=>{
    res.status(200).send('Shopping Cart Back-end in Live.');
})

app.post('/products', (req, res) => {
    const db = req.body;
    Product.create(db, ( err, data ) => {
        if (err) {
            res.status(500).send(err);
        }
        else if (data) {
            res.status(201).send(data);
        }
    })
})
app.get('/products', (req, res) => {
    Product.find( (err, data) => {
        if (err) {
            res.status(404).send(err);
        }
        else res.status(200).send(data);
    })
})
app.get('/productDetails/:productId', (req, res) => {
    const id = req.body.id;
    console.log(id);
})
//Listner