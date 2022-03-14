import Binder, {RequestKind} from "./Binder";
import {Express} from "express";
import OTs from "../modules/OTs";

export default class OTsBinder extends Binder {

    constructor(server: Express) {
        super(server);
        this.registerEndPoint(RequestKind.POST, "/ots", {processor: OTs.crear},
            {
                resource: "OrdenTrabajo",
                action: "Crear",
                description: "Crear orden de trabajo"
            }
        );
        this.registerEndPoint(RequestKind.GET, "/ots", {processor: OTs.buscar},
            {
                resource: "OrdenTrabajo",
                action: "Consultar",
                description: "Consultar las ordenes de trabajo"
            }
        );
    }
}