import {Campo} from "../Campo";
import {TiposElementos} from "../../index";
import {Dependiente} from "../Dependiente";

export interface TablaCompuestaParametro {
    etiqueta: string,
    columnas: any[]
}

export class CampoTablaCompuesta extends Campo {
    descriptor: string;
    parametros: TablaCompuestaParametro[];
    columnas: TiposElementos[];

    constructor(etiqueta?: string, dependiente?: Dependiente, descriptor?: string, parametros?: [], columnas?: []) {
        super(TiposElementos['tabla-compuesta'], etiqueta, dependiente);
        this.descriptor = descriptor ? descriptor : '';
        this.parametros = parametros ? parametros : [];
        this.columnas = columnas ? columnas : [];
    }
}