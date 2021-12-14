import Verificador from '../Verificador';
import VerificadorLogicoEnum from 'enumeradores/Plantillas/Recolectores/Condicionales/VerificadorLogicoEnum';
import { TiposElementos } from 'quiron_classes/dist/components/campos';

export default class Diferente extends Verificador {

  constructor(valorEsperado: any, verificadorLogico: VerificadorLogicoEnum, tipoDependencia: TiposElementos) {
    super(valorEsperado, verificadorLogico, tipoDependencia);
  }

  verificar(valorActual: any): boolean {
    if (this.tipoDependencia == TiposElementos.chequeo) {
      this.estado = !valorActual.includes(
        this.valorEsperado
      );
    }
    this.estado = this.valorEsperado != valorActual;
    return this.estado;
  }
}
