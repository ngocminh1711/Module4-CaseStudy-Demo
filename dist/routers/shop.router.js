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
shopRouter.get('/all', (req, res, next) => {
    shopController.showFormAll(req, res, next);
});
exports.default = shopRouter;
//# sourceMappingURL=shop.router.js.map