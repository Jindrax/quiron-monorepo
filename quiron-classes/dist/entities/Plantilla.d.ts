import { CampoSeccion } from "../components/campos/edicion";
import Cacheable from "./auxiliar/Cacheable";
export interface PlantillaConstructor {
    serial?: string;
    version?: number;
    identificador?: string;
    modelo?: CampoSeccion;
    relacionadas?: Plantilla[];
}
export default class Plantilla extends Cacheable {
    serial: string;
    version: number;
    identificador: string;
    modelo: CampoSeccion;
    relacionadas: Plantilla[];
    constructor({ serial, version, identificador, modelo, relacionadas }: PlantillaConstructor);
}
//# sourceMappingURL=Plantilla.d.ts.map