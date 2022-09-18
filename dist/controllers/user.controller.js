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
    async deleteUser(req, res, next) {
        let data = req.params.userId;
        await user_schema_1.default.deleteOne({ _id: data });
        res.redirect('/admin/info');
    }
    showFormUpdate(req, res, next) {
        res.render('update-user');
    }
    async updateUser(req, res, next) {
        let data = {
            name: req.body.name,
            username: req.body.username,
            password: req.body.password,
            address: req.body.address,
            email: req.body.email,
            phone: req.body.phone
        };
        let userId = req.params.userId;
        await user_schema_1.default.findOneAndUpdate({ _id: userId }, { name: data.name, userName: data.username, password: data.password, address: data.address, email: data.email, phone: data.phone });
        res.redirect('/admin/info');
    }
}
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map