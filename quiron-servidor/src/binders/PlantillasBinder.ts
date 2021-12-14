import Binder, {RequestKind} from "./Binder";
import {Express} from "express";
import Plantillas from "../modules/Plantillas";

export default class PlantillasBinder extends Binder {
    constructor(server: Express) {
        super(server);
        this.registerEndPoint(RequestKind.POST, "/plantilla", {processor: Plantillas.crear}, {
            resource: "Plantilla",
            action: "Crear",
            description: "Crear plantilla"
        });
        this.registerEndPoint(RequestKind.GET, "/plantilla", {processor: Plantillas.buscar}, {
            resource: "Plantilla",
            action: "Consultar",
            description: "Consultar plantillas"
        });
    }
}