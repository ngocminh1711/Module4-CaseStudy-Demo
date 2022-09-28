"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShopController = void 0;
const product_schema_1 = __importDefault(require("../models/schemas/product.schema"));
const idPro_product_schema_1 = __importDefault(require("../models/schemas/idPro.product.schema"));
class ShopController {
    async showFormShop(req, res, next) {
        let products = await product_schema_1.default.find();
        res.render('homepage', { products: products });
    }
    async showFormQuanNam(req, res, next) {
        let page = req.params.page || 1;
        let limit = 5;
        let offset = 0;
        if (page) {
            offset = (page - 1) * limit;
        }
        let idPros = await idPro_product_schema_1.default.find({ name: "QNA" });
        let products = await product_schema_1.default.find({ idPro: idPros }).limit(limit).skip(offset).populate('idPro');
        let count = await product_schema_1.default.count({ idPro: idPros }).populate('idPro');
        let total = count;
        let totalPages = Math.ceil(total / limit);
        res.render('quannam', { products: products, current: page, pages: totalPages });
    }
    async showFormAoNam(req, res, next) {
        let page = req.params.page || 1;
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
    async pagingProductsQuanNam(req, res, next) {
        let page = req.params.page || 1;
        let limit = 10;
        let offset = 0;
        if (page) {
            offset = (page - 1) * limit;
        }
        let idPros = await idPro_product_schema_1.default.find({ name: "QNA" });
        let products = await product_schema_1.default.find({ idPro: idPros }).limit(limit).skip(offset).populate('idPro');
        let count = await product_schema_1.default.count({ idPro: idPros }).populate('idPro');
        let total = count;
        let totalPages = Math.ceil(total / limit);
        res.render('quannam', { products: products, current: page, pages: totalPages });
    }
    async sortProductsDesc(req, res, next) {
        let page = req.params.page || 1;
        let limit = 10;
        let offset = 0;
        if (page) {
            offset = (page - 1) * limit;
        }
        let products = await product_schema_1.default.find().limit(limit).skip(offset).sort({ price: -1 });
        let count = await product_schema_1.default.count();
        let total = count;
        let totalPages = Math.ceil(total / limit);
        res.render('sort-product-desc', { products: products, current: page, pages: totalPages });
    }
    async pagingSortProductsDesc(req, res, next) {
        let page = req.params.page || 1;
        let limit = 10;
        let offset = 0;
        if (page) {
            offset = (page - 1) * limit;
        }
        let products = await product_schema_1.default.find().limit(limit).skip(offset).sort({ price: -1 });
        let count = await product_schema_1.default.count();
        let total = count;
        let totalPages = Math.ceil(total / limit);
        res.render('sort-product-desc', { products: products, current: page, pages: totalPages });
    }
    async sortProductsIncrease(req, res, next) {
        let page = req.params.page || 1;
        let limit = 10;
        let offset = 0;
        if (page) {
            offset = (page - 1) * limit;
        }
        let products = await product_schema_1.default.find().limit(limit).skip(offset).sort({ price: 1 });
        let count = await product_schema_1.default.count();
        let total = count;
        let totalPages = Math.ceil(total / limit);
        res.render('sort-product-increase', { products: products, current: page, pages: totalPages });
    }
    async pagingSortProductsIncrease(req, res, next) {
        let page = req.params.page || 1;
        let limit = 10;
        let offset = 0;
        if (page) {
            offset = (page - 1) * limit;
        }
        let products = await product_schema_1.default.find().limit(limit).skip(offset).sort({ price: 1 });
        let count = await product_schema_1.default.count();
        let total = count;
        let totalPages = Math.ceil(total / limit);
        res.render('sort-product-increase', { products: products, current: page, pages: totalPages });
    }
    async sortProducts500(req, res, next) {
        let page = req.params.page || 1;
        let limit = 10;
        let offset = 0;
        if (page) {
            offset = (page - 1) * limit;
        }
        let products = await product_schema_1.default.find({ price: { $gt: 500000 } });
        let count = await product_schema_1.default.count();
        let total = count;
        let totalPages = Math.ceil(total / limit);
        res.render('sort-product-500', { products: products, current: page, pages: totalPages });
    }
    async pagingSortProducts500(req, res, next) {
        let page = req.params.page || 1;
        let limit = 10;
        let offset = 0;
        if (page) {
            offset = (page - 1) * limit;
        }
        let products = await product_schema_1.default.find({ price: { $gt: 500000 } });
        let count = await product_schema_1.default.count();
        let total = count;
        let totalPages = Math.ceil(total / limit);
        res.render('sort-product-500', { products: products, current: page, pages: totalPages });
    }
    async sortProducts0(req, res, next) {
        let page = req.params.page || 1;
        let limit = 10;
        let offset = 0;
        if (page) {
            offset = (page - 1) * limit;
        }
        let products = await product_schema_1.default.find({ price: { $lte: 500000 } });
        let count = await product_schema_1.default.count();
        let total = count;
        let totalPages = Math.ceil(total / limit);
        res.render('sort-product-0', { products: products, current: page, pages: totalPages });
    }
    async pagingSortProducts0(req, res, next) {
        let page = req.params.page || 1;
        let limit = 10;
        let offset = 0;
        if (page) {
            offset = (page - 1) * limit;
        }
        let products = await product_schema_1.default.find({ price: { $lte: 500000 } });
        let count = await product_schema_1.default.count();
        let total = count;
        let totalPages = Math.ceil(total / limit);
        res.render('sort-product-0', { products: products, current: page, pages: totalPages });
    }
}
exports.ShopController = ShopController;
async;
showFormAll(req, Request, res, Response, next, NextFunction);
{
    let products = await product_schema_1.default.find();
    res.render('all', { products: products });
}
//# sourceMappingURL=shop.controller.js.map