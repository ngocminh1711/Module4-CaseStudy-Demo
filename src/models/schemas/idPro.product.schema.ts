import mongoose, { Schema, model } from "mongoose";


const idProSchema = new Schema({
    name: String,
})

const IdPro = mongoose.model('IdPro', idProSchema)

export default IdPro;