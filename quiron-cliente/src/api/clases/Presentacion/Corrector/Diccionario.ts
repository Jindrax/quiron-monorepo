/*
https://www.programmableweb.com/category/spelling/api#:~:text=The%20Perfect%20Tense%20API%20is,automatically%20return%20a%20proofread...&text=The%20Gigablast%20Spell%20Check%20API,queries%20given%20in%20U.S.%20English.
Directorio de posibles APIs para llenar el diccionario de forma dinamica.
 */

const diccionario = {
  "direccion": "dirección",
  "codigo": "código",

}
export default class Diccionario{
  public static consultar(palabra: string){
    let resultado = diccionario[palabra];
    if(resultado){
      return resultado;
    }else{
      return palabra;
    }
  }
};
