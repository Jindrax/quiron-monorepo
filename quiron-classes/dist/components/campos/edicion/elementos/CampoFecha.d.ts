import { Campo } from "../Campo";
import { Dependiente } from "../Dependiente";
export declare enum DateType {
    implicit = "implicit",
    explicit = "explicit"
}
export declare enum DiccionarioDateType {
    implicit = "Implicita",
    explicit = "Explicita"
}
export declare class CampoFecha extends Campo {
    date_type: DateType;
    date: boolean;
    hour: boolean;
    format: string;
    constructor(etiqueta?: string, dependiente?: Dependiente, date_type?: DateType, date?: boolean, hour?: boolean, format?: string);
}
//# sourceMappingURL=CampoFecha.d.ts.map