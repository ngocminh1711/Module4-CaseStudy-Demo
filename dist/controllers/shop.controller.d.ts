import { Request, Response, NextFunction } from "express";
export declare class ShopController {
    showFormShop(req: Request, res: Response, next: NextFunction): void;
    showFormQuanNu(req: Request, res: Response, next: NextFunction): Promise<void>;
    showFormAoNu(req: Request, res: Response, next: NextFunction): void;
}