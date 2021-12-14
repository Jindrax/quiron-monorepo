import {Campo} from "../Campo";
import {Dependiente} from "../Dependiente";
import {TiposElementos} from "../../index";

export class CampoTabla extends Campo {
    columnas: Campo[];
    minFilas: number;
    maxFilas: number;

    constructor(etiqueta?: string, dependiente?: Dependiente, columnas?: []) {
        super(TiposElementos.tabla, etiqueta, dependiente);
        this.columnas = columnas ? columnas : [];
        this.minFilas = 0;
        this.maxFilas = 0;
    }
}