import {Type} from "class-transformer";
import {Campo} from "../Campo";
import {Dependiente} from "../Dependiente";
import {TiposElementos} from "../../index";

export class CampoSeccion extends Campo {
    @Type(()=>Campo)
    elementos: Campo[];

    constructor(etiqueta?: string, dependiente?: Dependiente, elementos?: Campo[]) {
        super(TiposElementos.seccion, etiqueta, dependiente);
        this.elementos = elementos ? elementos : [];
    }
}