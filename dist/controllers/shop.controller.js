"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShopController = void 0;
const product_schema_1 = __importDefault(require("../models/schemas/product.schema"));
const idPro_product_schema_1 = __importDefault(require("../models/schemas/idPro.product.schema"));
const fs = require("fs");
const cookie = require("cookie");
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
        if (req.headers.cookie) {
        }
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
    async addToCart(req, res, next) {
        let idProduct = req.body.idProduct;
        let product = await product_schema_1.default.findById(idProduct);
        let cart = {
            items: [product],
            totalMoney: product.price,
            totalQuantity: 1
        };
        if (req.headers.cookie) {
            let cookieReq = cookie.parse(req.headers.cookie).cart;
            if (cookieReq) {
                let cartId = JSON.parse(cookieReq).cartId;
                if (fs.existsSync('./session/cart/' + cartId + '.txt')) {
                    let dataCart = fs.readFileSync('./session/cart/' + cartId + '.txt', 'utf8');
                    cart = JSON.parse(dataCart);
                    cart.items.push(product);
                    cart.totalMoney += product.price;
                    cart.totalQuantity += 1;
                    fs.writeFile('./session/cart/' + cartId + '.txt', JSON.stringify(cart), (err) => {
                        res.end();
                    });
                }
                else {
                    let nameFile = Date.now();
                    fs.writeFile('./session/cart/' + nameFile + '.txt', JSON.stringify(cart), (err) => {
                        let cartCookie = {
                            cartId: nameFile
                        };
                        let cookies = cookie.serialize('cart', JSON.stringify(cartCookie));
                        res.setHeader('set-cookie', cookies);
                        res.end();
                    });
                }
            }
            else {
                let nameFile = Date.now();
                fs.writeFile('./session/cart/' + nameFile + '.txt', JSON.stringify(cart), (err) => {
                    let cartCookie = {
                        cartId: nameFile
                    };
                    let cookies = cookie.serialize('cart', JSON.stringify(cartCookie));
                    res.setHeader('set-cookie', cookies);
                    res.end();
                });
            }
        }
        else {
            let nameFile = Date.now();
            fs.writeFile('./session/cart/' + nameFile + '.txt', JSON.stringify(cart), (err) => {
                let cartCookie = {
                    cartId: nameFile
                };
                let cookies = cookie.serialize('cart', JSON.stringify(cartCookie));
                res.setHeader('set-cookie', cookies);
                res.end();
            });
        }
    }
}
exports.ShopController = ShopController;
//# sourceMappingURL=shop.controller.js.map