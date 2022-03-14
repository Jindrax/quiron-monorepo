import Plantilla from "./Plantilla";
import OrdenTrabajo from "./OrdenTrabajo";
export interface FormularioConstructor {
    id?: string;
    plantilla?: Plantilla;
    serial?: string;
    identificadorPlantilla?: string;
    datos?: Record<string, any>;
    ot?: OrdenTrabajo;
    finalizada?: boolean;
}
export default class Formulario {
    id?: string;
    plantilla: Plantilla;
    serial: string;
    identificadorPlantilla: string;
    datos: Record<string, any>;
    ot: OrdenTrabajo;
    finalizada: boolean;
    constructor({ id, plantilla, serial, identificadorPlantilla, datos, ot, finalizada }: FormularioConstructor);
}
//# sourceMappingURL=Formulario.d.ts.map