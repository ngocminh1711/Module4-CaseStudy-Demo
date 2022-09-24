import {Request, Response,NextFunction} from "express";

export class AuthController {

    showFormLogin(req: Request, res: Response, next: NextFunction) {
        res.render('login')
}

}