import Diccionario from 'clases/Presentacion/Corrector/Diccionario';
import {mayusRegex, capitalizar} from 'clases/Presentacion/Utilidades/Strings';
export default function corregir(sentencia: String){
  let palabras = sentencia.split(' ');
  let palabrasCorregidas = [];
  for(let palabra of palabras){
    if(palabra[0].match(mayusRegex)){
      palabrasCorregidas.push(capitalizar(Diccionario.consultar(palabra.toLocaleLowerCase('es-US'))));
    }else{
      palabrasCorregidas.push(Diccionario.consultar(palabra.toLocaleLowerCase('es-US')));
    }
  }
  return palabrasCorregidas.join(' ');
}
