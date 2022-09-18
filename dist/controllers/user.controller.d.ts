import { Request, Response, NextFunction } from "express";
export declare class UserController {
    showFormHomePage(req: Request, res: Response, next: NextFunction): void;
    showFormInfo(req: Request, res: Response, next: NextFunction): Promise<void>;
    showFormCreateUser(req: Request, res: Response, next: NextFunction): void;
    createUser(req: Request, res: Response, next: NextFunction): Promise<void>;
}
