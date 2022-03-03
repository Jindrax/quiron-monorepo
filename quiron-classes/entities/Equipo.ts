import OrdenTrabajo from "./OrdenTrabajo";
import Cliente from "./Cliente";
import Institucion from "./Institucion";
import IndexableEntity from "./auxiliar/IndexableEntity";
import {Patron} from "./index";

export interface EquipoConstructor {
    id?: string;
    patron?: Patron;
    serial?: string;
    marca?: string;
    modelo?: string;
    serie?: string;
    codigo?: string;
    responsable?: Cliente;
    institucion?: Institucion;
    ots?: OrdenTrabajo[];
    atributos?: Record<string, any>;
}

export default class Equipo extends IndexableEntity {
    id?: string;
    patron: Patron;
    serial: string = "";
    marca: string = "";
    modelo: string = "";
    serie: string = "";
    codigo: string = "";
    responsable: Cliente;
    institucion: Institucion;
    ots: OrdenTrabajo[];
    atributos: Record<string, any>;

    constructor({
                    id,
                    patron,
                    serial,
                    marca,
                    modelo,
                    serie,
                    codigo,
                    ots,
                    responsable,
                    institucion,
                    atributos
                }: EquipoConstructor) {
        super(["serial", "marca", "serie", "codigo"]);
        this.id = id ? id : "";
        this.patron = patron ? patron : new Patron({});
        this.serial = serial ? serial : "";
        this.marca = marca ? marca : "";
        this.modelo = modelo ? modelo : "";
        this.serie = serie ? serie : "";
        this.codigo = codigo ? codigo : "";
        this.responsable = responsable ? new Cliente(responsable) : new Cliente({});
        this.institucion = institucion ? new Institucion(institucion) : new Institucion({});
        this.ots = ots ? ots.map((element: any) => {
            return new OrdenTrabajo(element);
        }) : [];
        this.atributos = atributos ? atributos : {};
    }
}