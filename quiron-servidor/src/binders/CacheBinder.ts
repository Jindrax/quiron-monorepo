import Binder, {RequestKind} from "./Binder";
import {Express} from "express";
import Cache from "../modules/Cache";

export default class CacheBinder extends Binder {

    constructor(server: Express) {
        super(server);
        this.registerEndPoint(RequestKind.GET, "/cache/:tipo", {processor: Cache.recuperarCache}, {
            resource: "Cache",
            action: "Consultar",
            description: "Consultar el cache del usuario"
        });
        this.registerEndPoint(RequestKind.POST, "/cache/:tipo", {processor: Cache.postCache}, {
            resource: "Cache",
            action: "Crear",
            description: "Crear o actualizar la cache del usuario"
        });
        this.registerEndPoint(RequestKind.DELETE, "/cache/:tipo", {processor: Cache.descartarCache}, {
            resource: "Cache",
            action: "Eliminar",
            description: "Eliminar la cache del usuario"
        });
    }
}
