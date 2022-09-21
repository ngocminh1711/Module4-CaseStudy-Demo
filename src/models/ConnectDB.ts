import mongoose from "mongoose";


export class ConnectDB {
    async connect() {
        await mongoose.connect('mongodb://localhost:27017/Module4CS')
    }
}
