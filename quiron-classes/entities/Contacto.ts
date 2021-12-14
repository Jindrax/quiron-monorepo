import Institucion from "./Institucion";

export interface ContactoConstructor {
    id?: string;
    identificacion?: string;
    nombres?: string;
    apellidos?: string;
    telefonos?: string[];
    emails?: string[];
    instituciones?: Institucion[];
}

export default class Contacto {
    id?: string;
    identificacion: string;
    nombres: string;
    apellidos: string;
    telefonos: string[];
    emails: string[];
    instituciones: Institucion[];

    constructor({id, identificacion, nombres, apellidos, telefonos, emails, instituciones}: ContactoConstructor) {
        this.id = id ? id : "";
        this.identificacion = identificacion ? identificacion : "";
        this.nombres = nombres ? nombres : "";
        this.apellidos = apellidos ? apellidos : "";
        this.telefonos = telefonos ? telefonos : [];
        this.emails = emails ? emails : [];
        this.instituciones = instituciones ? instituciones.map((element: any) => {
            return new Institucion(element);
        }) : [];
    }
}