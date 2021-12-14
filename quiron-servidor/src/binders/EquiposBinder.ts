import Binder, {RequestKind} from "./Binder";
import {Express} from "express";
import Equipos from "../modules/Equipos";

export default class EquiposBinder extends Binder {
    constructor(server: Express) {
        super(server);
        this.registerEndPoint(RequestKind.GET, "/equipos", {
            processor: Equipos.buscar
        }, {
            resource: "Equipo",
            action: "Consultar",
            description: "Consultar Equipos"
        });
        this.registerEndPoint(RequestKind.POST, "/equipos", {
            processor: Equipos.crear
        }, {
            resource: "Equipo",
            action: "Crear",
            description: "Crear Equipo"
        });
    }
}