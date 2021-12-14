import { Campo } from "../Campo";
import { TiposElementos } from "../../index";
import { Dependiente } from "../Dependiente";
export interface TablaCompuestaParametro {
    etiqueta: string;
    columnas: any[];
}
export declare class CampoTablaCompuesta extends Campo {
    descriptor: string;
    parametros: TablaCompuestaParametro[];
    columnas: TiposElementos[];
    constructor(etiqueta?: string, dependiente?: Dependiente, descriptor?: string, parametros?: [], columnas?: []);
}
//# sourceMappingURL=CampoTablaCompuesta.d.ts.map