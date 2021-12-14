export interface ParametrosCampo{
  //Etiqueta de los parametros en una tabla compuesta
  etiqueta:string;
  //Parametros etiquetados de una fila en una tabla compuesta
  parametros:string[];
}
export default interface CampoEditarElemento {
  //Tipo de elemento al que hace referencia el campo
  elemento: string;
  //Etiqueta que sera presentada sobre el campo
  etiqueta: string;
  //Funcion que devuelve la informacion contenida en el elemento y en sus subelementos
  obtenerData(): any;
  //Posibilidad de que el campo permita una apertura o cierre
  apertura?: boolean;
  //Elementos hijos del elemento
  elementos?: CampoEditarElemento[];
  //Opciones que puede tener un elemento que lo permita
  opciones?: string[];
  //Parametros de una tabla compuesta
  parametros?: ParametrosCampo[];
  //Descriptor de una tabla dinamica
  descriptor?: string;
  //Columnas de una tabla dinamica
  columnas?: any[];
  //Dependiente de otro elemento
  dependiente?: any;
}
