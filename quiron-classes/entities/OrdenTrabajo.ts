import Equipo from "./Equipo";
import Formulario from "./Formulario";
import Cliente from "./Cliente";
import Servicio from "./Servicio";
import {Institucion} from "./index";

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


    constructor({id, equipo, cliente, servicio, institucion, formularios}: OrdenTrabajoConstructor) {
        this.id = id ? id : "";
        this.servicio = servicio ? new Servicio(servicio) : new Servicio({});
        this.equipo = equipo ? new Equipo(equipo) : new Equipo({});
        this.cliente = cliente ? new Cliente(cliente) : new Cliente({});
        this.institucion = institucion ? institucion : new Institucion({});
        this.formularios = formularios ? formularios.map((element: any) => {
            return new Formulario(element);
        }) : [];
    }
}