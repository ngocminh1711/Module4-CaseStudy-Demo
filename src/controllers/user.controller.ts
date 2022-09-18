import User from "../models/schemas/user.schema";
import {Request, Response, NextFunction} from "express";


export class UserController {

    showFormHomePage(req: Request, res: Response, next: NextFunction){
        res.render('index')
    }
    async showFormInfo(req: Request, res: Response, next: NextFunction){
        let users = await User.find();
        console.log(users)
        res.render('info-user-list', {users: users})
    }
    showFormCreateUser(req: Request, res: Response, next: NextFunction){
        res.render('create-user')
    }
    async createUser(req: Request, res: Response, next: NextFunction){
        try {
            const data = {
                username: req.body.username,
                password: req.body.password };
            const user = new User({userName: data.username, password: data.password});
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
}