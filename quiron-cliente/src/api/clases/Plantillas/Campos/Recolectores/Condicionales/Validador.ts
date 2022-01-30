import Verificador from './Verificador';
import { CondicionDependiente } from '@quiron/classes/dist/components/campos/edicion';
import VerificadorLogicoEnum from 'enumeradores/Plantillas/Recolectores/Condicionales/VerificadorLogicoEnum';
import FabricaVerificadores from 'clases/Plantillas/Campos/Recolectores/Condicionales/FabricaVerificadores';

export default class Validador {
  public reduccion: boolean;
  public condiciones: Verificador[];

  constructor() {
    this.reduccion = true;
    this.condiciones = [];
  }

  public instalarVerificador(condicion: CondicionDependiente, valorActual: string): Verificador {
    let nuevoVerificador: Verificador = FabricaVerificadores.nuevoComparador(condicion);
    nuevoVerificador.verificar(valorActual);
    this.condiciones.push(nuevoVerificador);
    return nuevoVerificador;
  }

  public validar() {
    let reduccion = true;
    this.condiciones.forEach((verificador) => {
      switch (verificador.verificadorLogico) {
        case VerificadorLogicoEnum.Y:
          reduccion = verificador.estado && reduccion;
          break;
        case VerificadorLogicoEnum.O:
          reduccion = verificador.estado || reduccion;
      }
    });
    this.reduccion = reduccion;
    return reduccion;
  }
}
