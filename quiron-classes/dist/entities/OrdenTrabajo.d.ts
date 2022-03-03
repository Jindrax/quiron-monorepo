import Equipo from "./Equipo";
import Formulario from "./Formulario";
import Cliente from "./Cliente";
import Servicio from "./Servicio";
import { Institucion } from "./index";
export interface OrdenTrabajoConstructor {
    id?: string;
    servicio?: Servicio;
    equipo?: Equipo;
    cliente?: Cliente;
    institucion?: Institucion;
    formularios?: Formulario[];
}
export default class OrdenTrabajo {
    id?: string;
    servicio: Servicio;
    equipo: Equipo;
    cliente: Cliente;
    institucion: Institucion;
    formularios: Formulario[];
    constructor({ id, equipo, cliente, servicio, institucion, formularios }: OrdenTrabajoConstructor);
}
//# sourceMappingURL=OrdenTrabajo.d.ts.map