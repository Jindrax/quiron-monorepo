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


    constructor({id, equipo, cliente, servicio, formularios}: OrdenTrabajoConstructor) {
        this.id = id ? id : "";
        this.equipo = equipo ? new Equipo(equipo) : new Equipo({});
        this.cliente = cliente ? new Cliente(cliente) : new Cliente({});
        this.servicio = servicio ? new Servicio(servicio) : new Servicio({});
        this.formularios = formularios ? formularios.map((element: any) => {
            return new Formulario(element);
        }) : [];
    }
}