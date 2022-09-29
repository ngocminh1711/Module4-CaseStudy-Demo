"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const checkPermissionMiddleware = (req, res, next) => {
    let userLogin = req.user;
    let roleUser = userLogin.role;
    if (roleUser == 'admin') {
        next();
    }
    else {
        res.redirect('/admin/error');
    }
};
exports.default = checkPermissionMiddleware;
//# sourceMappingURL=checkPermission.middleware.js.map