import {Express} from "express";
import Autenticador from "../modules/Autenticador";
import Binder, {RequestKind} from "./Binder";

export default class AutenticadorBinder extends Binder {
    constructor(server: Express) {
        super(server);
        this.registerEndPoint(RequestKind.POST, "/session", {
            processor: Autenticador.iniciarSesion, postProcessor: (result, req, res) => {
                res.cookie("token", result.token, {
                    path: "/",
                    expires: new Date(Date.now() + 3600000000)
                });
                res.json(result);
                return false;
            }
        });
        this.registerEndPoint(RequestKind.PATCH, "/session/pass", {processor: Autenticador.cambiarPassword});
        this.registerEndPoint(RequestKind.PATCH, "/session/info", {processor: Autenticador.actualizarInformacion});
        this.registerEndPoint(RequestKind.DELETE, "/session", {processor: Autenticador.cerrarSesion});
    }
}