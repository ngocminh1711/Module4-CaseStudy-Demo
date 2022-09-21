import express from 'express';
import * as path from "path";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import userRouter from "./routers/user.router";
import {ConnectDB} from "./models/ConnectDB";
import productRouter from "./routers/product.router";



const PORT = 8000;

const app = express();

app.set('view engine', 'ejs');
app.set('views', './src/views');

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json())
app.use(bodyParser.json());


// connect MongoDB
const db = new ConnectDB();

db.connect().then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.log(err.message);
})



app.use('/admin', userRouter)
app.use('/admin/product', productRouter)


app.listen(PORT, function() {
    console.log('http://localhost:' + PORT)
})
