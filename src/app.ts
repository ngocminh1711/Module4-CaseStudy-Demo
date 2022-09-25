import express from 'express';
import * as path from "path";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import userRouter from "./routers/user.router";
import {ConnectDB} from "./models/ConnectDB";
import productRouter from "./routers/product.router";
import shopRouter from "./routers/shop.router";

import passport from 'passport';
import session from 'express-session'

const SQLiteStore = require('connect-sqlite3')(session);



const PORT = 8000;

const app = express();


app.set('view engine', 'ejs');
app.set('views',path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json())
app.use(bodyParser.json());

//use session
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 7 * 24 * 60 * 60 * 1000 } // 1 week
}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(passport.authenticate('session'));
app.use(passport.initialize());
app.use(express.urlencoded({ extended: false }));



// connect MongoDB
const db = new ConnectDB();

db.connect().then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.log(err.message);
})



app.use('/admin', userRouter)
app.use('/admin/product', productRouter)
app.use('/', shopRouter)


app.listen(PORT, function() {
    console.log('http://localhost:' + PORT)
})
