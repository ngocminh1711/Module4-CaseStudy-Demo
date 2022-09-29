"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const checkPermissionMiddleware = (req, res, next) => {
    let userLogin = req.user;
    console.log(userLogin);
    let roleUser = userLogin.role;
    if (roleUser == 'admin') {
        next();
    }
    else {
        res.redirect('/');
    }
};
exports.default = checkPermissionMiddleware;
//# sourceMappingURL=checkPermission.middleware.js.map