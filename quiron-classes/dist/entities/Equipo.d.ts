/// <reference types="node" />
import OrdenTrabajo from "./OrdenTrabajo";
import Cliente from "./Cliente";
import Institucion from "./Institucion";
import IndexableEntity from "./auxiliar/IndexableEntity";
export interface EquipoConstructor {
    id?: string;
    serial?: string;
    marca?: string;
    modelo?: string;
    serie?: string;
    codigo?: string;
    garantia?: Buffer;
    responsable?: Cliente;
    institucion?: Institucion;
    ots?: OrdenTrabajo[];
    atributos?: Record<string, any>;
}
export default class Equipo extends IndexableEntity {
    id: string;
    serial: string;
    marca: string;
    modelo: string;
    serie: string;
    codigo: string;
    garantia: Buffer;
    responsable: Cliente;
    institucion: Institucion;
    ots: OrdenTrabajo[];
    atributos: Record<string, any>;
    constructor({ id, serial, marca, modelo, serie, codigo, ots, garantia, responsable, institucion, atributos }: EquipoConstructor);
}
//# sourceMappingURL=Equipo.d.ts.map