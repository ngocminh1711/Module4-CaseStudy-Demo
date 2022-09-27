"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShopController = void 0;
const product_schema_1 = __importDefault(require("../models/schemas/product.schema"));
const idPro_product_schema_1 = __importDefault(require("../models/schemas/idPro.product.schema"));
class ShopController {
    showFormShop(req, res, next) {
        res.render('homepage');
    }
    async showFormQuanNam(req, res, next) {
        let idPros = await idPro_product_schema_1.default.find({ name: "QNA" });
        let products = await product_schema_1.default.find({ idPro: idPros }).populate('idPro');
        res.render('quannam', { products: products });
    }
    async showFormAoNam(req, res, next) {
        let page = req.params.page || 1;
        console.log(req.params);
        let limit = 5;
        let offset = 0;
        if (page) {
            offset = (page - 1) * limit;
        }
        let idPros = await idPro_product_schema_1.default.find({ name: "ANA" });
        let products = await product_schema_1.default.find({ idPro: idPros }).limit(limit).skip(offset).populate('idPro');
        let count = await product_schema_1.default.count({ idPro: idPros }).populate('idPro');
        let total = count;
        let totalPages = Math.ceil(total / limit);
        res.render('aonam', { products: products, current: page, pages: totalPages });
    }
    async pagingProductsAoNam(req, res, next) {
        let page = req.params.page || 1;
        let limit = 10;
        let offset = 0;
        if (page) {
            offset = (page - 1) * limit;
        }
        let idPros = await idPro_product_schema_1.default.find({ name: "ANA" });
        let products = await product_schema_1.default.find({ idPro: idPros }).limit(limit).skip(offset).populate('idPro');
        let count = await product_schema_1.default.count({ idPro: idPros }).populate('idPro');
        let total = count;
        let totalPages = Math.ceil(total / limit);
        res.render('aonam', { products: products, current: page, pages: totalPages });
    }
    async sortProductsDesc(req, res, next) {
        let products = await product_schema_1.default.find().sort({ price: -1 });
        res.render('sort-product-desc', { products: products });
    }
    async sortProductsIncrease(req, res, next) {
        let products = await product_schema_1.default.find().sort({ price: 1 });
        res.render('sort-product-increase', { products: products });
    }
    async sortProducts500(req, res, next) {
        let products = await product_schema_1.default.find({ price: { $gt: 500000 } });
        res.render('sort-product-500', { products: products });
    }
    async sortProducts0(req, res, next) {
        let products = await product_schema_1.default.find({ price: { $lte: 500000 } });
        res.render('sort-product-0', { products: products });
    }
}
exports.ShopController = ShopController;
//# sourceMappingURL=shop.controller.js.map