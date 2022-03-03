"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const App_1 = __importDefault(require("./src/App"));
const LoadToken_1 = __importDefault(require("./middleware/LoadToken"));
if (process.env.SERVER == undefined) {
    (0, dotenv_1.config)();
}
const app = (0, express_1.default)();
const cors_options = {
    origin: ["http://localhost", "http://localhost:8080", "http://localhost:8090"],
    credentials: true
};
app.use((0, cors_1.default)(cors_options));
app.use((0, cookie_parser_1.default)());
app.use((0, LoadToken_1.default)());
app.use(express_1.default.json({ limit: 52428800 }));
app.use(express_1.default.urlencoded({ limit: 52428800, extended: true }));
app.get("/", (req, res) => {
    if (req.token) {
        if (process.env.NODE_ENV == "dev") {
            res.redirect(307, process.env.URL_CLIENT);
        }
        else {
            res.sendFile(process.env.CLIENT_FILE, {
                root: __dirname
            });
        }
    }
    else {
        res.sendFile(process.env.AUTH_FILE, {
            root: __dirname
        });
    }
});
app.use("/auth", express_1.default.static("public/auth"));
app.use("/cliente", (req, res, next) => {
    if (req.token) {
        next();
    }
    else {
        res.sendStatus(403);
    }
}, express_1.default.static("public/cliente"));
(() => __awaiter(void 0, void 0, void 0, function* () {
    yield App_1.default.start(app);
    const port = process.env.NODE_ENV == "dev" ? process.env.DEV_PORT : process.env.PORT;
    app.listen(Number(port));
    console.log(`Escuchando en *:${port}`);
}))();
