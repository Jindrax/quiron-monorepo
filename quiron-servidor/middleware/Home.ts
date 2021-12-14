import {RequestHandler} from "express";
import jwt from "jsonwebtoken";

const rutasExcluidas: string[] = [
    "/session",
    "/session/pass",
    "/session/info"
]

export default function home(): RequestHandler {
    return (req, res, next) => {
        //La peticion viene de un cliente sin token
        if (!req.cookies.bearer) {
            //Si la peticion no esta excluida la redirigimos al cliente de logueo
            if (!rutasExcluidas.includes(req.path)) {
                //TODO: Redireccion de las peticiones sin sesion
                res.redirect(`${process.env.URL_AUTH}/#/login`);
            } else {
                //Si la peticion es para iniciar sesion la dejamos seguir
                next();
            }
        } else {
            try {
                //Verificamos la validez del token
                const token = jwt.verify(req.cookies.bearer, String(process.env.JWT_SECRET));
                //En caso de que el cliente posea un token valido lo dejamos seguir a la aplicacion
                next();
            } catch (e) {
                //En caso de que el token sea invalido redirigimos al cliente de logueo
                //TODO: Redireccion de las peticiones sin sesion
                res.redirect(`${process.env.URL_AUTH}/#/login`);
            }
        }
    }
}