import Usuario from "./Usuario";
import { Permission } from "../auth";
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
    constructor({ identificador, descripcion, permisos, usuarios }: RolConstructor);
}
//# sourceMappingURL=Rol.d.ts.map