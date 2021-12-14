import Binder, {RequestKind} from "./Binder";
import {Express} from "express";
import EquipoAtributos from "../modules/EquipoAtributos";

export default class EquipoAtributosBinder extends Binder {
    constructor(server: Express) {
        super(server);
        this.registerEndPoint(RequestKind.GET,
            "/equipos/atributos",
            {processor: EquipoAtributos.buscar},
            {
                resource: "EquipoAtributo",
                action: "Consultar",
                description: "Consultar atributos de Equipo"
            });
        this.registerEndPoint(RequestKind.POST,
            "/equipos/atributos",
            {processor: EquipoAtributos.crear},
            {
                resource: "EquipoAtributo",
                action: "Crear",
                description: "Crear atributo de Equipo"
            });
    }
}