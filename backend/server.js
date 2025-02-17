import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import productRoute from './route/productRoute.js';

dotenv.config();

const app = express();


app.use(express.json()); // this will allow us to parse the incoming request body as JSON

app.use('/api/products', productRoute);

app.listen(5000, () => {
    connectDB();
    console.log("server started at http://localhost:5000");
})