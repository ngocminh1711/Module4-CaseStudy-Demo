import {Request, Response,NextFunction} from "express";
import Product from "../models/schemas/product.schema";


export class ShopController {

    showFormShop (req: Request, res: Response, next: NextFunction) {
        res.render('homepage')
    }
    async showFormAllProduct (req: Request, res: Response, next: NextFunction) {
        let products = await Product.find();
        res.render('all-product', {products : products});
    }
    async showFormQuanNu (req: Request, res: Response, next: NextFunction) {
        let products = await Product.find();
        res.render('quannu', {products : products});
    }
    showFormAoNu (req: Request, res: Response, next: NextFunction) {
        res.render('aonu')
    }
}