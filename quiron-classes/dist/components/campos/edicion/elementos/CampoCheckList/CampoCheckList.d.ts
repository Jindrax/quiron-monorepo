import { Campo } from "../../Campo";
import { Dependiente } from "../../Dependiente";
export interface CondicionalValidador {
    validador: Campo;
    valor: string;
    campoValidado: Campo;
}
export declare class CampoCheckList extends Campo {
    items: string[];
    validadores: Campo[];
    condicionales: CondicionalValidador[];
    constructor(etiqueta?: string, dependiente?: Dependiente, items?: string[], validadores?: Campo[], condicionales?: CondicionalValidador[]);
}
//# sourceMappingURL=CampoCheckList.d.ts.map