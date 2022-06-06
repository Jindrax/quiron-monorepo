import OrdenTrabajo from "./OrdenTrabajo";
import Cliente from "./Cliente";
import Institucion from "./Institucion";
import IndexableEntity from "./auxiliar/IndexableEntity";
import {ReferenciaEquipo} from "./index";

export interface EquipoConstructor {
    id?: string;
    referenciaEquipo?: ReferenciaEquipo;
    serial?: string;
    marca?: string;
    modelo?: string;
    activoFijo?: string;
    responsable?: Cliente;
    institucion?: Institucion;
    ots?: OrdenTrabajo[];
    atributos?: Record<string, any>;
}

export default class Equipo extends IndexableEntity {
    id?: string;
    referenciaEquipo: ReferenciaEquipo;
    serial: string = "";
    marca: string = "";
    modelo: string = "";
    activoFijo: string = "";
    responsable: Cliente;
    institucion: Institucion;
    ots: OrdenTrabajo[];
    atributos: Record<string, any>;

    constructor({
                    id,
                    referenciaEquipo,
                    serial,
                    marca,
                    modelo,
                    activoFijo,
                    ots,
                    responsable,
                    institucion,
                    atributos
                }: EquipoConstructor) {
        super(["serial", "marca"]);
        this.id = id ? id : "";
        this.referenciaEquipo = referenciaEquipo ? referenciaEquipo : new ReferenciaEquipo({});
        this.serial = serial ? serial : "";
        this.marca = marca ? marca : "";
        this.modelo = modelo ? modelo : "";
        this.activoFijo = activoFijo ? activoFijo : "";
        this.responsable = responsable ? new Cliente(responsable) : new Cliente({});
        this.institucion = institucion ? new Institucion(institucion) : new Institucion({});
        this.ots = ots ? ots.map((element: any) => {
            return new OrdenTrabajo(element);
        }) : [];
        this.atributos = atributos ? atributos : {};
    }
}