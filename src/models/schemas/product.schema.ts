import mongoose, { Schema , model } from "mongoose";


const productSchema = new Schema({
    name: String,
    price: Number,
    amount: Number,
    detail: String,
    idPro: {type: Schema.Types.ObjectId, ref: 'IdPro'},
    quantityForSale: {type: Number , default: 0},
    image1: String,
    image2: String
})

const Product = mongoose.model('Product', productSchema);
export default Product;