import OrdenTrabajo from "./OrdenTrabajo";
import Cliente from "./Cliente";
import Institucion from "./Institucion";
import IndexableEntity from "./auxiliar/IndexableEntity";
import { Patron } from "./index";
export interface EquipoConstructor {
    id?: string;
    patron?: Patron;
    serial?: string;
    marca?: string;
    modelo?: string;
    serie?: string;
    codigo?: string;
    responsable?: Cliente;
    institucion?: Institucion;
    ots?: OrdenTrabajo[];
    atributos?: Record<string, any>;
}
export default class Equipo extends IndexableEntity {
    id?: string;
    patron: Patron;
    serial: string;
    marca: string;
    modelo: string;
    serie: string;
    codigo: string;
    responsable: Cliente;
    institucion: Institucion;
    ots: OrdenTrabajo[];
    atributos: Record<string, any>;
    constructor({ id, patron, serial, marca, modelo, serie, codigo, ots, responsable, institucion, atributos }: EquipoConstructor);
}
//# sourceMappingURL=Equipo.d.ts.map