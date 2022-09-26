import mongoose, { Schema , model } from "mongoose";


const productSchema = new Schema({
    name: String,
    price: Number,
    amount: Number,
    detail: String,
    idPro: {type: Schema.Types.ObjectId, ref: 'IdPro'},
    image1: String,
    image2: String
})

const Product = mongoose.model('Product', productSchema);
export default Product;