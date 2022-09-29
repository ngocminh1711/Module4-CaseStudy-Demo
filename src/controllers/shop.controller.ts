import {Request, Response,NextFunction} from "express";
import Product from "../models/schemas/product.schema";
import IdPro from "../models/schemas/idPro.product.schema";
import {CartModel} from "../models/schemas/cart.model";
import {Cookie} from "express-session";
import {serializeUser} from "passport";
const fs = require("fs");
const cookie = require("cookie");

export class ShopController {

    async showFormShop(req: Request, res: Response, next: NextFunction) {
        let products = await Product.find()
        res.render('homepage', {products: products})
    }

    async showFormQuanNam(req: Request, res: Response, next: NextFunction) {
        let page: any = req.params.page || 1;
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

        res.render('quannam', {products: products, current: page, pages: totalPages});
    }

    async showFormAoNam(req: Request, res: Response, next: NextFunction) {


        let page: any = req.params.page || 1;
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
        if (req.headers.cookie) {
            let cookieReq = cookie.parse(req.headers.cookie).cart;
            let cartId = JSON.parse(cookieReq).cartId;



            if ( fs.existsSync('./session/cart/' + cartId + '.txt')) {
                let dataCart = fs.readFileSync('./session/cart/' + cartId + '.txt', 'utf8');
                let cartCookie = JSON.parse(dataCart)
                res.render('aonam', {products: products, current: page, pages: totalPages, cartCookie: cartCookie});
            }

        } else {
            let cartCookie = {
                items: [],
                totalMoney: 0,
                totalQuantity: 0,
            }
            res.render('aonam', {products: products, current: page, pages: totalPages, cartCookie: cartCookie});
        }
    }


    async pagingProductsAoNam(req: Request, res: Response, next: NextFunction) {
        let page: any = req.params.page || 1;
        let limit = 5;// số lượng sản phẩm xuất hiện trên 1 page
        let offset = 0;
        if (page) {
            offset = (page - 1) * limit;
        }
        let idPros = await IdPro.find({name: "ANA"});
        let products = await Product.find({idPro: idPros}).limit(limit).skip(offset).populate('idPro');
        let count = await Product.count({idPro: idPros}).populate('idPro');
        let total = count;

        let totalPages = Math.ceil(total / limit);

        res.render('aonam', {products: products, current: page, pages: totalPages});
    }

    async pagingProductsQuanNam(req: Request, res: Response, next: NextFunction) {
        let page: any = req.params.page || 1;
        let limit = 5;// số lượng sản phẩm xuất hiện trên 1 page
        let offset = 0;
        if (page) {
            offset = (page - 1) * limit;
        }
        let idPros = await IdPro.find({name: "QNA"});
        let products = await Product.find({idPro: idPros}).limit(limit).skip(offset).populate('idPro');
        let count = await Product.count({idPro: idPros}).populate('idPro');
        let total = count;

        let totalPages = Math.ceil(total / limit);

        res.render('quannam', {products: products, current: page, pages: totalPages});
    }


    async sortProductsDesc(req: Request, res: Response, next: NextFunction) {
        let page: any = req.params.page || 1;
        let limit = 5;// số lượng sản phẩm xuất hiện trên 1 page
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
        let page: any = req.params.page || 1;
        let limit = 5;// số lượng sản phẩm xuất hiện trên 1 page
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
        let page: any = req.params.page || 1;
        let limit = 5;// số lượng sản phẩm xuất hiện trên 1 page
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
        let page: any = req.params.page || 1;
        let limit = 5;// số lượng sản phẩm xuất hiện trên 1 page
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
        let limit = 5;// số lượng sản phẩm xuất hiện trên 1 page
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
        let limit = 5;// số lượng sản phẩm xuất hiện trên 1 page
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
        let limit = 5;// số lượng sản phẩm xuất hiện trên 1 page
        let offset = 0;
        if (page) {
            offset = (page - 1) * limit;
        }
        let products = await Product.find({price: {$lte: 500000}})
        let count = await Product.count();
        let total = count;
        let totalPages = Math.ceil(total / limit);
        res.render('sort-product-0', {products: products, current: page, pages: totalPages})
    }

    async pagingSortProducts0(req: Request, res: Response, next: NextFunction) {
        let page: any = req.params.page || 1;
        let limit = 5;// số lượng sản phẩm xuất hiện trên 1 page
        let offset = 0;
        if (page) {
            offset = (page - 1) * limit;
        }
        let products = await Product.find({price: {$lte: 500000}})
        let count = await Product.count();
        let total = count;
        let totalPages = Math.ceil(total / limit);
        res.render('sort-product-0', {products: products, current: page, pages: totalPages})
    }

    async addToCart(req: Request, res: Response, next: NextFunction) {
        // take req from client
        let idProduct = req.body.idProduct;

        let product = await Product.findById(idProduct)

        // create cart
        let cart = {
            items: [product],
            totalMoney: product.price,
            totalQuantity: 1
        }

        //check cart exists?

        //get coookie from header request

        if (req.headers.cookie) {
            let cookieReq = cookie.parse(req.headers.cookie).cart


            if (cookieReq) {
                // get cart id from cookie
                let cartId = JSON.parse(cookieReq).cartId;


                if ( fs.existsSync('./session/cart/' + cartId + '.txt')) {
                    let dataCart = fs.readFileSync('./session/cart/' + cartId + '.txt', 'utf8');

                    cart = JSON.parse(dataCart)

                    cart.items.push(product)
                    cart.totalMoney += product.price;
                    cart.totalQuantity += 1;

                    console.log(cart)
                    // ghi de lai file
                    fs.writeFile('./session/cart/' + cartId + '.txt', JSON.stringify(cart), (err) =>{
                        res.end(String(cart.totalQuantity))
                    })


                }
                else {
                    // save cart to session

                    let nameFile = Date.now()
                    fs.writeFile('./session/cart/' + nameFile + '.txt', JSON.stringify(cart), (err)=> {

                        let cartCookie = {
                            cartId: nameFile
                        }
                        // create cookie
                        let cookies = cookie.serialize('cart', JSON.stringify(cartCookie))

                        res.setHeader('set-cookie', cookies)

                        res.end()
                    })
                }

            } else {
                let nameFile = Date.now()
                fs.writeFile('./session/cart/' + nameFile + '.txt', JSON.stringify(cart), (err)=> {

                    let cartCookie = {
                        cartId: nameFile
                    }
                    // create cookie
                    let cookies = cookie.serialize('cart', JSON.stringify(cartCookie))

                    res.setHeader('set-cookie', cookies)

                    res.end()
                })
            }

        } else {
            let nameFile = Date.now()
            fs.writeFile('./session/cart/' + nameFile + '.txt', JSON.stringify(cart), (err)=> {

                let cartCookie = {
                    cartId: nameFile
                }
                // create cookie
                let cookies = cookie.serialize('cart', JSON.stringify(cartCookie))

                res.setHeader('set-cookie', cookies)

                res.end()
            })
        }

    }
    async getCart(req: Request, res: Response, next: NextFunction) {

        if (req.headers.cookie) {
            let cookieReq = cookie.parse(req.headers.cookie).cart;
            let cartId = JSON.parse(cookieReq).cartId;



            if ( fs.existsSync('./session/cart/' + cartId + '.txt')) {
                let dataCart = fs.readFileSync('./session/cart/' + cartId + '.txt', 'utf8');
                let cartCookie = JSON.parse(dataCart)

                console.log(cartCookie)
                res.json( {cartCookie: cartCookie} );
            }

        } else {
            let cartCookie = {
                items: [],
                totalMoney: 0,
                totalQuantity: 0,
            }
            console.log(cartCookie);
            res.json( {cartCookie: cartCookie});
        }

    }
}







