import { Campo } from "../../Campo";
import { Dependiente } from "../../Dependiente";
import { Medida } from "./Medida";
export declare class CampoMediciones extends Campo {
    medidas: Medida[];
    etiquetaMedida: string;
    medidasMinimas: number;
    descriptorInstrucciones: string;
    medidasMaximas: number;
    necesitaRango: boolean;
    necesitaGrafica: boolean;
    constructor(etiqueta?: string, dependiente?: Dependiente, etiquetaMedida?: string);
    addMedida(medida: Medida): void;
    setMedidasMinimas(value: number): void;
}
//# sourceMappingURL=CampoMediciones.d.ts.map