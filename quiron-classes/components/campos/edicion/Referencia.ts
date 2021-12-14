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

    constructor(activated?: boolean, tipo?: TipoReferencia, identificador?: string) {
        this.activated = activated ? activated : false;
        this.tipo = tipo ? tipo : TipoReferencia.PLANTILLA;
        this.identificador = identificador ? identificador : "raiz";
    }
}