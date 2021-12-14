import {Campo} from "../Campo";
import {Dependiente} from "../Dependiente";
import {TiposElementos} from "../../index";

export class CampoEntradaNumerica extends Campo {
    rango: boolean;
    rangoInferior: number;
    rangoSuperior: number;

    constructor(etiqueta?: string, dependiente?: Dependiente) {
        super(TiposElementos['entrada-numerica'], etiqueta, dependiente);
        this.rango = false;
        this.rangoInferior = 0;
        this.rangoSuperior = 0;
    }
}