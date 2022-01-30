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
    constructor({ id, identificacion, nombres, apellidos, telefonos, emails }: ContactoConstructor);
}
//# sourceMappingURL=Contacto.d.ts.map