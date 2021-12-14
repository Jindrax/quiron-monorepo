"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const rutasExcluidas = [
    "/session",
    "/session/pass",
    "/session/info"
];
function home() {
    return (req, res, next) => {
        //La peticion viene de un cliente sin token
        if (!req.cookies.bearer) {
            //Si la peticion no esta excluida la redirigimos al cliente de logueo
            if (!rutasExcluidas.includes(req.path)) {
                //TODO: Redireccion de las peticiones sin sesion
                res.redirect(`${process.env.URL_AUTH}/#/login`);
            }
            else {
                //Si la peticion es para iniciar sesion la dejamos seguir
                next();
            }
        }
        else {
            try {
                //Verificamos la validez del token
                const token = jsonwebtoken_1.default.verify(req.cookies.bearer, String(process.env.JWT_SECRET));
                //En caso de que el cliente posea un token valido lo dejamos seguir a la aplicacion
                next();
            }
            catch (e) {
                //En caso de que el token sea invalido redirigimos al cliente de logueo
                //TODO: Redireccion de las peticiones sin sesion
                res.redirect(`${process.env.URL_AUTH}/#/login`);
            }
        }
    };
}
exports.default = home;
