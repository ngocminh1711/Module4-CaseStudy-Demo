import mongoose, { Schema, model } from "mongoose";

const citySchema = new Schema({
    name: String,
})
const City = model('City', citySchema);
export default City;