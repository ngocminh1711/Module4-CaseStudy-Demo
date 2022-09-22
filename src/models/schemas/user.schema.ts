import mongoose, { Schema, model } from "mongoose";

const userSchema = new Schema({
    role: Number,
    userName: String,
    password: String,
    name: String,
    email: String,
    phone: Number,
    address: String,
    city: { type: Schema.Types.ObjectId, ref: 'City'  }
})
const User = model('User', userSchema);
export default User;