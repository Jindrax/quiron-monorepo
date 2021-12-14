import {Campo} from "../Campo";
import {Dependiente} from "../Dependiente";
import {TiposElementos} from "../../index";

export enum DateType {
    implicit = 'implicit',
    explicit = 'explicit'
}

export enum DiccionarioDateType {
    implicit = 'Implicita',
    explicit = 'Explicita'
}

export class CampoFecha extends Campo {
    date_type: DateType;
    date: boolean;
    hour: boolean;
    format: string;

    constructor(etiqueta?: string, dependiente?: Dependiente, date_type?: DateType, date?: boolean, hour?: boolean, format?: string) {
        super(TiposElementos.fecha, etiqueta, dependiente);
        this.date_type = date_type ? date_type : DateType.implicit;
        this.date = date ? date : false;
        this.hour = hour ? hour : false;
        this.format = format? format : 'DD-MM-AAAA';
    }
}