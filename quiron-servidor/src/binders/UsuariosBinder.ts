import Binder, {RequestKind} from "./Binder";
import {Express} from "express";
import Usuarios from "../modules/Usuarios";

export default class UsuariosBinder extends Binder {
    constructor(server: Express) {
        super(server);
        this.registerEndPoint(RequestKind.POST, "/usuario", {processor: Usuarios.crear}, {
            resource: "Usuario",
            action: "Crear",
            description: "Crear usuario"
        });
        this.registerEndPoint(RequestKind.GET, "/usuario", {processor: Usuarios.buscar}, {
            resource: "Usuario",
            action: "Consultar",
            description: "Consultar usuario"
        });

    }
}