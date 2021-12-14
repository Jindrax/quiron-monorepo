import Binder, {RequestKind} from "./Binder";
import {Express} from "express";
import Contactos from "../modules/Contactos";

export default class ContactosBinder extends Binder {

    constructor(server: Express) {
        super(server);
        this.registerEndPoint(RequestKind.POST, "/clientes/contactos", {processor: Contactos.crear},
            {
                resource: "Contacto",
                action: "Crear",
                description: "Crear contacto"
            }
        );
        this.registerEndPoint(RequestKind.GET, "/clientes/contactos", {processor: Contactos.buscar},
            {
                resource: "Contacto",
                action: "Consultar",
                description: "Consultar los contactos"
            }
        );
    }
}