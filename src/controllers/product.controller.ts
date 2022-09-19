import Product from "../models/schemas/product.schema";
import {Request, Response, NextFunction} from "express";




export class ProductController {

    showFormCreate(req: Request, res: Response, next: NextFunction) {
        res.render('create-product')
    }
    async createProduct(req: Request, res: Response, next: NextFunction) {
        let data = {
            name: req.body.namePro,
            price: req.body.pricePro,
            idPro: req.body.idPro,
            amount: req.body.amountPro,
            detail: req.body.detailPro,
            image: req.body.imagePro
        }
        const product = new Product({name: data.name, price: data.price, idPro: data.idPro, amount: data.amount, detail: data.detail, image: data.image})
        await product.save();
    }
    async showInfoListProduct(req: Request, res: Response, next: NextFunction) {
        let products = await Product.find();
        res.render('info-product-list', { products: products})
    }
}