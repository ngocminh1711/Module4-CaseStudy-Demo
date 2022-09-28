import { Request, Response, NextFunction } from "express";
declare const checkPermissionMiddleware: (req: Request, res: Response, next: NextFunction) => void;
export default checkPermissionMiddleware;
