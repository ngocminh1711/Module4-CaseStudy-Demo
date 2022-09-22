"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductController = void 0;
const product_schema_1 = __importDefault(require("../models/schemas/product.schema"));
const idPro_product_schema_1 = __importDefault(require("../models/schemas/idPro.product.schema"));
class ProductController {
    async showFormCreate(req, res, next) {
        let data = await idPro_product_schema_1.default.find();
        res.render('create-product', { data: data });
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
        const product = new product_schema_1.default({ name: data.name, price: data.price, idPro: data.idPro, amount: data.amount, detail: data.detail, image: data.image }).populate('idPro');
        await product.save();
        res.redirect('/admin/product/info');
    }
    async showInfoListProduct(req, res, next) {
        try {
            let products = await product_schema_1.default.find().populate('idPro');
            if (!products) {
                res.status(503).json({ message: "Product not found" });
            }
            res.render('info-product-list', { products: products });
        }
        catch (err) {
            res.status(503).json({ message: "Product not found" });
        }
    }
    async deleteProduct(req, res, next) {
        try {
            let idProduct = req.params.id;
            let user = await product_schema_1.default.findOneAndDelete({ _id: idProduct });
            if (user) {
                res.redirect('/admin/product/info');
            }
            else {
                res.status(404).json({ message: "Product not found" });
            }
        }
        catch (err) {
            res.status(404).json({ err: err.message });
        }
    }
    async showFormUpdate(req, res, next) {
        let data = await idPro_product_schema_1.default.find();
        res.render('update-product', { data: data });
    }
    async updateProduct(req, res, next) {
        let data = {
            name: req.body.namePro,
            price: req.body.pricePro,
            idPro: req.body.idPro,
            amount: req.body.amountPro,
            detail: req.body.detailPro,
            image: req.body.imagePro
        };
        let proId = req.params.id;
        await product_schema_1.default.findOneAndUpdate({ _id: proId }, { name: data.name, price: data.price, idPro: data.idPro, amount: data.amount, detail: data.detail, image: data.image }).populate('idPro');
        res.redirect('/admin/product/info');
    }
}
exports.ProductController = ProductController;
//# sourceMappingURL=product.controller.js.map