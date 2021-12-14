import { Campo } from "../Campo";
import { Dependiente } from "../Dependiente";
export declare class CampoTabla extends Campo {
    columnas: Campo[];
    minFilas: number;
    maxFilas: number;
    constructor(etiqueta?: string, dependiente?: Dependiente, columnas?: []);
}
//# sourceMappingURL=CampoTabla.d.ts.map