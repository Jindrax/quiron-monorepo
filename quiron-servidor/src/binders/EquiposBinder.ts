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
        this.registerEndPoint(RequestKind.GET, "/equipo/:equipoID/responsable", {
            processor: Equipos.responsable
        }, {
            resource: "Equipo",
            action: "Consultar",
            description: "Consultar el responsable de un equipo"
        });
        this.registerEndPoint(RequestKind.GET, "/equipo/:equipoID/institucion", {
            processor: Equipos.institucion
        }, {
            resource: "Equipo",
            action: "Consultar",
            description: "Consultar la institucion del equipo"
        });
        this.registerEndPoint(RequestKind.GET, "/equipo/:equipoID/infoOT", {
            processor: Equipos.infoOT
        }, {
            resource: "Equipo",
            action: "Consultar",
            description: "Consultar la informacion del equipo para creacion de OT"
        });
    }
}