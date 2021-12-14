import {Rango} from "./Rango";

export class Medida{
    instruccion: string;
    rango: Rango;

    constructor(instruccion: string, rangoInferior:number, rangoSuperior:number) {
        this.instruccion = instruccion;
        this.rango = new Rango(rangoInferior, rangoSuperior);
    }
}