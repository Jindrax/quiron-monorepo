import Binder, {RequestKind} from "./Binder";
import {Express} from "express";
import Instituciones from "../modules/Instituciones";

export default class InstitucionesBinder extends Binder {

    constructor(server: Express) {
        super(server);
        this.registerEndPoint(RequestKind.POST, "/clientes/instituciones", {processor: Instituciones.crear},
            {
                resource: "Institucion",
                action: "Crear",
                description: "Crear institucion"
            }
        );
        this.registerEndPoint(RequestKind.GET, "/clientes/instituciones", {processor: Instituciones.buscar},
            {
                resource: "Institucion",
                action: "Consultar",
                description: "Consultar las institucion"
            }
        );
        this.registerEndPoint(RequestKind.POST, "/clientes/instituciones/link", {processor: Instituciones.asociarACliente},
            {
                resource: "Institucion",
                action: "Asociar",
                description: "Consultar las institucion"
            }
        );
    }
}