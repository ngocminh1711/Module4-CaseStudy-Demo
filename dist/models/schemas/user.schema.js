"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    role: {
        type: String,
        default: "user"
    },
    userName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String
    },
    phone: {
        type: Number
    },
    address: {
        type: String
    },
    city: { type: mongoose_1.Schema.Types.ObjectId, ref: 'City' }
});
const User = (0, mongoose_1.model)('User', userSchema);
exports.default = User;
//# sourceMappingURL=user.schema.js.map