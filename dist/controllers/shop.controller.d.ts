import { Request, Response, NextFunction } from "express";
export declare class ShopController {
    showFormShop(req: Request, res: Response, next: NextFunction): Promise<void>;
    showFormQuanNam(req: Request, res: Response, next: NextFunction): Promise<void>;
    showFormAoNam(req: Request, res: Response, next: NextFunction): Promise<void>;
    showFormAll(req: Request, res: Response, next: NextFunction): Promise<void>;
}
