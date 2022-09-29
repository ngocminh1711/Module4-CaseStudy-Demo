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
        if (req.headers.cookie) {
            let cookieReq = cookie.parse(req.headers.cookie).cart;
            let cartId = JSON.parse(cookieReq).cartId;
            if (fs.existsSync('./session/cart/' + cartId + '.txt')) {
                let dataCart = fs.readFileSync('./session/cart/' + cartId + '.txt', 'utf8');
                let cartCookie = JSON.parse(dataCart);
                res.render('homepage', { products: products, cartCookie: cartCookie });
            }
        }
        else {
            let cartCookie = {
                items: [],
                totalMoney: 0,
                totalQuantity: 0,
            };
            res.render('homepage', { products: products, cartCookie: cartCookie });
        }
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
        if (req.headers.cookie) {
            let cookieReq = cookie.parse(req.headers.cookie).cart;
            let cartId = JSON.parse(cookieReq).cartId;
            if (fs.existsSync('./session/cart/' + cartId + '.txt')) {
                let dataCart = fs.readFileSync('./session/cart/' + cartId + '.txt', 'utf8');
                let cartCookie = JSON.parse(dataCart);
                res.render('quannam', { products: products, current: page, pages: totalPages, cartCookie: cartCookie });
            }
        }
        else {
            let cartCookie = {
                items: [],
                totalMoney: 0,
                totalQuantity: 0,
            };
            res.render('quannam', { products: products, current: page, pages: totalPages, cartCookie: cartCookie });
        }
    }
    async showFormAoNam(req, res, next) {
        let page = req.params.page || 1;
        let limit = 6;
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
            let cookieReq = cookie.parse(req.headers.cookie).cart;
            let cartId = JSON.parse(cookieReq).cartId;
            if (fs.existsSync('./session/cart/' + cartId + '.txt')) {
                let dataCart = fs.readFileSync('./session/cart/' + cartId + '.txt', 'utf8');
                let cartCookie = JSON.parse(dataCart);
                res.render('aonam', { products: products, current: page, pages: totalPages, cartCookie: cartCookie });
            }
        }
        else {
            let cartCookie = {
                items: [],
                totalMoney: 0,
                totalQuantity: 0,
            };
            res.render('aonam', { products: products, current: page, pages: totalPages, cartCookie: cartCookie });
        }
    }
    async pagingProductsAoNam(req, res, next) {
        let page = req.params.page || 1;
        let limit = 6;
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
            let cookieReq = cookie.parse(req.headers.cookie).cart;
            let cartId = JSON.parse(cookieReq).cartId;
            if (fs.existsSync('./session/cart/' + cartId + '.txt')) {
                let dataCart = fs.readFileSync('./session/cart/' + cartId + '.txt', 'utf8');
                let cartCookie = JSON.parse(dataCart);
                res.render('aonam', { products: products, current: page, pages: totalPages, cartCookie: cartCookie });
            }
        }
        else {
            let cartCookie = {
                items: [],
                totalMoney: 0,
                totalQuantity: 0,
            };
            res.render('aonam', { products: products, current: page, pages: totalPages, cartCookie: cartCookie });
        }
    }
    async pagingProductsQuanNam(req, res, next) {
        let page = req.params.page || 1;
        let limit = 6;
        let offset = 0;
        if (page) {
            offset = (page - 1) * limit;
        }
        let idPros = await idPro_product_schema_1.default.find({ name: "QNA" });
        let products = await product_schema_1.default.find({ idPro: idPros }).limit(limit).skip(offset).populate('idPro');
        let count = await product_schema_1.default.count({ idPro: idPros }).populate('idPro');
        let total = count;
        let totalPages = Math.ceil(total / limit);
        if (req.headers.cookie) {
            let cookieReq = cookie.parse(req.headers.cookie).cart;
            let cartId = JSON.parse(cookieReq).cartId;
            if (fs.existsSync('./session/cart/' + cartId + '.txt')) {
                let dataCart = fs.readFileSync('./session/cart/' + cartId + '.txt', 'utf8');
                let cartCookie = JSON.parse(dataCart);
                res.render('aonam', { products: products, current: page, pages: totalPages, cartCookie: cartCookie });
            }
        }
        else {
            let cartCookie = {
                items: [],
                totalMoney: 0,
                totalQuantity: 0,
            };
            res.render('quannam', { products: products, current: page, pages: totalPages, cartCookie: cartCookie });
        }
    }
    async sortProductsDesc(req, res, next) {
        let page = req.params.page || 1;
        let limit = 6;
        let offset = 0;
        if (page) {
            offset = (page - 1) * limit;
        }
        let products = await product_schema_1.default.find().limit(limit).skip(offset).sort({ price: -1 });
        let count = await product_schema_1.default.count();
        let total = count;
        let totalPages = Math.ceil(total / limit);
        if (req.headers.cookie) {
            let cookieReq = cookie.parse(req.headers.cookie).cart;
            let cartId = JSON.parse(cookieReq).cartId;
            if (fs.existsSync('./session/cart/' + cartId + '.txt')) {
                let dataCart = fs.readFileSync('./session/cart/' + cartId + '.txt', 'utf8');
                let cartCookie = JSON.parse(dataCart);
                res.render('sort-product-desc', { products: products, current: page, pages: totalPages, cartCookie: cartCookie });
            }
        }
        else {
            let cartCookie = {
                items: [],
                totalMoney: 0,
                totalQuantity: 0,
            };
            res.render('sort-product-desc', { products: products, current: page, pages: totalPages, cartCookie: cartCookie });
        }
    }
    async pagingSortProductsDesc(req, res, next) {
        let page = req.params.page || 1;
        let limit = 6;
        let offset = 0;
        if (page) {
            offset = (page - 1) * limit;
        }
        let products = await product_schema_1.default.find().limit(limit).skip(offset).sort({ price: -1 });
        let count = await product_schema_1.default.count();
        let total = count;
        let totalPages = Math.ceil(total / limit);
        if (req.headers.cookie) {
            let cookieReq = cookie.parse(req.headers.cookie).cart;
            let cartId = JSON.parse(cookieReq).cartId;
            if (fs.existsSync('./session/cart/' + cartId + '.txt')) {
                let dataCart = fs.readFileSync('./session/cart/' + cartId + '.txt', 'utf8');
                let cartCookie = JSON.parse(dataCart);
                res.render('sort-product-desc', { products: products, current: page, pages: totalPages, cartCookie: cartCookie });
            }
        }
        else {
            let cartCookie = {
                items: [],
                totalMoney: 0,
                totalQuantity: 0,
            };
            res.render('sort-product-desc', { products: products, current: page, pages: totalPages, cartCookie: cartCookie });
        }
    }
    async sortProductsIncrease(req, res, next) {
        let page = req.params.page || 1;
        let limit = 6;
        let offset = 0;
        if (page) {
            offset = (page - 1) * limit;
        }
        let products = await product_schema_1.default.find().limit(limit).skip(offset).sort({ price: 1 });
        let count = await product_schema_1.default.count();
        let total = count;
        let totalPages = Math.ceil(total / limit);
        if (req.headers.cookie) {
            let cookieReq = cookie.parse(req.headers.cookie).cart;
            let cartId = JSON.parse(cookieReq).cartId;
            if (fs.existsSync('./session/cart/' + cartId + '.txt')) {
                let dataCart = fs.readFileSync('./session/cart/' + cartId + '.txt', 'utf8');
                let cartCookie = JSON.parse(dataCart);
                res.render('sort-product-increase', { products: products, current: page, pages: totalPages, cartCookie: cartCookie });
            }
        }
        else {
            let cartCookie = {
                items: [],
                totalMoney: 0,
                totalQuantity: 0,
            };
            res.render('sort-product-increase', { products: products, current: page, pages: totalPages, cartCookie: cartCookie });
        }
    }
    async pagingSortProductsIncrease(req, res, next) {
        let page = req.params.page || 1;
        let limit = 6;
        let offset = 0;
        if (page) {
            offset = (page - 1) * limit;
        }
        let products = await product_schema_1.default.find().limit(limit).skip(offset).sort({ price: 1 });
        let count = await product_schema_1.default.count();
        let total = count;
        let totalPages = Math.ceil(total / limit);
        if (req.headers.cookie) {
            let cookieReq = cookie.parse(req.headers.cookie).cart;
            let cartId = JSON.parse(cookieReq).cartId;
            if (fs.existsSync('./session/cart/' + cartId + '.txt')) {
                let dataCart = fs.readFileSync('./session/cart/' + cartId + '.txt', 'utf8');
                let cartCookie = JSON.parse(dataCart);
                res.render('sort-product-increase', { products: products, current: page, pages: totalPages, cartCookie: cartCookie });
            }
        }
        else {
            let cartCookie = {
                items: [],
                totalMoney: 0,
                totalQuantity: 0,
            };
            res.render('sort-product-increase', { products: products, current: page, pages: totalPages, cartCookie: cartCookie });
        }
    }
    async sortProducts500(req, res, next) {
        let page = req.params.page || 1;
        let limit = 6;
        let offset = 0;
        if (page) {
            offset = (page - 1) * limit;
        }
        let products = await product_schema_1.default.find({ price: { $gt: 500000 } });
        let count = await product_schema_1.default.count();
        let total = count;
        let totalPages = Math.ceil(total / limit);
        if (req.headers.cookie) {
            let cookieReq = cookie.parse(req.headers.cookie).cart;
            let cartId = JSON.parse(cookieReq).cartId;
            if (fs.existsSync('./session/cart/' + cartId + '.txt')) {
                let dataCart = fs.readFileSync('./session/cart/' + cartId + '.txt', 'utf8');
                let cartCookie = JSON.parse(dataCart);
                res.render('sort-product-500', { products: products, current: page, pages: totalPages, cartCookie: cartCookie });
            }
        }
        else {
            let cartCookie = {
                items: [],
                totalMoney: 0,
                totalQuantity: 0,
            };
            res.render('sort-product-500', { products: products, current: page, pages: totalPages, cartCookie: cartCookie });
        }
    }
    async pagingSortProducts500(req, res, next) {
        let page = req.params.page || 1;
        let limit = 6;
        let offset = 0;
        if (page) {
            offset = (page - 1) * limit;
        }
        let products = await product_schema_1.default.find({ price: { $gt: 500000 } });
        let count = await product_schema_1.default.count();
        let total = count;
        let totalPages = Math.ceil(total / limit);
        if (req.headers.cookie) {
            let cookieReq = cookie.parse(req.headers.cookie).cart;
            let cartId = JSON.parse(cookieReq).cartId;
            if (fs.existsSync('./session/cart/' + cartId + '.txt')) {
                let dataCart = fs.readFileSync('./session/cart/' + cartId + '.txt', 'utf8');
                let cartCookie = JSON.parse(dataCart);
                res.render('sort-product-500', { products: products, current: page, pages: totalPages, cartCookie: cartCookie });
            }
        }
        else {
            let cartCookie = {
                items: [],
                totalMoney: 0,
                totalQuantity: 0,
            };
            res.render('sort-product-500', { products: products, current: page, pages: totalPages, cartCookie: cartCookie });
        }
    }
    async sortProducts0(req, res, next) {
        let page = req.params.page || 1;
        let limit = 6;
        let offset = 0;
        if (page) {
            offset = (page - 1) * limit;
        }
        let products = await product_schema_1.default.find({ price: { $lte: 500000 } });
        let count = await product_schema_1.default.count();
        let total = count;
        let totalPages = Math.ceil(total / limit);
        if (req.headers.cookie) {
            let cookieReq = cookie.parse(req.headers.cookie).cart;
            let cartId = JSON.parse(cookieReq).cartId;
            if (fs.existsSync('./session/cart/' + cartId + '.txt')) {
                let dataCart = fs.readFileSync('./session/cart/' + cartId + '.txt', 'utf8');
                let cartCookie = JSON.parse(dataCart);
                res.render('sort-product-0', { products: products, current: page, pages: totalPages, cartCookie: cartCookie });
            }
        }
        else {
            let cartCookie = {
                items: [],
                totalMoney: 0,
                totalQuantity: 0,
            };
            res.render('sort-product-0', { products: products, current: page, pages: totalPages, cartCookie: cartCookie });
        }
    }
    async pagingSortProducts0(req, res, next) {
        let page = req.params.page || 1;
        let limit = 6;
        let offset = 0;
        if (page) {
            offset = (page - 1) * limit;
        }
        let products = await product_schema_1.default.find({ price: { $lte: 500000 } });
        let count = await product_schema_1.default.count();
        let total = count;
        let totalPages = Math.ceil(total / limit);
        if (req.headers.cookie) {
            let cookieReq = cookie.parse(req.headers.cookie).cart;
            let cartId = JSON.parse(cookieReq).cartId;
            if (fs.existsSync('./session/cart/' + cartId + '.txt')) {
                let dataCart = fs.readFileSync('./session/cart/' + cartId + '.txt', 'utf8');
                let cartCookie = JSON.parse(dataCart);
                res.render('sort-product-0', { products: products, current: page, pages: totalPages, cartCookie: cartCookie });
            }
        }
        else {
            let cartCookie = {
                items: [],
                totalMoney: 0,
                totalQuantity: 0,
            };
            res.render('sort-product-0', { products: products, current: page, pages: totalPages, cartCookie: cartCookie });
        }
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
                        res.end(String(cart.totalQuantity));
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
    async getCart(req, res, next) {
        if (req.headers.cookie) {
            let cookieReq = cookie.parse(req.headers.cookie).cart;
            let cartId = JSON.parse(cookieReq).cartId;
            if (fs.existsSync('./session/cart/' + cartId + '.txt')) {
                let dataCart = fs.readFileSync('./session/cart/' + cartId + '.txt', 'utf8');
                let cartCookie = JSON.parse(dataCart);
                res.json({ cartCookie: cartCookie });
            }
        }
        else {
            let cartCookie = {
                items: [],
                totalMoney: 0,
                totalQuantity: 0,
            };
            res.json({ cartCookie: cartCookie });
        }
    }
    async deleteCart(req, res, next) {
        let idProductInCart = req.body.idProduct;
        if (req.headers.cookie) {
            let cookieReq = cookie.parse(req.headers.cookie).cart;
            let cartId = JSON.parse(cookieReq).cartId;
            if (fs.existsSync('./session/cart/' + cartId + '.txt')) {
                let dataCart = fs.readFileSync('./session/cart/' + cartId + '.txt', 'utf8');
                let cartCookie = JSON.parse(dataCart);
                cartCookie.items.forEach((item, index) => {
                    if (item._id === idProductInCart) {
                        cartCookie.items.splice(index, 1);
                        cartCookie.totalQuantity--;
                        cartCookie.totalMoney = cartCookie.totalMoney - item.price;
                    }
                });
                fs.writeFile('./session/cart/' + cartId + '.txt', JSON.stringify(cartCookie), (err) => {
                    res.json({ cartCookie: cartCookie });
                });
            }
        }
    }
}
exports.ShopController = ShopController;
//# sourceMappingURL=shop.controller.js.map