import mongoose from "mongoose";


export class ConnectDB {
    async connect() {
        await mongoose.connect('mongodb+srv://thao:thao1234@casestudy4.hrswjtf.mongodb.net/Casestudy4')
    }
}
