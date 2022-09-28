"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const shop_controller_1 = require("../controllers/shop.controller");
const auth_controller_1 = require("../controllers/auth.controller");
const auth_midd_1 = __importDefault(require("../middleware/auth.midd"));
const multer = require('multer');
const upload = multer();
const shopRouter = express_1.default.Router();
const shopController = new shop_controller_1.ShopController();
const authController = new auth_controller_1.AuthController();
shopRouter.get('/login', function (req, res, next) {
    authController.showFormLogin(req, res, next);
});
shopRouter.post('/login', upload.none(), auth_midd_1.default.authenticate('local', {
    successRedirect: '/admin',
    failureRedirect: '/login'
}));
shopRouter.get('/', (req, res, next) => {
    shopController.showFormShop(req, res, next);
});
shopRouter.get('/quannam', (req, res, next) => {
    shopController.showFormQuanNam(req, res, next);
});
shopRouter.get('/aonam', (req, res, next) => {
    shopController.showFormAoNam(req, res, next);
});
shopRouter.get('/aonam/:page', (req, res, next) => {
    shopController.pagingProductsAoNam(req, res, next);
});
shopRouter.get('/quannam/:page', (req, res, next) => {
    shopController.pagingProductsQuanNam(req, res, next);
    shopRouter.get('/all', (req, res, next) => {
    });
    shopRouter.get('/sortProductDesc', (req, res, next) => {
        shopController.sortProductsDesc(req, res, next);
    });
    shopRouter.get('/sortProductDesc/:page', (req, res, next) => {
        shopController.pagingSortProductsDesc(req, res, next);
    });
    shopRouter.get('/sortProductIncrease', (req, res, next) => {
        shopController.sortProductsIncrease(req, res, next);
    });
    shopRouter.get('/sortProductIncrease/:page', (req, res, next) => {
        shopController.pagingSortProductsIncrease(req, res, next);
    });
    shopRouter.get('/sortProducts500', (req, res, next) => {
        shopController.sortProducts500(req, res, next);
    });
    shopRouter.get('/sortProducts500/:page', (req, res, next) => {
        shopController.pagingSortProducts500(req, res, next);
    });
    shopRouter.get('/sortProducts0', (req, res, next) => {
        shopController.sortProducts0(req, res, next);
    });
    shopRouter.get('/sortProducts0/:page', (req, res, next) => {
        shopController.pagingSortProducts0(req, res, next);
    });
    export default shopRouter;
});
//# sourceMappingURL=shop.router.js.map