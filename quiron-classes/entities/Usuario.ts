import Rol from "./Rol";

export interface UsuarioConstructor {
    id?: string;
    identificacion?: string;
    nombres?: string;
    apellidos?: string;
    fecha_nacimiento?: Date;
    password?: string;
    cambiar_password?: boolean;
    no_informacion?: boolean;
    roles?: Rol[];
    firma?: string;
}

export default class Usuario {
    id?: string;
    identificacion: string;
    nombres: string;
    apellidos: string;
    fecha_nacimiento: Date;
    password: string;
    cambiar_password: boolean;
    no_informacion: boolean;
    roles: Rol[];
    firma: string;

    constructor({
                    id,
                    identificacion,
                    nombres,
                    apellidos,
                    fecha_nacimiento,
                    password,
                    cambiar_password,
                    no_informacion,
                    roles,
                    firma
                }: UsuarioConstructor) {
        this.id = id ? id : "";
        this.identificacion = identificacion ? identificacion : "";
        this.nombres = nombres ? nombres : "";
        this.apellidos = apellidos ? apellidos : "";
        this.fecha_nacimiento = fecha_nacimiento ? fecha_nacimiento : new Date();
        this.password = password ? password : "";
        this.cambiar_password = cambiar_password ? cambiar_password : false;
        this.no_informacion = no_informacion ? no_informacion : false;
        this.roles = roles ? roles.map((element: any) => {
            return new Rol(element);
        }) : [];
        this.firma = firma ? firma : "";
    }
}