import { Campo } from "../Campo";
import { Dependiente } from "../Dependiente";
export declare enum ImagenType {
    preloaded = "preloaded",
    load = "load"
}
export declare enum DiccionarioImagenType {
    preloaded = "Precargada",
    load = "Carga"
}
export declare class CampoImagen extends Campo {
    type: ImagenType;
    data: string;
    height: number;
    width: number;
    title: boolean;
    constructor(etiqueta?: string, dependiente?: Dependiente, type?: ImagenType, data?: string, height?: number, width?: number, title?: boolean);
}
//# sourceMappingURL=CampoImagen.d.ts.map