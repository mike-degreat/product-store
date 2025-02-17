/*const express = require('express');
const bodyParser = require('body-parser');
const productController = require('../controllers/productController');

const app = express();
const router = express.Router();

// Middleware
app.use(bodyParser.json());

// Get all products
router.get('/', productController.getAllProducts);

// Get a single product by ID
router.get('/:id', productController.getProductById);

// Create a new product
router.post('/', productController.createProduct);

// Update a product by ID
router.put('/:id', productController.updateProduct);

// Delete a product by ID
router.delete('/:id', productController.deleteProduct);

// Use the router
app.use('/api/products', router);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;*/

import express from "express";

const router = express.Router();

export default router;

