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
shopRouter.get('/all-product', (req, res, next) => {
    shopController.showFormAllProduct(req, res, next);
})
shopRouter.get('/quannu', (req, res, next) => {
    shopController.showFormQuanNu(req, res, next);
})
shopRouter.get('/aonu', (req, res, next) => {
    shopController.showFormAoNu(req, res, next);
})



export default shopRouter;