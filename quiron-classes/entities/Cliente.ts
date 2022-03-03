import Equipo from "./Equipo";
import Contacto from "./Contacto";
import Institucion from "./Institucion";
import {OrdenTrabajo} from "./index";

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

    constructor({
                    id,
                    nombre,
                    identificacion,
                    direccion,
                    telefono,
                    contrato,
                    contacto,
                    contactos,
                    equipos,
                    instituciones,
                    ots
                }: ClienteConstructor) {
        this.id = id ? id : "";
        this.nombre = nombre ? nombre : "";
        this.identificacion = identificacion ? identificacion : "";
        this.direccion = direccion ? direccion : "";
        this.telefono = telefono ? telefono : "";
        this.contrato = contrato ? contrato : "";
        this.contacto = contacto ? contacto : new Contacto({});
        this.contactos = contactos ? contactos.map((element: any) => {
            return new Contacto(element);
        }) : [];
        this.equipos = equipos ? equipos.map((element: any) => {
            return new Equipo(element);
        }) : [];
        this.instituciones = instituciones ? instituciones.map((element: any) => {
            return new Institucion(element);
        }) : [];
        this.ots = ots ? ots.map((element: any) => {
            return new OrdenTrabajo(element);
        }) : [];
    }
}