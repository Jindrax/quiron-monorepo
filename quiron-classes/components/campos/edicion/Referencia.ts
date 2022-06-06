import {TiposElementos} from "../index";

export enum TipoReferencia {
    "PLANTILLA" = "Plantilla",
    "EQUIPO" = "Equipo",
    "CLIENTE" = "Cliente",
    "SERVICIO" = "Servicio"
}

export class Referencia {
    activated: boolean;
    tipo: TipoReferencia;
    identificador: string;
    elemento: TiposElementos;

    constructor(activated?: boolean, tipo?: TipoReferencia, identificador?: string, elemento?: TiposElementos) {
        this.activated = activated ? activated : false;
        this.tipo = tipo ? tipo : TipoReferencia.PLANTILLA;
        this.identificador = identificador ? identificador : "raiz";
        this.elemento = elemento ? elemento : TiposElementos["entrada-texto"];
    }
}