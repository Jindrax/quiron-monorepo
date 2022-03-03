import Binder, {RequestKind} from "./Binder";
import {Express} from "express";
import Servicios from "../modules/Servicios";

export default class ServiciosBinder extends Binder {

    constructor(server: Express) {
        super(server);
        this.registerEndPoint(RequestKind.POST, "/servicios", {processor: Servicios.crear},
            {
                resource: "Servicio",
                action: "Crear",
                description: "Crear servicio"
            }
        );
        this.registerEndPoint(RequestKind.GET, "/servicios", {processor: Servicios.buscar},
            {
                resource: "Servicio",
                action: "Consultar",
                description: "Consultar los servicios"
            }
        );
    }
}