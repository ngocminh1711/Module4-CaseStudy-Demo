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
    productController.createProduct(req, res, next).catch(err => {
        res.status(501).json({ err : err.message });
    });
})
productRouter.get('/info', (req, res, next) => {
    productController.showInfoListProduct(req, res, next).catch(err => {
        res.status(501).json({ err : err.message });
    });
})
productRouter.get('/delete/:id', (req, res, next) => {
    productController.deleteProduct(req, res, next).catch(err => {
        res.status(404).json({ err : err.message });
    })
})
productRouter.get('/update/:id', (req, res, next) => {
    productController.showFormUpdate(req, res, next)
})
productRouter.post('/update/:id',upload.none(), (req, res, next) => {
    productController.updateProduct(req, res, next)
})
productRouter.get('/search', (req, res, next) => {
    productController.searchProduct(req, res, next)
})


export default productRouter;