import mongoose, { Schema, model } from "mongoose";

const userSchema = new Schema({
    role: Number,
    userName: String,
    password: String,
    name: String,
    email: String,
    phone: Number,
    address: String,

})
const User = mongoose.model('User', userSchema);
export default User;