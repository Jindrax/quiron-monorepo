import {Campo} from "../../Campo";
import {Dependiente} from "../../Dependiente";
import {TiposElementos} from "../../../index";

export interface CondicionalValidador{
    validador: Campo
    valor: string
    campoValidado: Campo
}

export class CampoCheckList extends Campo{
    items: string[];
    validadores: Campo[];
    condicionales: CondicionalValidador[];

    constructor(etiqueta?: string, dependiente?: Dependiente, items?: string[], validadores?: Campo[], condicionales?: CondicionalValidador[]) {
        super(TiposElementos.checkList, etiqueta, dependiente);
        this.items = items? items : [];
        this.validadores = validadores? validadores : [];
        this.condicionales = condicionales? condicionales : [];
    }
}
