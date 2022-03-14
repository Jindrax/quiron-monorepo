import Binder, {RequestKind} from "./Binder";
import {Express} from "express";
import Equipos from "../modules/Equipos";
import Formularios from "../modules/Formularios";

export default class FormulariosBinder extends Binder {
    constructor(server: Express) {
        super(server);
        this.registerEndPoint(RequestKind.GET, "/formularios", {
            processor: Formularios.buscar
        }, {
            resource: "Formulario",
            action: "Consultar",
            description: "Consultar Formularios"
        });
        this.registerEndPoint(RequestKind.POST, "/formularios", {
            processor: Formularios.crear
        }, {
            resource: "Formulario",
            action: "Crear",
            description: "Crear Formulario"
        });
    }
}