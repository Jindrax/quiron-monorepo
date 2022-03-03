import Plantilla from "./Plantilla";
import {OrdenTrabajo} from "./index";

export interface ServicioConstructor {
    id?: string;
    identificador?: string;
    plantillas?: Plantilla[];
    ots?: OrdenTrabajo[];
}

export default class Servicio {
    id?: string;
    identificador: string;
    plantillas: Plantilla[];
    ots: OrdenTrabajo[];

    constructor({id, identificador, plantillas, ots}: ServicioConstructor) {
        this.id = id ? id : "";
        this.identificador = identificador ? identificador : "";
        this.plantillas = plantillas ? plantillas.map((element: any) => {
            return new Plantilla(element);
        }) : [];
        this.ots = ots ? ots.map((element: any) => {
            return new OrdenTrabajo(element);
        }) : [];
    }
}