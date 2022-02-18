import { Campo } from "../../Campo";
import { Dependiente } from "../../Dependiente";
declare type CampoValidador = {
    [key: string]: Campo;
};
export declare class CheckList extends Campo {
    items: string[];
    validadores: CampoValidador;
    constructor(etiqueta?: string, dependiente?: Dependiente, items?: string[], validadores?: CampoValidador);
}
export {};
//# sourceMappingURL=CampoCheckList.d.ts.map