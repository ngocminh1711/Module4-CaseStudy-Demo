"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const passport_local_1 = require("passport-local");
const passport_1 = __importDefault(require("passport"));
const user_schema_1 = __importDefault(require("../models/schemas/user.schema"));
passport_1.default.serializeUser(function (user, cb) {
    process.nextTick(function () {
        cb(null, { id: user === null || user === void 0 ? void 0 : user._id, username: user.userName });
    });
});
passport_1.default.deserializeUser(function (user, cb) {
    process.nextTick(function () {
        return cb(null, user);
    });
});
passport_1.default.use(new passport_local_1.Strategy(async function verify(username, password, cb) {
    let user = await user_schema_1.default.findOne({
        userName: username,
        password: password,
    });
    console.log(user);
    if (!user) {
        return cb(null, false, { message: 'Incorrect username or password' });
    }
    return cb(null, user);
}));
exports.default = passport_1.default;
//# sourceMappingURL=auth.midd.js.map