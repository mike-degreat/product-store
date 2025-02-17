import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    price: {
        type: Number,
        required: true,
        default: 0
    },
    image: {
        type: String,
        required: true
    }, 
}, 
{
    timestamps: true // this will automatically create a timestamp for when the product was created and updated 
});

const Product = mongoose.model('Product', productSchema);

export default Product; 