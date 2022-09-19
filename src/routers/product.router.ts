import express from "express";
import {ProductController} from "../controllers/product.controller";
import multer from 'multer';

const upload = multer();


const productRouter = express.Router();
const productController = new ProductController();

productRouter.get('/create', (req, res,next ) => {
    productController.showFormCreate(req, res, next);
})
productRouter.post('/create',upload.none(), (req, res, next) => {
    productController.createProduct(req, res, next);
})
productRouter.get('/info', (req, res, next) => {
    productController.showInfoListProduct(req, res, next);
})

export default productRouter;