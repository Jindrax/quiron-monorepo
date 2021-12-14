import {Campo} from "../Campo";
import {Dependiente} from "../Dependiente";
import {TiposElementos} from "../../index";

export class CampoInformacion extends Campo {
    public informacion: string = '';

    constructor(etiqueta?: string, dependiente?: Dependiente) {
        super(TiposElementos.informacion, etiqueta, dependiente);
    }
}