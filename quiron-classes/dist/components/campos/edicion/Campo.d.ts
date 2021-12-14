import { TiposElementos } from '../index';
import { Dependiente } from "./Dependiente";
import { Referencia } from "./Referencia";
export declare class Campo {
    elemento: TiposElementos;
    etiqueta: string;
    dependiente: Dependiente;
    presentacion: string;
    referencia: Referencia;
    value: any;
    constructor(elemento?: TiposElementos, etiqueta?: string, dependiente?: Dependiente, presentacion?: string, referencia?: Referencia, value?: any);
}
//# sourceMappingURL=Campo.d.ts.map