import {Campo} from "../../Campo";
import {Dependiente} from "../../Dependiente";
import {TiposElementos} from "../../../index";

type CampoValidador = {
    [key: string]: Campo
}

export class CampoCheckList extends Campo{
    items: string[];
    validadores: CampoValidador;

    constructor(etiqueta?: string, dependiente?: Dependiente, items?: string[], validadores?: CampoValidador) {
        super(TiposElementos.checkList, etiqueta, dependiente);
        this.items = items? items : [];
        this.validadores = validadores? validadores : {};
    }
}
