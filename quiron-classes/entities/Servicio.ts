import Plantilla from "./Plantilla";

export interface ServicioConstructor {
    id?: string;
    plantillas?: Plantilla[];
    atributos?: Record<string, any>;
}

export default class Servicio {
    id?: string;
    plantillas: Plantilla[];
    atributos: Record<string, any>;

    constructor({id, plantillas, atributos}: ServicioConstructor) {
        this.id = id ? id : "";
        this.plantillas = plantillas ? plantillas.map((element: any) => {
            return new Plantilla(element);
        }) : [];
        this.atributos = atributos ? atributos : {};
    }
}