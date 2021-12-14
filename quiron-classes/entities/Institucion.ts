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

    constructor({
                    id,
                    identificacion,
                    latitud,
                    longitud,
                    direccion,
                    ciudad,
                    departamento,
                    contactos
                }: SucursalConstructor) {
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
    }
}
