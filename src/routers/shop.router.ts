import express from 'express'
import {AuthController} from "../controllers/auth.controller";
import passport from "../middleware/auth.midd";
const multer = require('multer');

const upload = multer();


const shopRouter = express.Router();


const authController = new AuthController ();

shopRouter.get('/login', function (req, res, next) {
    authController.showFormLogin(req, res, next);
})
shopRouter.post('/login',upload.none(), passport.authenticate('local', {
    successRedirect: '/admin',
    failureRedirect: '/login'

}));



export default shopRouter;