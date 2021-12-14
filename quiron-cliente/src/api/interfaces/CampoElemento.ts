interface Parametros{
  //Etiqueta de los parametros en una tabla compuesta
  etiqueta:string;
  //Parametros etiquetados de una fila en una tabla compuesta
  columnas:string[];
}
export default interface CampoElemento {
  //Tipo de elemento al que hace referencia el campo
  elemento: string;
  //Etiqueta que sera presentada sobre el campo
  etiqueta: string;
  //Funcion que devuelve la informacion contenida en el elemento y en sus subelementos
  dependiente: any;
  obtenerData(): any;
  //Posibilidad de que el campo permita una apertura o cierre
  apertura?: boolean;
  //Elementos hijos del elemento
  elementos?: CampoElemento[];
  //Opciones que puede tener un elemento que lo permita
  opciones?: string[];
  //Parametros de una tabla compuesta
  parametros?: Parametros[];
  //Descriptor de una tabla dinamica
  descriptor?: string;
  //Columnas de una tabla dinamica
  columnas?: any[];
}
