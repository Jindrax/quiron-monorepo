import Binder, {RequestKind} from "./Binder";
import {Express} from "express";
import Informacion from "../modules/Informacion";

export default class InformacionBinder extends Binder {
    constructor(server: Express) {
        super(server);
        this.registerEndPoint(RequestKind.GET, "/info/departamentos", {processor: Informacion.departamentos});
        this.registerEndPoint(RequestKind.GET, "/info/municipios", {processor: Informacion.municipios});
    }
}