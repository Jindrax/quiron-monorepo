import {Campo} from "../Campo";
import {Dependiente} from "../Dependiente";
import {TiposElementos} from "../../index";

export class CampoChequeo extends Campo {
    opciones: string[];
    apertura: boolean;

    constructor(etiqueta?: string, dependiente?: Dependiente, opciones?: string[]) {
        super(TiposElementos.chequeo, etiqueta, dependiente);
        this.opciones = opciones ? opciones : [];
        this.apertura = false;
    }
}