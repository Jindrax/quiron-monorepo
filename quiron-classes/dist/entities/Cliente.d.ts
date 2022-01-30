import Equipo from "./Equipo";
import Contacto from "./Contacto";
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
    constructor({ id, nombre, identificacion, direccion, telefono, contrato, contacto, contactos, equipos }: ClienteConstructor);
}
//# sourceMappingURL=Cliente.d.ts.map