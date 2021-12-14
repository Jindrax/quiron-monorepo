import Verificador from "clases/Plantillas/Campos/Recolectores/Condicionales/Verificador";
import {TiposElementos} from "quiron_classes/dist/components/campos";

export default class Otro extends Verificador{
  verificar(valorActual: any): boolean {
    console.log("Me estan evaluando", valorActual, "y mi dependencia es de tipo ", this.tipoDependencia);
    if(this.tipoDependencia == TiposElementos.seleccion){
      this.estado = valorActual.startsWith("non_standard|");
    }else if(this.tipoDependencia == TiposElementos.chequeo){
      this.estado = valorActual.includes("Otro");
    }
    return this.estado;
  }
}
