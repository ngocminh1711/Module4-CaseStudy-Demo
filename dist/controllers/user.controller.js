"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const user_schema_1 = __importDefault(require("../models/schemas/user.schema"));
class UserController {
    showFormHomePage(req, res, next) {
        res.render('index');
    }
    async showFormInfo(req, res, next) {
        let users = await user_schema_1.default.find();
        console.log(users);
        res.render('info-user-list', { users: users });
    }
    showFormCreateUser(req, res, next) {
        res.render('create-user');
    }
    async createUser(req, res, next) {
        try {
            const data = {
                username: req.body.username,
                password: req.body.password
            };
            const user = new user_schema_1.default({ userName: data.username, password: data.password });
            await user.save();
            if (user) {
                res.redirect('/admin');
            }
            else {
                res.status(503).json({ message: 'error' });
            }
        }
        catch (error) {
            res.status(503).json({ message: error.message });
        }
    }
}
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map