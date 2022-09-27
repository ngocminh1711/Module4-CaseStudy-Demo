"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const user_schema_1 = __importDefault(require("../models/schemas/user.schema"));
const product_schema_1 = __importDefault(require("../models/schemas/product.schema"));
const city_user_schema_1 = __importDefault(require("../models/schemas/city.user.schema"));
class UserController {
    async showFormHomePage(req, res, next) {
        let users = await user_schema_1.default.find({ role: "user" });
        let products = await product_schema_1.default.find();
        let data = {
            users: users,
            products: products
        };
        res.render('index', { data: data });
    }
    async showFormInfo(req, res, next) {
        let users = await user_schema_1.default.find({ role: 'user' }).populate('city');
        res.render('info-user-list', { users: users });
    }
    async showFormCreateUser(req, res, next) {
        let data = await city_user_schema_1.default.find();
        res.render('create-user', { data: data });
    }
    async createUser(req, res, next) {
        try {
            const data = {
                username: req.body.username,
                password: req.body.password,
                name: req.body.name,
                email: req.body.email,
                phone: req.body.phone,
                nameAddress: req.body.nameAddress,
                city: req.body.cityId,
            };
            const user = new user_schema_1.default({ userName: data.username, password: data.password, name: data.name, email: data.email, phone: data.phone, address: data.nameAddress, city: data.city });
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
    async showFormUpdate(req, res, next) {
        let data = await city_user_schema_1.default.find();
        res.render('update-user', { data: data });
    }
    async updateUser(req, res, next) {
        let data = {
            name: req.body.name,
            username: req.body.username,
            password: req.body.password,
            address: req.body.address,
            email: req.body.email,
            phone: req.body.phone,
            city: req.body.cityId
        };
        let userId = req.params.userId;
        await user_schema_1.default.findOneAndUpdate({ _id: userId }, { name: data.name, userName: data.username, password: data.password, address: data.address, email: data.email, phone: data.phone, city: data.city }).populate('city');
        res.redirect('/admin/info');
    }
    async searchUser(req, res, next) {
        let keyword = req.query.keywordUser;
        let cities = await city_user_schema_1.default.find({ $or: [{ name: { $regex: `${keyword}`, $options: 'i' } }] });
        let users = await user_schema_1.default.find({ $or: [{ userName: { $regex: `${keyword}`, $options: 'i', $not: /^admin.*/ } },
                { address: { $regex: `${keyword}`, $options: 'i', $not: /^admin.*/ } },
                { role: { $not: /^admin.*/ } },
                { name: { $regex: `${keyword}`, $options: 'i', $not: /^admin.*/ } },
                { email: { $regex: `${keyword}`, $options: 'i', $not: /^admin.*/ } },
                { city: cities }
            ] }).populate('city');
        res.render('info-user-list', { users: users });
    }
}
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map