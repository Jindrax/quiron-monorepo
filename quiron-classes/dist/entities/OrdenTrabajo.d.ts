import Equipo from "./Equipo";
import Formulario from "./Formulario";
import Cliente from "./Cliente";
import Servicio from "./Servicio";
export interface OrdenTrabajoConstructor {
    id?: string;
    equipo?: Equipo;
    cliente?: Cliente;
    servicio?: Servicio;
    formularios?: Formulario[];
}
export default class OrdenTrabajo {
    id?: string;
    equipo: Equipo;
    cliente: Cliente;
    servicio: Servicio;
    formularios: Formulario[];
    constructor({ id, equipo, cliente, servicio, formularios }: OrdenTrabajoConstructor);
}
//# sourceMappingURL=OrdenTrabajo.d.ts.map