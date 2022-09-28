import { Request, Response, NextFunction } from "express";
export declare class ShopController {
    showFormShop(req: Request, res: Response, next: NextFunction): Promise<void>;
    showFormQuanNam(req: Request, res: Response, next: NextFunction): Promise<void>;
    showFormAoNam(req: Request, res: Response, next: NextFunction): Promise<void>;
    pagingProductsAoNam(req: Request, res: Response, next: NextFunction): Promise<void>;
    pagingProductsQuanNam(req: Request, res: Response, next: NextFunction): Promise<void>;
    sortProductsDesc(req: Request, res: Response, next: NextFunction): Promise<void>;
    pagingSortProductsDesc(req: Request, res: Response, next: NextFunction): Promise<void>;
    sortProductsIncrease(req: Request, res: Response, next: NextFunction): Promise<void>;
    pagingSortProductsIncrease(req: Request, res: Response, next: NextFunction): Promise<void>;
    sortProducts500(req: Request, res: Response, next: NextFunction): Promise<void>;
    pagingSortProducts500(req: Request, res: Response, next: NextFunction): Promise<void>;
    sortProducts0(req: Request, res: Response, next: NextFunction): Promise<void>;
    pagingSortProducts0(req: Request, res: Response, next: NextFunction): Promise<void>;
    addToCart(req: Request, res: Response, next: NextFunction): Promise<void>;
}
