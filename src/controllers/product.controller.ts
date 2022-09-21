import Product from "../models/schemas/product.schema";
import {Request, Response, NextFunction} from "express";
import User from "../models/schemas/user.schema";




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
        res.redirect('/admin/product/info')
    }
    async showInfoListProduct(req: Request, res: Response, next: NextFunction) {
        try {
            let products = await Product.find();
            if (!products) {
                res.status(503).json({message: "Product not found"})
            }
            res.render('info-product-list', { products: products})
        }
        catch (err) {
            res.status(503).json({message: "Product not found"})
        }

    }
    async deleteProduct(req: Request, res: Response, next: NextFunction) {
        try {
            let idProduct = req.params.id;
            let user = await Product.findOneAndDelete({ _id: idProduct})
            if (user) {
                res.redirect('/admin/product/info')
            }
            else {
                res.status(404).json({message: "Product not found"})
            }
        }
        catch (err) {
            res.status(404).json({err: err.message})
        }
    }
    showFormUpdate(req: Request, res: Response, next: NextFunction) {
        res.render('update-product')
    }
    async updateProduct(req: Request, res: Response, next: NextFunction) {
        let data = {
            name: req.body.namePro,
            price: req.body.pricePro,
            idPro: req.body.idPro,
            amount: req.body.amountPro,
            detail: req.body.detailPro,
            image: req.body.imagePro
        }
        let proId = req.params.id
        await Product.findOneAndUpdate({_id : proId}, {name: data.name , price: data.price , idPro: data.idPro , amount: data.amount , detail: data.detail , image: data.image})
        res.redirect('/admin/product/info')
    }
}