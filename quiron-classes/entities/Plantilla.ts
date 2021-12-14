import {CampoSeccion} from "../components/campos/edicion";
import {plainToClass, Type} from "class-transformer";
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
    @Type(() => CampoSeccion)
    modelo: CampoSeccion;
    relacionadas: Plantilla[];

    constructor({serial, version, identificador, modelo, relacionadas}: PlantillaConstructor) {
        super();
        this.serial = serial ? serial : "";
        this.version = version ? version : 1;
        this.identificador = identificador ? identificador : "";
        this.modelo = modelo ? plainToClass<CampoSeccion, any>(CampoSeccion, modelo) : new CampoSeccion("raiz");
        this.relacionadas = relacionadas ? relacionadas.map((element: any) => {
            return new Plantilla(element);
        }) : [];
    }
}