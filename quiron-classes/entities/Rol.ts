import Usuario from "./Usuario";
import {Permission} from "../auth";

export interface RolConstructor {
    identificador?: string;
    descripcion?: string;
    permisos?: Record<string, Permission>;
    usuarios?: Usuario[];
}

export default class Rol {
    identificador: string;
    descripcion: string;
    permisos: Record<string, Permission>;
    usuarios: Usuario[];

    constructor({identificador, descripcion, permisos, usuarios}: RolConstructor) {
        this.identificador = identificador ? identificador : "";
        this.descripcion = descripcion ? descripcion : "";
        this.permisos = permisos ? permisos : {};
        this.usuarios = usuarios ? usuarios.map((element: any) => {
            return new Usuario(element);
        }) : [];
    }
}