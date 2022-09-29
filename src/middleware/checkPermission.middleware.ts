import {Request, Response, NextFunction } from "express";

const checkPermissionMiddleware = (req: Request, res: Response, next: NextFunction) => {
    let userLogin: any = req.user;
    console.log(userLogin)
    let roleUser = userLogin.role;
    if (roleUser == 'admin') {
        next();
    } else {
        res.redirect('/')
    }
}

export default checkPermissionMiddleware;