"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_controller_1 = require("../controllers/auth.controller");
const auth_midd_1 = __importDefault(require("../middleware/auth.midd"));
const multer = require('multer');
const upload = multer();
const shopRouter = express_1.default.Router();
const authController = new auth_controller_1.AuthController();
shopRouter.get('/login', function (req, res, next) {
    authController.showFormLogin(req, res, next);
});
shopRouter.post('/login', upload.none(), auth_midd_1.default.authenticate('local', {
    successRedirect: '/admin',
    failureRedirect: '/login'
}));
exports.default = shopRouter;
//# sourceMappingURL=shop.router.js.map