import Binder, {RequestKind} from "./Binder";
import {Express} from "express";
import Patrones from "../modules/Patrones";

export default class InstitucionesBinder extends Binder {

    constructor(server: Express) {
        super(server);
        this.registerEndPoint(RequestKind.POST, "/patrones", {processor: Patrones.crear},
            {
                resource: "Patron",
                action: "Crear",
                description: "Crear patron"
            }
        );
        this.registerEndPoint(RequestKind.GET, "/patrones", {processor: Patrones.buscar},
            {
                resource: "Patron",
                action: "Consultar",
                description: "Consultar los patrones"
            }
        );
    }
}