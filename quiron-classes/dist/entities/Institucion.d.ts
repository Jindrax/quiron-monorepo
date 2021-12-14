import Contacto from "./Contacto";
export interface SucursalConstructor {
    id?: string;
    identificacion?: string;
    latitud?: number;
    longitud?: number;
    direccion?: string;
    ciudad?: string;
    departamento?: string;
    contactos?: Contacto[];
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
    constructor({ id, identificacion, latitud, longitud, direccion, ciudad, departamento, contactos }: SucursalConstructor);
}
//# sourceMappingURL=Institucion.d.ts.map