import express from 'express'
import { ShopController } from '../controllers/shop.controller';
import {AuthController} from "../controllers/auth.controller";
import passport from "../middleware/auth.midd";
const multer = require('multer');

const upload = multer();


const shopRouter = express.Router();
const shopController = new ShopController();


const authController = new AuthController();

shopRouter.get('/login', function (req, res, next) {
    authController.showFormLogin(req, res, next);
})
shopRouter.post('/login',upload.none(), passport.authenticate('local', {
    successRedirect: '/admin',
    failureRedirect: '/login'
}));
shopRouter.get('/', (req, res, next) => {
    shopController.showFormShop(req, res, next);
})
shopRouter.get('/quannam', (req, res, next) => {
    shopController.showFormQuanNam(req, res, next);
})
shopRouter.get('/aonam', (req, res, next) => {
    shopController.showFormAoNam(req, res, next);
})
shopRouter.get('/sortProductDesc', (req, res, next) => {
    shopController.sortProductsDesc(req, res, next)
})
shopRouter.get('/sortProductIncrease', (req, res, next) => {
    shopController.sortProductsIncrease(req, res, next)
})
shopRouter.get('/sortProducts500', (req, res, next) => {
    shopController.sortProducts500(req, res, next)
})
shopRouter.get('/sortProduct0', (req, res, next) => {
    shopController.sortProducts0(req, res, next)
})

export default shopRouter;