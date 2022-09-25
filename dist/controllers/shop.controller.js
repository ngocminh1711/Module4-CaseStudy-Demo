"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShopController = void 0;
const product_schema_1 = __importDefault(require("../models/schemas/product.schema"));
class ShopController {
    showFormShop(req, res, next) {
        res.render('homepage');
    }
    async showFormQuanNu(req, res, next) {
        let products = await product_schema_1.default.find();
        res.render('quannu', { products: products });
    }
    showFormAoNu(req, res, next) {
        res.render('aonu');
    }
}
exports.ShopController = ShopController;
//# sourceMappingURL=shop.controller.js.map