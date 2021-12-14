import Binder, {RequestKind} from "./Binder";
import {Express} from "express";
import Roles from "../modules/Roles";

export default class UsuariosBinder extends Binder {
    constructor(server: Express) {
        super(server);
        this.registerEndPoint(RequestKind.POST, "/rol", {processor: Roles.crear}, {
            resource: "Rol",
            action: "Crear",
            description: "Crear rol"
        });
        this.registerEndPoint(RequestKind.GET, "/roles", {processor: Roles.buscar}, {
            resource: "Rol",
            action: "Consultar Todo",
            description: "Consultar los roles"
        });
        this.registerEndPoint(RequestKind.GET, "/permisos", {processor: Roles.getResources});
    }
}