import User from "../models/schemas/user.schema";
import {Request, Response, NextFunction} from "express";


export class UserController {

    async showFormHomePage(req: Request, res: Response, next: NextFunction){
        let users = await User.find();
        res.render('index', {users: users});
    }
    async showFormInfo(req: Request, res: Response, next: NextFunction){
        let users = await User.find();

        res.render('info-user-list', {users: users})
    }
    showFormCreateUser(req: Request, res: Response, next: NextFunction){
        res.render('create-user')
    }
    async createUser(req: Request, res: Response, next: NextFunction){
        try {
            const data = {
                username: req.body.username,
                password: req.body.password,
                name: req.body.name,
                email: req.body.email,
                phone: req.body.phone,
                address: req.body.address};
            const user = new User({userName: data.username, password: data.password, name: data.name, email: data.email, phone: data.phone, address: data.address});
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
    showFormUpdate(req: Request, res: Response, next: NextFunction) {
        res.render('update-user')
    }
    async updateUser(req: Request, res: Response, next: NextFunction) {
        let data = {
            name: req.body.name,
            username: req.body.username,
            password: req.body.password,
            address: req.body.address,
            email: req.body.email,
            phone: req.body.phone
        }
        let userId = req.params.userId
        await User.findOneAndUpdate({_id : userId}, {name: data.name , userName: data.username , password: data.password , address: data.address , email: data.email , phone: data.phone})
        res.redirect('/admin/info')
    }
    async searchUser(req: Request, res: Response, next: NextFunction) {
        let keyword = req.query.keywordUser
        let users = await User.find({userName: keyword})
        res.render('info-user-list', {users: users})
    }
}