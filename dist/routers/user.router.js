"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("../controllers/user.controller");
const userRouter = express_1.default.Router();
const userController = new user_controller_1.UserController();
const multer_1 = __importDefault(require("multer"));
const upload = (0, multer_1.default)();
userRouter.get('/', (req, res, next) => {
    userController.showFormHomePage(req, res, next);
});
userRouter.get('/create', (req, res, next) => {
    userController.showFormCreateUser(req, res, next);
});
userRouter.post('/create', upload.none(), (req, res, next) => {
    userController.createUser(req, res, next);
});
userRouter.get('/info', (req, res, next) => {
    userController.showFormInfo(req, res, next);
});
userRouter.get('/delete/:userId', (req, res, next) => {
    userController.deleteUser(req, res, next);
});
userRouter.get('/update/:userId', (req, res, next) => {
    userController.showFormUpdate(req, res, next);
});
userRouter.post('/update/:userId', upload.none(), (req, res, next) => {
    userController.updateUser(req, res, next);
});
exports.default = userRouter;
//# sourceMappingURL=user.router.js.map