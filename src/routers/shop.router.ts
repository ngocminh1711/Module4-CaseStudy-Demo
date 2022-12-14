import express from 'express'
import { ShopController } from '../controllers/shop.controller';
import {AuthController} from "../controllers/auth.controller";
import passport from "../middleware/auth.midd";

import checkPermissionMiddleware from "../middleware/checkPermission.middleware";
const multer = require('multer');

const upload = multer();


const shopRouter = express.Router();
const shopController = new ShopController();


const authController = new AuthController();

shopRouter.get('/login',function (req, res, next) {
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

shopRouter.get('/all',(req, res, next) => {
    shopController.showFormAll(req, res, next);
})


shopRouter.get('/aonam/:page', (req, res, next) => {
    shopController.pagingProductsAoNam(req, res, next)
});
shopRouter.get('/quannam/:page', (req, res, next) => {
    shopController.pagingProductsQuanNam(req, res, next)
});

shopRouter.get('/all/:page', (req, res, next) => {
    shopController.pagingProductsAll(req, res, next)
})

shopRouter.get('/sortProductDesc', (req, res, next) => {
    shopController.sortProductsDesc(req, res, next)
})
shopRouter.get('/sortProductDesc/:page', (req, res, next) => {
    shopController.pagingSortProductsDesc(req, res, next)
})
shopRouter.get('/sortProductIncrease', (req, res, next) => {
    shopController.sortProductsIncrease(req, res, next)
})
shopRouter.get('/sortProductIncrease/:page', (req, res, next) => {
    shopController.pagingSortProductsIncrease(req, res, next)
})
shopRouter.get('/sortProducts500', (req, res, next) => {
    shopController.sortProducts500(req, res, next)
})
shopRouter.get('/sortProducts500/:page', (req, res, next) => {
    shopController.pagingSortProducts500(req, res, next)
})
shopRouter.get('/sortProducts0', (req, res, next) => {
    shopController.sortProducts0(req, res, next)
})
shopRouter.get('/sortProducts0/:page', (req, res, next) => {
    shopController.pagingSortProducts0(req, res, next)
})
shopRouter.post('/add-to-cart', (req, res, next) => {
    shopController.addToCart(req, res, next)
})
shopRouter.get('/get-cart', (req, res, next) => {
    shopController.getCart(req, res, next)
})
shopRouter.delete('/delete-cart', (req, res, next) => {
    shopController.deleteCart(req, res, next)
})

shopRouter.get('/login/google', passport.authenticate('google', {scope: ['profile']}));

shopRouter.get('/google/callback', passport.authenticate('google'),
    async function (req, res) {


        res.send("thanh cong")
    });

export default shopRouter;