import {Campo} from "../Campo";
import {Dependiente} from "../Dependiente";
import {TiposElementos} from "../../index";

export enum ImagenType {
    preloaded = 'preloaded',
    load = 'load'
}

export enum DiccionarioImagenType {
    preloaded = 'Precargada',
    load = 'Carga'
}

export class CampoImagen extends Campo {
    type: ImagenType;
    data: string;
    height: number;
    width: number;
    title: boolean;

    constructor(etiqueta?: string, dependiente?: Dependiente, type?: ImagenType, data?: string, height?: number, width?: number, title?: boolean) {
        super(TiposElementos.imagen, etiqueta, dependiente);
        this.type = type ? type : ImagenType.preloaded;
        this.data = data ? data : '';
        this.height = height ? height : 100;
        this.width = width ? width : 100;
        this.title = title ? title : true;
    }
}