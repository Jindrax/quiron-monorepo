import Institucion from "./Institucion";
import Equipo from "./Equipo";
import Contacto from "./Contacto";
export interface ClienteConstructor {
    id?: string;
    nombre?: string;
    identificacion?: string;
    instituciones?: Institucion[];
    institucionPrincipal?: Institucion;
    contactos?: Contacto[];
    equipos?: Equipo[];
}
export default class Cliente {
    id?: string;
    nombre: string;
    identificacion: string;
    instituciones: Institucion[];
    institucionPrincipal: Institucion;
    contactos: Contacto[];
    equipos: Equipo[];
    constructor({ id, nombre, identificacion, instituciones, institucionPrincipal, contactos, equipos }: ClienteConstructor);
}
//# sourceMappingURL=Cliente.d.ts.map