import Verificador from '../Verificador';
import VerificadorLogicoEnum from 'enumeradores/Plantillas/Recolectores/Condicionales/VerificadorLogicoEnum';
import { TiposElementos } from 'quiron_classes/dist/components/campos';

export default class MayorIgual extends Verificador {


  constructor(valorEsperado: any, verificadorLogico: VerificadorLogicoEnum, tipoDependencia: TiposElementos) {
    super(valorEsperado, verificadorLogico, tipoDependencia);
  }

  verificar(valorActual: any): boolean {
    this.estado = Number(valorActual) >= Number(this.valorEsperado);
    return this.estado;
  }
}
