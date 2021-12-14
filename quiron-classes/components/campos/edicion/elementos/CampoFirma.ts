import {Campo} from "../Campo";
import {Dependiente} from "../Dependiente";
import {TiposElementos} from "../../index";

export enum SignerType {
    author = 'author',
    other = 'other'
}

export enum DiccionarioSignerType {
    author = 'Autor',
    other = 'Agente Externo'
}

export class CampoFirma extends Campo {
    signer: SignerType;

    constructor(etiqueta?: string, dependiente?: Dependiente, signer?: SignerType) {
        super(TiposElementos.firma, etiqueta, dependiente);
        this.signer = signer ? signer : SignerType.author;
    }
}