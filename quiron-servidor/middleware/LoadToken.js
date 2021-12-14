"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
function removeToken(res) {
    res.cookie("token", jsonwebtoken_1.default.sign({
        identificacion: "",
        nombres: "",
        apellidos: "",
        _id: "",
        permisos: {}
    }, String(process.env.JWT_SECRET)), {
        path: "/",
        expires: new Date(Date.now())
    });
    res.redirect("/");
}
function loadToken() {
    return (req, res, next) => {
        //La peticion viene de un cliente con token
        // console.log(req.headers);
        if (req.cookies.token && req.cookies.token != "placeholder") {
            try {
                //Verificamos la validez del token
                //Cargamos la informacion del token en la peticion
                req.token = jsonwebtoken_1.default.verify(req.cookies.token, String(process.env.JWT_SECRET));
                //TODO: Remover en produccion, eliminar token si no existen permisos
                if (!req.token.permisos) {
                    removeToken(res);
                }
                else {
                    next();
                }
            }
            catch (e) {
                console.log("Ocurrio un error decodificando el token");
                res.sendStatus(500);
            }
        }
        else {
            next();
        }
    };
}
exports.default = loadToken;
