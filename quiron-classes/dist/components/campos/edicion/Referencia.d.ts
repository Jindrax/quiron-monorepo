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
    constructor(activated?: boolean, tipo?: TipoReferencia, identificador?: string);
}
//# sourceMappingURL=Referencia.d.ts.map