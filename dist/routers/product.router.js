"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const product_controller_1 = require("../controllers/product.controller");
const multer_1 = __importDefault(require("multer"));
const upload = (0, multer_1.default)();
const productRouter = express_1.default.Router();
const productController = new product_controller_1.ProductController();
productRouter.get('/create', (req, res, next) => {
    productController.showFormCreate(req, res, next);
});
productRouter.post('/create', upload.none(), (req, res, next) => {
    productController.createProduct(req, res, next).catch(err => {
        res.status(501).json({ err: err.message });
    });
});
productRouter.get('/info', (req, res, next) => {
    productController.showInfoListProduct(req, res, next).catch(err => {
        res.status(501).json({ err: err.message });
    });
});
productRouter.get('/delete/:id', (req, res, next) => {
    productController.deleteProduct(req, res, next).catch(err => {
        res.status(404).json({ err: err.message });
    });
});
productRouter.get('/update/:id', (req, res, next) => {
    productController.showFormUpdate(req, res, next);
});
productRouter.post('/update/:id', upload.none(), (req, res, next) => {
    productController.updateProduct(req, res, next);
});
exports.default = productRouter;
//# sourceMappingURL=product.router.js.map