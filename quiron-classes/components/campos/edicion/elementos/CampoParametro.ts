import {Campo} from "../Campo";
import {Dependiente} from "../Dependiente";
import {TiposElementos} from "../../index";

export class CampoParametro extends Campo {
    parametros: [];

    constructor(etiqueta?: string, dependiente?: Dependiente, parametros?: []) {
        super(TiposElementos.parametro, etiqueta, dependiente);
        this.parametros = parametros ? parametros : [];
    }
}