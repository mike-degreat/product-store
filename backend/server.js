import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import Product from './models/product.model.js';
import mongoose, { Mongoose } from 'mongoose';

dotenv.config();

const app = express();


app.use(express.json()); // this will allow us to parse the incoming request body as JSON

app.get("/api/products", async(req,res) => {
    try {
        const products = await Product.find({});
        res.status(200).json({ success: true, data: products }); 
    } catch (error) {
        console.error("Error in Fetching Products", error.message);
        res.status(500).json({ success: false, message: "Server Error" });
    }
})


app.post("/api/products", async(req,res) => {
    const product = req.body; // this is the product that we want to create

    if (!product.name || !product.price || !product.image) {
        return res.status(400).json({ success:false, message: "Please provide all field" });
    }

    const newProduct = new Product(product);

    try {
       await newProduct.save();
         res.status(201).json({ success: true, data: newProduct }); 
    } catch (error) {
        console.error("Error in Create Product", error.message); 
        res.status(500).json({ success: false, message: "Server Error" });
    }
});

app.put("/api/products/:id", async(req,res) => {
    const { id } = req.params; // this is the id of the product that we want to update

    const product = req.body; // this is the product that we want to update

    if (!mongooseg.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ success: false, message: "Product not found" });
    }

    try {
        const updatedProduct = await Product.findByIdAndUpdate(id, product, { new: true });
        res.status(200).json({ success: true, data: updatedProduct });
    } catch (error) {
        console.error("Error in Update Product", error.message); 
        res.status(500).json({ success: false, message: "Server Error" });
    }
})

app.delete("/api/products/:id", async(req,res) => {
    const { id } = req.params; // this is the id of the product that we want to delete
    
    try {
        await Product.findByIdAndDelete(id);
        res.status(200).json({ success: true, message: "Product is deleted" });
    } catch (error) {
        console.error("Error in Delete Product", error.message); 
        res.status(400).json({ success: false, message: "Product not found" });
    }    
})

app.listen(5000, () => {
    connectDB();
    console.log("server started at http://localhost:5000");
})