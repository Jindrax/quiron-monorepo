import Plantilla from "./Plantilla";
import OrdenTrabajo from "./OrdenTrabajo";

export interface FormularioConstructor {
    id?: string;
    plantilla?: Plantilla;
    serial?: string;
    identificadorPlantilla?: string;
    datos?: Record<string, any>;
    ot?: OrdenTrabajo;
    finalizada?: boolean;
}

export default class Formulario {
    id?: string;
    plantilla: Plantilla;
    serial: string;
    identificadorPlantilla: string;
    datos: Record<string, any>;
    ot: OrdenTrabajo;
    finalizada: boolean;

    constructor({id, plantilla, serial, identificadorPlantilla, datos, ot, finalizada}: FormularioConstructor) {
        this.id = id ? id : "";
        this.plantilla = plantilla ? new Plantilla(plantilla) : new Plantilla({});
        this.serial = serial ? serial : "";
        this.identificadorPlantilla = identificadorPlantilla ? identificadorPlantilla : "";
        this.datos = datos ? datos : {};
        this.ot = ot ? new OrdenTrabajo(ot) : new OrdenTrabajo({});
        this.finalizada = finalizada ? finalizada : false;
    }
}