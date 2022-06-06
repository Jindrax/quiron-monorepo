import { TiposElementos } from "../index";
export declare enum TipoReferencia {
    "PLANTILLA" = "Plantilla",
    "EQUIPO" = "Equipo",
    "CLIENTE" = "Cliente",
    "SERVICIO" = "Servicio"
}
export declare class Referencia {
    activated: boolean;
    tipo: TipoReferencia;
    identificador: string;
    elemento: TiposElementos;
    constructor(activated?: boolean, tipo?: TipoReferencia, identificador?: string, elemento?: TiposElementos);
}
//# sourceMappingURL=Referencia.d.ts.map