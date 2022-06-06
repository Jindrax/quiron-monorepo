import IndexableEntity from "./auxiliar/IndexableEntity";
import {CampoSeccion} from "../components/campos/edicion";
import {Equipo} from "./index";

export interface ReferenciaEquipoConstructor {
    id?: string;
    identificador?: string;
    marca?: string;
    modelo?: string;
    atributos?: CampoSeccion;
    equipos?: Equipo[];
}

export default class ReferenciaEquipo extends IndexableEntity {
    id?: string;
    identificador?: string;
    marca: string = "";
    modelo: string = "";
    atributos: CampoSeccion;
    equipos: Equipo[];

    constructor({
                    id,
                    identificador,
                    marca,
                    modelo,
                    atributos,
                    equipos
                }: ReferenciaEquipoConstructor) {
        super(["marca", "modelo"]);
        this.id = id ? id : "";
        this.identificador = identificador ? identificador : "";
        this.marca = marca ? marca : "";
        this.modelo = modelo ? modelo : "";
        this.atributos = atributos ? atributos : new CampoSeccion("Atributos");
        this.equipos = equipos ? equipos : [];
    }
}