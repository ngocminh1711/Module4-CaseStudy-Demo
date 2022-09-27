import Product from "../models/schemas/product.schema";
import {Request, Response, NextFunction} from "express";
import User from "../models/schemas/user.schema";
import IdPro from "../models/schemas/idPro.product.schema";




export class ProductController {

    async showFormCreate(req: Request, res: Response, next: NextFunction) {
        let data = await IdPro.find();
        res.render('create-product', {data : data })
    }
    async createProduct(req: Request, res: Response, next: NextFunction) {
        let data = {
            name: req.body.namePro,
            price: req.body.pricePro,
            idPro: req.body.idPro,
            amount: req.body.amountPro,
            detail: req.body.detailPro,
            image1: req.body.imagePro1,
            image2: req.body.imagePro2
        }
        const product = new Product({name: data.name, price: data.price, idPro: data.idPro, amount: data.amount, detail: data.detail, image1: data.image1, image2: data.image2}).populate('idPro')
        await product.save();
        res.redirect('/admin/product/info')
    }
    async showInfoListProduct(req: Request, res: Response, next: NextFunction) {
        try {
            let products = await Product.find().populate('idPro');
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
    async showFormUpdate(req: Request, res: Response, next: NextFunction) {
        let idPro = await IdPro.find();
        let product = await Product.findOne({ _id : req.params.id});
        res.render('update-product', { idPro : idPro, product : product})
    }
    async updateProduct(req: Request, res: Response, next: NextFunction) {
        let data = {
            name: req.body.namePro,
            price: req.body.pricePro,
            idPro: req.body.idPro,
            amount: req.body.amountPro,
            detail: req.body.detailPro,
            image1: req.body.imagePro1,
            image2: req.body.imagePro2
        }
        let proId = req.params.id
        await Product.findOneAndUpdate({_id : proId}, {name: data.name , price: data.price , idPro: data.idPro , amount: data.amount , detail: data.detail , image1: data.image1, image2: data.image2}).populate('idPro')
        res.redirect('/admin/product/info')
    }
    async searchProduct(req: Request, res: Response, next: NextFunction) {
        let keyword = req.query.keywordPro
        let idPros =  await IdPro.find({$or: [{name: {$regex: `${keyword}`, $options: 'i'}}]})
        let products = await Product.find(
            {$or: [{name: {$regex: `${keyword}`, $options: 'i'}},
                    {detail: {$regex: `${keyword}`, $options: 'i'}},
                    { idPro : idPros}
                ]}).populate('idPro')

        res.render('info-product-list', {products: products})
    }

}