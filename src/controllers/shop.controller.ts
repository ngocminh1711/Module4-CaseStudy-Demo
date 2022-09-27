import {Request, Response,NextFunction} from "express";
import Product from "../models/schemas/product.schema";
import IdPro from "../models/schemas/idPro.product.schema";


export class ShopController {

    async showFormShop (req: Request, res: Response, next: NextFunction) {
        let products = await Product.find()
        res.render('homepage', {products : products})
    }
    async showFormQuanNam (req: Request, res: Response, next: NextFunction) {
        let idPros = await IdPro.find({name: "QNA"});
        let products = await Product.find({idPro: idPros}).populate( 'idPro');
        res.render('quannam', {products : products});
    }
    async showFormAoNam (req: Request, res: Response, next: NextFunction) {
        let idPros = await IdPro.find({name: "ANA"});
        let products = await Product.find({idPro: idPros}).populate('idPro');
        // console.log(products)
        res.render('aonam', {products : products});
    }
    async showFormAll (req: Request, res: Response, next: NextFunction) {
        let products = await Product.find()

        res.render('all', {products : products});
}
}