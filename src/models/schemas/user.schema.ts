import mongoose, { Schema, model } from "mongoose";

const userSchema = new Schema({
    role: {
        type: String,
        default: "user" },
    userName: {
        type: String,
        required: true },
    password: {
        type: String,
        required: true },
    name: {
        type: String,
        required: true },
    email: {
        type : String },
    phone: {
        type: Number},
    address: {
        type: String},
    city: { type: Schema.Types.ObjectId, ref: 'City'  }
})
const User = model('User', userSchema);
export default User;