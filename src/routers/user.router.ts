import express from 'express';
import {UserController} from "../controllers/user.controller";

const userRouter = express.Router();
const userController = new UserController();
import multer from 'multer';
const upload = multer();


userRouter.get('/',(req, res, next) => {
   userController.showFormHomePage(req, res, next).catch(err => {
      res.status(404).json({ err : err.message });
   });
})
userRouter.get('/create',(req, res, next) => {
   userController.showFormCreateUser(req, res, next)
})
userRouter.post('/create',upload.none(),(req, res, next) => {
   userController.createUser(req, res, next).catch(err => {
      res.status(404).json({ err : err.message });
   });
})
userRouter.get('/info',(req, res, next) => {
   userController.showFormInfo(req, res, next).catch(err => {
      res.status(404).json({ err : err.message });
   });
})
userRouter.get('/delete/:userId',(req, res, next) => {
   userController.deleteUser(req, res, next).catch(err => {
      res.status(404).json({ err : err.message });
   });
})
userRouter.get('/update/:userId',(req, res, next) => {
   userController.showFormUpdate(req, res, next)
})
userRouter.post('/update/:userId',upload.none(),(req, res, next) =>{
   userController.updateUser(req, res, next).catch(err => {
      res.status(404).json({ err : err.message });
   });
})
userRouter.get('/search',(req, res, next) =>{
   userController.searchUser(req, res, next).catch(err => {
      res.status(404).json({ err : err.message });
   });
    }
)


export default userRouter;

