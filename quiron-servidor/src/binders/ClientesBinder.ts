import Binder, {RequestKind} from "./Binder";
import {Express} from "express";
import Clientes from "../modules/Clientes";

export default class ClientesBinder extends Binder {
    constructor(server: Express) {
        super(server);
        this.registerEndPoint(RequestKind.POST, "/clientes", {processor: Clientes.crear}, {
            resource: "Cliente",
            action: "Crear",
            description: "Crear cliente"
        });
        this.registerEndPoint(RequestKind.GET, "/clientes", {processor: Clientes.buscar}, {
            resource: "Cliente",
            action: "Consultar",
            description: "Consultar los clientes"
        });
    }
}