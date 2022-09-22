"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    role: Number,
    userName: String,
    password: String,
    name: String,
    email: String,
    phone: Number,
    address: String,
    city: { type: mongoose_1.Schema.Types.ObjectId, ref: 'City' }
});
const User = (0, mongoose_1.model)('User', userSchema);
exports.default = User;
//# sourceMappingURL=user.schema.js.map