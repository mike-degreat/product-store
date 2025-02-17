import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';

dotenv.config

const app = express();


app.use(express.json()); // this will allow us to parse the incoming request body as JSON
app.post("/api/products", async(req,res) => {
    const product = req.body; // this is the product that we want to create

    if (!product.name || !product.price || !product.image) {
        res.status(400).send({ success:false, message: "Product data is required" });
    }

    const newProduct = new Product(product)

    try {
       await newProduct.save();
         res.status(201).send({ success: true, data: newProduct }); 
    } catch (error) {
        console.error("Error in Create Product: $(error.message)"); 
        res.status(500).send({ success: false, message: "Server Error" });
    }
});

app.listen(5000, () => {
    connectDB();
    console.log("server started at http://localhost:5000");
})