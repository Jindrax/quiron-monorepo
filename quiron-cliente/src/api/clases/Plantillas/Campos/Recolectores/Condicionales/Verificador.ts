import VerificadorLogicoEnum from 'enumeradores/Plantillas/Recolectores/Condicionales/VerificadorLogicoEnum';
import { TiposElementos } from '@quiron/classes/dist/components/campos';

export default abstract class Verificador {
  public valorEsperado: any;
  public estado: boolean;
  public verificadorLogico: VerificadorLogicoEnum;
  public tipoDependencia: TiposElementos;

  protected constructor(valorEsperado: any, verificadorLogico: VerificadorLogicoEnum, tipoDependencia: TiposElementos) {
    this.valorEsperado = valorEsperado;
    this.estado = false;
    this.verificadorLogico = verificadorLogico;
    this.tipoDependencia = tipoDependencia;
  }

  abstract verificar(valorActual: any): boolean;
}
