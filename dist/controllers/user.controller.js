"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const user_schema_1 = __importDefault(require("../models/schemas/user.schema"));
class UserController {
    async showFormHomePage(req, res, next) {
        let users = await user_schema_1.default.find();
        res.render('index', { users: users });
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
                password: req.body.password,
                name: req.body.name,
                email: req.body.email,
                phone: req.body.phone,
                address: req.body.address
            };
            const user = new user_schema_1.default({ userName: data.username, password: data.password, name: data.name, email: data.email, phone: data.phone, address: data.address });
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
    async searchUser(req, res, next) {
        let keyword = req.query.keywordUser;
        let users = await user_schema_1.default.find({ userName: keyword });
        res.render('info-user-list', { users: users });
    }
}
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map