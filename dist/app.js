"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path = __importStar(require("path"));
const body_parser_1 = __importDefault(require("body-parser"));
const user_router_1 = __importDefault(require("./routers/user.router"));
const ConnectDB_1 = require("./models/ConnectDB");
const product_router_1 = __importDefault(require("./routers/product.router"));
const PORT = 8000;
const app = (0, express_1.default)();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express_1.default.static(path.join(__dirname, 'public')));
app.use(express_1.default.json());
app.use(body_parser_1.default.json());
const db = new ConnectDB_1.ConnectDB();
db.connect().then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.log(err.message);
});
app.use('/admin', user_router_1.default);
app.use('/admin/product', product_router_1.default);
app.listen(PORT, function () {
    console.log('http://localhost:' + PORT);
});
//# sourceMappingURL=app.js.map