import { Request, Response, NextFunction } from "express";
export declare class UserController {
    showFormHomePage(req: Request, res: Response, next: NextFunction): Promise<void>;
    showFormInfo(req: Request, res: Response, next: NextFunction): Promise<void>;
    showFormCreateUser(req: Request, res: Response, next: NextFunction): Promise<void>;
    createUser(req: Request, res: Response, next: NextFunction): Promise<void>;
    deleteUser(req: Request, res: Response, next: NextFunction): Promise<void>;
    showFormUpdate(req: Request, res: Response, next: NextFunction): Promise<void>;
    updateUser(req: Request, res: Response, next: NextFunction): Promise<void>;
    searchUser(req: Request, res: Response, next: NextFunction): Promise<void>;
}
