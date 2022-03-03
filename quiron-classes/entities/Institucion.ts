import Contacto from "./Contacto";
import Cliente from "./Cliente";
import {Equipo, OrdenTrabajo} from "./index";

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

    constructor({
                    id,
                    identificacion,
                    latitud,
                    longitud,
                    direccion,
                    ciudad,
                    departamento,
                    contactos,
                    clientes,
                    equipos,
                    ots
                }: InstitucionConstructor) {
        this.id = id ? id : "";
        this.identificacion = identificacion ? identificacion : "";
        this.latitud = latitud ? latitud : 0;
        this.longitud = longitud ? longitud : 0;
        this.direccion = direccion ? direccion : "";
        this.ciudad = ciudad ? ciudad : "";
        this.departamento = departamento ? departamento : "";
        this.contactos = contactos ? contactos.map((element: any) => {
            return new Contacto(element);
        }) : [];
        this.clientes = clientes ? clientes.map((element: any) => {
            return new Cliente(element);
        }) : [];
        this.equipos = equipos ? equipos.map((element: any) => {
            return new Equipo(element);
        }) : [];
        this.ots = ots ? ots.map((element: any) => {
            return new OrdenTrabajo(element);
        }) : [];
    }
}
