import { Request, Response, NextFunction } from "express";
export declare class ProductController {
    showFormCreate(req: Request, res: Response, next: NextFunction): void;
    createProduct(req: Request, res: Response, next: NextFunction): Promise<void>;
    showInfoListProduct(req: Request, res: Response, next: NextFunction): Promise<void>;
    deleteProduct(req: Request, res: Response, next: NextFunction): void;
}
