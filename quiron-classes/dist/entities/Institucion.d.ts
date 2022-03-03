import Contacto from "./Contacto";
import Cliente from "./Cliente";
import { Equipo, OrdenTrabajo } from "./index";
export interface InstitucionConstructor {
    id?: string;
    identificacion?: string;
    latitud?: number;
    longitud?: number;
    direccion?: string;
    ciudad?: string;
    departamento?: string;
    contactos?: Contacto[];
    clientes?: Cliente[];
    equipos?: Equipo[];
    ots?: OrdenTrabajo[];
}
export default class Institucion {
    id?: string;
    identificacion: string;
    latitud: number;
    longitud: number;
    direccion: string;
    ciudad: string;
    departamento: string;
    contactos: Contacto[];
    clientes: Cliente[];
    equipos: Equipo[];
    ots: OrdenTrabajo[];
    constructor({ id, identificacion, latitud, longitud, direccion, ciudad, departamento, contactos, clientes, equipos, ots }: InstitucionConstructor);
}
//# sourceMappingURL=Institucion.d.ts.map