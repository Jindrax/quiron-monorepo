export enum TiposElementos {
    'entrada-texto' = 'entrada-texto',
    'entrada-numerica' = 'entrada-numerica',
    seccion = 'seccion',
    chequeo = 'chequeo',
    seleccion = 'seleccion',
    tabla = 'tabla',
    'tabla-compuesta' = 'tabla-compuesta',
    parametro = 'parametro',
    fecha = 'fecha',
    firma = 'firma',
    imagen = 'imagen',
    mediciones = 'mediciones',
    informacion = 'informacion'
}

export enum DiccionarioTiposElementos {
    'entrada-texto' = 'Entrada de texto',
    'entrada-numerica' = 'Entrada numerica',
    seccion = 'Seccion',
    chequeo = 'Chequeo',
    seleccion = 'Seleccion',
    tabla = 'Tabla',
    'tabla-compuesta' = 'Tabla Compuesta',
    parametro = 'Parametro',
    fecha = 'Fecha',
    firma = 'Firma',
    imagen = 'Imagen',
    mediciones = 'Mediciones',
    informacion = 'Informacion'
}

export * as edicion from "./edicion";

export const CAMPOS_REFERENCIABLES = [
    TiposElementos["entrada-numerica"],
    TiposElementos["entrada-texto"],
    TiposElementos.chequeo,
    TiposElementos.seleccion,
    TiposElementos.tabla,
    TiposElementos.fecha,
    TiposElementos.firma,
    TiposElementos.imagen,
    TiposElementos.mediciones,
    TiposElementos.informacion
];