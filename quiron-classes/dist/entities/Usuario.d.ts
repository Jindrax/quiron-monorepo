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
    constructor({ id, identificacion, nombres, apellidos, fecha_nacimiento, password, cambiar_password, no_informacion, roles, firma }: UsuarioConstructor);
}
//# sourceMappingURL=Usuario.d.ts.map