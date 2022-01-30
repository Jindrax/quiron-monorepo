export interface ContactoConstructor {
    id?: string;
    identificacion?: string;
    nombres?: string;
    apellidos?: string;
    telefonos?: string[];
    emails?: string[];
}

export default class Contacto {
    id?: string;
    identificacion: string;
    nombres: string;
    apellidos: string;
    telefonos: string[];
    emails: string[];

    constructor({id, identificacion, nombres, apellidos, telefonos, emails}: ContactoConstructor) {
        this.id = id ? id : "";
        this.identificacion = identificacion ? identificacion : "";
        this.nombres = nombres ? nombres : "";
        this.apellidos = apellidos ? apellidos : "";
        this.telefonos = telefonos ? telefonos : [];
        this.emails = emails ? emails : [];
    }
}