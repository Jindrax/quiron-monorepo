import OrdenTrabajo from "./OrdenTrabajo";
import Cliente from "./Cliente";
import Institucion from "./Institucion";
import IndexableEntity from "./auxiliar/IndexableEntity";
import { ReferenciaEquipo } from "./index";
export interface EquipoConstructor {
    id?: string;
    referenciaEquipo?: ReferenciaEquipo;
    serial?: string;
    marca?: string;
    modelo?: string;
    activoFijo?: string;
    responsable?: Cliente;
    institucion?: Institucion;
    ots?: OrdenTrabajo[];
    atributos?: Record<string, any>;
}
export default class Equipo extends IndexableEntity {
    id?: string;
    referenciaEquipo: ReferenciaEquipo;
    serial: string;
    marca: string;
    modelo: string;
    activoFijo: string;
    responsable: Cliente;
    institucion: Institucion;
    ots: OrdenTrabajo[];
    atributos: Record<string, any>;
    constructor({ id, referenciaEquipo, serial, marca, modelo, activoFijo, ots, responsable, institucion, atributos }: EquipoConstructor);
}
//# sourceMappingURL=Equipo.d.ts.map