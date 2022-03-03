import Equipo from "./Equipo";
import Contacto from "./Contacto";
import Institucion from "./Institucion";
import { OrdenTrabajo } from "./index";
export interface ClienteConstructor {
    id?: string;
    nombre?: string;
    identificacion?: string;
    direccion?: string;
    telefono?: string;
    contrato?: string;
    contacto?: Contacto;
    contactos?: Contacto[];
    equipos?: Equipo[];
    instituciones?: Institucion[];
    ots?: OrdenTrabajo[];
}
export default class Cliente {
    id?: string;
    nombre: string;
    identificacion: string;
    direccion: string;
    telefono: string;
    contrato: string;
    contacto: Contacto;
    contactos: Contacto[];
    equipos: Equipo[];
    instituciones: Institucion[];
    ots: OrdenTrabajo[];
    constructor({ id, nombre, identificacion, direccion, telefono, contrato, contacto, contactos, equipos, instituciones, ots }: ClienteConstructor);
}
//# sourceMappingURL=Cliente.d.ts.map