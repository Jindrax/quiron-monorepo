import IndexableEntity from "./auxiliar/IndexableEntity";
import { CampoSeccion } from "../components/campos/edicion";
import { Equipo } from "./index";
export interface PatronConstructor {
    id?: string;
    identificador?: string;
    marca?: string;
    modelo?: string;
    atributos?: CampoSeccion;
    equipos?: Equipo[];
}
export default class Patron extends IndexableEntity {
    id?: string;
    identificador?: string;
    marca: string;
    modelo: string;
    atributos: CampoSeccion;
    equipos: Equipo[];
    constructor({ id, identificador, marca, modelo, atributos, equipos }: PatronConstructor);
}
//# sourceMappingURL=Patron.d.ts.map