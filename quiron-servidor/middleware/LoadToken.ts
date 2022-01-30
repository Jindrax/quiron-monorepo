import jwt, {JwtPayload} from "jsonwebtoken";
import {RequestHandler, Response} from "express";
import {Permission} from "@quiron/classes/dist/auth";

export interface ValidToken extends JwtPayload {
    identificacion: string,
    nombres: string,
    apellidos: string,
    _id: string,
    permisos: Record<string, Permission>
}

function removeToken(res: Response) {
    res.cookie("token", jwt.sign({
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

export default function loadToken(): RequestHandler {
    return (req, res, next) => {
        //La peticion viene de un cliente con token
        // console.log(req.headers);
        if (req.cookies.token && req.cookies.token != "placeholder") {
            try {
                //Verificamos la validez del token
                //Cargamos la informacion del token en la peticion
                req.token = jwt.verify(req.cookies.token, String(process.env.JWT_SECRET));
                //TODO: Remover en produccion, eliminar token si no existen permisos
                if (!req.token.permisos) {
                    removeToken(res);
                } else {
                    next();
                }
            } catch (e) {
                console.log("Ocurrio un error decodificando el token");
                res.sendStatus(500);
            }
        } else {
            next();
        }
    }
}