import Binder, {RequestKind} from "./Binder";
import {Express} from "express";
import ReferenciaEquipos from "../modules/ReferenciaEquipos";

export default class ReferenciaEquiposBinder extends Binder {

    constructor(server: Express) {
        super(server);
        this.registerEndPoint(RequestKind.POST, "/referenciaEquipos", {processor: ReferenciaEquipos.crear},
            {
                resource: "ReferenciaEquipo",
                action: "Crear",
                description: "Crear referencia equipo"
            }
        );
        this.registerEndPoint(RequestKind.GET, "/referenciaEquipos", {processor: ReferenciaEquipos.buscar},
            {
                resource: "ReferenciaEquipo",
                action: "Consultar",
                description: "Consultar las referencias de equipos"
            }
        );
    }

}