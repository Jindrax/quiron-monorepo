import Binder, {RequestKind} from "./Binder";
import {Express} from "express";
import TipoEquipos from "../modules/TipoEquipos";

export default class TipoEquiposBinder extends Binder {
    constructor(server: Express) {
        super(server);
        this.registerEndPoint(RequestKind.GET,
            "/equipos/tipos",
            {processor: TipoEquipos.buscar},
            {
                resource: "TipoEquipo",
                action: "Consultar",
                description: "Consultar tipos de Equipo"
            });
        this.registerEndPoint(RequestKind.POST,
            "/equipos/tipos",
            {processor: TipoEquipos.crear},
            {
                resource: "TipoEquipo",
                action: "Crear",
                description: "Crear tipos de Equipo"
            });
    }
}