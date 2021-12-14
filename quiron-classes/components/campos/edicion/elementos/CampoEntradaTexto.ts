import {Campo} from "../Campo";
import {Dependiente} from "../Dependiente";
import {TiposElementos} from "../../index";

export class CampoEntradaTexto extends Campo {
    constructor(etiqueta?: string, dependiente?: Dependiente) {
        super(TiposElementos['entrada-texto'], etiqueta, dependiente);
    }
}