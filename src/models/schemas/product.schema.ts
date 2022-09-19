import mongoose, { Schema , model } from "mongoose";


const productSchema = new Schema({
    name: String,
    price: Number,
    amount: Number,
    detail: String,
    idPro: String,
    image: String
})

const Product = mongoose.model('Product', productSchema);
export default Product;