import {Campo} from "../../Campo";
import {Dependiente} from "../../Dependiente";
import {TiposElementos} from "../../../index";
import {Medida} from "./Medida";

export class CampoMediciones extends Campo {

    medidas: Medida[];
    etiquetaMedida: string;
    medidasMinimas: number;
    descriptorInstrucciones: string;
    medidasMaximas: number;
    necesitaRango: boolean;
    necesitaGrafica: boolean;


    constructor(etiqueta?: string, dependiente?: Dependiente, etiquetaMedida?: string) {
        super(TiposElementos.mediciones, etiqueta, dependiente);
        this.etiquetaMedida = etiquetaMedida? etiquetaMedida : "";
        this.medidas = [];
        this.medidasMinimas = 0;
        this.descriptorInstrucciones = "Dial";
        this.medidasMaximas = 0;
        this.necesitaRango = true;
        this.necesitaGrafica = false;
    }

    public addMedida(medida: Medida){
        this.medidas.push(medida);
    }


    public setMedidasMinimas(value: number) {
        this.medidasMinimas = value;
    }
}