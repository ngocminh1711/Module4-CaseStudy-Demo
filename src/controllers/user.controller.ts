import User from "../models/schemas/user.schema";
import {Request, Response, NextFunction} from "express";
import Product from "../models/schemas/product.schema";
import City from "../models/schemas/city.user.schema";




export class UserController {

    async showFormHomePage(req: Request, res: Response, next: NextFunction){
        let users = await User.find({role: "user"})
        let products = await Product.find();
        let data = {
            users: users,
            products: products
        }
        res.render('index', {data: data});
    }
    async showFormInfo(req: Request, res: Response, next: NextFunction){
        let users = await User.find({role: 'user'}).populate('city');

        res.render('info-user-list', { users: users})
    }
    async showFormCreateUser(req: Request, res: Response, next: NextFunction){
        let data = await City.find()
        res.render('create-user', { data: data })
    }
    async createUser(req: Request, res: Response, next: NextFunction){
        try {
            const data = {
                username: req.body.username,
                password: req.body.password,
                name: req.body.name,
                email: req.body.email,
                phone: req.body.phone,
                nameAddress: req.body.nameAddress,
                city: req.body.cityId,
               };
            const user = new User({userName: data.username, password: data.password, name: data.name, email: data.email, phone: data.phone, address: data.nameAddress, city: data.city})

            await user.save();
            if (user){
                res.redirect('/admin')
            }
            else {
                res.status(503).json({message: 'error'})
            }
        }
        catch (error) {
                res.status(503).json({message: error.message})
        }
    }
    async deleteUser(req: Request, res: Response, next: NextFunction) {
        let data = req.params.userId
        await User.deleteOne({ _id: data})
        res.redirect('/admin/info')
    }
    async showFormUpdate(req: Request, res: Response, next: NextFunction) {
        let data = await City.find()
        res.render('update-user', { data: data })
    }
    async updateUser(req: Request, res: Response, next: NextFunction) {
        let data = {
            name: req.body.name,
            username: req.body.username,
            password: req.body.password,
            address: req.body.address,
            email: req.body.email,
            phone: req.body.phone,
            city: req.body.cityId
        }
        let userId = req.params.userId
        await User.findOneAndUpdate({_id : userId}, {name: data.name , userName: data.username , password: data.password , address: data.address , email: data.email , phone: data.phone, city: data.city }).populate('city')
        res.redirect('/admin/info')
    }
    async searchUser(req: Request, res: Response, next: NextFunction) {
        let keyword = req.query.keywordUser
        let cities = await City.find({$or: [{name: {$regex: `${keyword}`, $options: 'i'}}]})
        let users = await User.find(
            {$or: [{userName: {$regex: `${keyword}`, $options: 'i'}},
                        {address: {$regex: `${keyword}`, $options: 'i'}},
                        {name: {$regex: `${keyword}`, $options: 'i'}},
                        {email: {$regex: `${keyword}`, $options: 'i'}},
                    {city: cities}
                ]}).populate('city')
        res.render('info-user-list', {users: users})
    }
}