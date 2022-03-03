import Plantilla from "./Plantilla";
import { OrdenTrabajo } from "./index";
export interface ServicioConstructor {
    id?: string;
    identificador?: string;
    plantillas?: Plantilla[];
    ots?: OrdenTrabajo[];
}
export default class Servicio {
    id?: string;
    identificador: string;
    plantillas: Plantilla[];
    ots: OrdenTrabajo[];
    constructor({ id, identificador, plantillas, ots }: ServicioConstructor);
}
//# sourceMappingURL=Servicio.d.ts.map