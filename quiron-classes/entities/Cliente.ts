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

    constructor({id, nombre, identificacion, instituciones, institucionPrincipal, contactos, equipos}: ClienteConstructor) {
        this.id = id ? id : "";
        this.nombre = nombre ? nombre : "";
        this.identificacion = identificacion ? identificacion : "";
        this.instituciones = instituciones ? instituciones.map((element: any) => {
            return new Institucion(element);
        }) : [];
        this.institucionPrincipal = institucionPrincipal ? new Institucion(institucionPrincipal) : new Institucion({});
        this.contactos = contactos ? contactos.map((element: any) => {
            return new Contacto(element);
        }) : [];
        this.equipos = equipos ? equipos.map((element: any) => {
            return new Equipo(element);
        }) : [];
    }
}