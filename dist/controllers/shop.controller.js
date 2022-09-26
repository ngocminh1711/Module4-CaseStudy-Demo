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
        let idPros = await idPro_product_schema_1.default.find({ name: "ANA" });
        let products = await product_schema_1.default.find({ idPro: idPros }).populate('idPro');
        res.render('aonam', { products: products });
    }
}
exports.ShopController = ShopController;
//# sourceMappingURL=shop.controller.js.map