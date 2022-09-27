import {Request, Response,NextFunction} from "express";
import Product from "../models/schemas/product.schema";
import IdPro from "../models/schemas/idPro.product.schema";


export class ShopController {

    showFormShop(req: Request, res: Response, next: NextFunction) {
        res.render('homepage')
    }

    async showFormQuanNam(req: Request, res: Response, next: NextFunction) {
        let idPros = await IdPro.find({name: "QNA"});
        let products = await Product.find({idPro: idPros}).populate('idPro');
        res.render('quannam', {products: products});
    }

    async showFormAoNam(req: Request, res: Response, next: NextFunction) {
        let page : any = req.params.page || 1;
        let limit = 5;
        let offset = 0;
        if (page) {
            offset = (page - 1) * limit;
        }
        let idPros = await IdPro.find({name: "ANA"});
        let products = await Product.find({idPro: idPros}).limit(limit).skip(offset).populate('idPro');
        let count = await Product.count({idPro: idPros}).populate('idPro');
        let total = count;

        let totalPages = Math.ceil(total / limit);

        res.render('aonam', {products: products,current: page, pages: totalPages});
    }

    async sortProductsDesc(req: Request, res: Response, next: NextFunction) {
        let products = await Product.find().sort({price: -1})
        res.render('sort-product-desc', {products: products})
    }
    async sortProductsIncrease(req: Request, res: Response, next: NextFunction) {
        let products = await Product.find().sort({price: 1})
        res.render('sort-product-increase', {products: products})
    }
    async sortProducts500(req: Request, res: Response, next: NextFunction) {
        let products = await Product.find({price: { $gt : 500000}})
        res.render('sort-product-500', {products: products})
    }
    async sortProducts0(req: Request, res: Response, next: NextFunction) {
        let products = await Product.find({price: { $lte : 500000}})
        res.render('sort-product-0', {products: products})
    }
}
