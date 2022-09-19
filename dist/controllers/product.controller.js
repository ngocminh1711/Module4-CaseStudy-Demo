"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductController = void 0;
const product_schema_1 = __importDefault(require("../models/schemas/product.schema"));
class ProductController {
    showFormCreate(req, res, next) {
        res.render('create-product');
    }
    async createProduct(req, res, next) {
        let data = {
            name: req.body.namePro,
            price: req.body.pricePro,
            idPro: req.body.idPro,
            amount: req.body.amountPro,
            detail: req.body.detailPro,
            image: req.body.imagePro
        };
        const product = new product_schema_1.default({ name: data.name, price: data.price, idPro: data.idPro, amount: data.amount, detail: data.detail, image: data.image });
        await product.save();
    }
    async showInfoListProduct(req, res, next) {
        let products = await product_schema_1.default.find();
        res.render('info-product-list', { products: products });
    }
}
exports.ProductController = ProductController;
//# sourceMappingURL=product.controller.js.map