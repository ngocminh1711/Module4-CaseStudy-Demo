import express from 'express';
import {UserController} from "../controllers/user.controller";

const userRouter = express.Router();
const userController = new UserController();
import multer from 'multer';
const upload = multer();


userRouter.get('/',(req, res, next) => {
   userController.showFormHomePage(req, res, next)
})
userRouter.get('/create',(req, res, next) => {
   userController.showFormCreateUser(req, res, next)
})
userRouter.post('/create',upload.none(),(req, res, next) => {
   userController.createUser(req, res, next)
})
userRouter.get('/info',(req, res, next) => {
   userController.showFormInfo(req, res, next)
})
userRouter.get('/delete/:userId',(req, res, next) => {
   userController.deleteUser(req, res, next)
})


export default userRouter;

