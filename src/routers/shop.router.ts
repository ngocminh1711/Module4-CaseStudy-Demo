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
shopRouter.get('/all', (req, res, next) => {
    shopController.showFormAll(req, res, next);
})



export default shopRouter;