import {Request, Response,NextFunction} from "express";
import Product from "../models/schemas/product.schema";
import IdPro from "../models/schemas/idPro.product.schema";


export class ShopController {

    showFormShop(req: Request, res: Response, next: NextFunction) {
        res.render('homepage')
    }

    async showFormQuanNam(req: Request, res: Response, next: NextFunction) {
        let page : any = req.params.page || 1;
        let limit = 5;
        let offset = 0;
        if (page) {
            offset = (page - 1) * limit;
        }
        let idPros = await IdPro.find({name: "QNA"});
        let products = await Product.find({idPro: idPros}).limit(limit).skip(offset).populate('idPro');
        let count = await Product.count({idPro: idPros}).populate('idPro');
        let total = count;

        let totalPages = Math.ceil(total / limit);

        res.render('quannam', {products: products,current: page, pages: totalPages});
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

    async pagingProductsAoNam(req: Request, res: Response, next: NextFunction) {
        let page : any = req.params.page || 1;
        let limit = 10;// số lượng sản phẩm xuất hiện trên 1 page
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
    async pagingProductsQuanNam(req: Request, res: Response, next: NextFunction) {
        let page : any = req.params.page || 1;
        let limit = 10;// số lượng sản phẩm xuất hiện trên 1 page
        let offset = 0;
        if (page) {
            offset = (page - 1) * limit;
        }
        let idPros = await IdPro.find({name: "QNA"});
        let products = await Product.find({idPro: idPros}).limit(limit).skip(offset).populate('idPro');
        let count = await Product.count({idPro: idPros}).populate('idPro');
        let total = count;

        let totalPages = Math.ceil(total / limit);

        res.render('quannam', {products: products,current: page, pages: totalPages});
    }


    async sortProductsDesc(req: Request, res: Response, next: NextFunction) {
        let page : any = req.params.page || 1;
        let limit = 10;// số lượng sản phẩm xuất hiện trên 1 page
        let offset = 0;
        if (page) {
            offset = (page - 1) * limit;
        }
        let products = await Product.find().limit(limit).skip(offset).sort({price: -1});
        let count = await Product.count();
        let total = count;
        let totalPages = Math.ceil(total / limit);
        res.render('sort-product-desc', {products: products, current: page, pages: totalPages})
    }
    async pagingSortProductsDesc(req: Request, res: Response, next: NextFunction) {
        let page : any = req.params.page || 1;
        let limit = 10;// số lượng sản phẩm xuất hiện trên 1 page
        let offset = 0;
        if (page) {
            offset = (page - 1) * limit;
        }
        let products = await Product.find().limit(limit).skip(offset).sort({price: -1});
        let count = await Product.count();
        let total = count;
        let totalPages = Math.ceil(total / limit);
        res.render('sort-product-desc', {products: products, current: page, pages: totalPages})
    }
    async sortProductsIncrease(req: Request, res: Response, next: NextFunction) {
        let page : any = req.params.page || 1;
        let limit = 10;// số lượng sản phẩm xuất hiện trên 1 page
        let offset = 0;
        if (page) {
            offset = (page - 1) * limit;
        }
        let products = await Product.find().limit(limit).skip(offset).sort({price: 1});
        let count = await Product.count();
        let total = count;
        let totalPages = Math.ceil(total / limit);
        res.render('sort-product-increase', {products: products, current: page, pages: totalPages})
    }
    async pagingSortProductsIncrease(req: Request, res: Response, next: NextFunction) {
        let page : any = req.params.page || 1;
        let limit = 10;// số lượng sản phẩm xuất hiện trên 1 page
        let offset = 0;
        if (page) {
            offset = (page - 1) * limit;
        }
        let products = await Product.find().limit(limit).skip(offset).sort({price: 1});
        let count = await Product.count();
        let total = count;
        let totalPages = Math.ceil(total / limit);
        res.render('sort-product-increase', {products: products, current: page, pages: totalPages})
    }
    async sortProducts500(req: Request, res: Response, next: NextFunction) {
        let page: any = req.params.page || 1;
        let limit = 10;// số lượng sản phẩm xuất hiện trên 1 page
        let offset = 0;
        if (page) {
            offset = (page - 1) * limit;
        }
            let products = await Product.find({price: {$gt: 500000}})
            let count = await Product.count();
            let total = count;
            let totalPages = Math.ceil(total / limit);
            res.render('sort-product-500', {products: products, current: page, pages: totalPages})
    }
    async pagingSortProducts500(req: Request, res: Response, next: NextFunction) {
        let page: any = req.params.page || 1;
        let limit = 10;// số lượng sản phẩm xuất hiện trên 1 page
        let offset = 0;
        if (page) {
            offset = (page - 1) * limit;
        }
        let products = await Product.find({price: {$gt: 500000}})
        let count = await Product.count();
        let total = count;
        let totalPages = Math.ceil(total / limit);
        res.render('sort-product-500', {products: products, current: page, pages: totalPages})
    }

    async sortProducts0(req: Request, res: Response, next: NextFunction) {
        let page: any = req.params.page || 1;
        let limit = 10;// số lượng sản phẩm xuất hiện trên 1 page
        let offset = 0;
        if (page) {
            offset = (page - 1) * limit;
        }
        let products = await Product.find({price: { $lte : 500000}})
        let count = await Product.count();
        let total = count;
        let totalPages = Math.ceil(total / limit);
        res.render('sort-product-0', {products: products, current: page, pages: totalPages})
    }
    async pagingSortProducts0(req: Request, res: Response, next: NextFunction) {
        let page: any = req.params.page || 1;
        let limit = 10;// số lượng sản phẩm xuất hiện trên 1 page
        let offset = 0;
        if (page) {
            offset = (page - 1) * limit;
        }
        let products = await Product.find({price: { $lte : 500000}})
        let count = await Product.count();
        let total = count;
        let totalPages = Math.ceil(total / limit);
        res.render('sort-product-0', {products: products, current: page, pages: totalPages})
    }
}
