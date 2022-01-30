import Comparadores from './Comparadores';
import Verificador from 'clases/Plantillas/Campos/Recolectores/Condicionales/Verificador';
import {CondicionDependiente} from '@quiron/classes/dist/components/campos/edicion'
import {TiposElementos} from '@quiron/classes/dist/components/campos';
import VerificadorLogicoEnum from 'enumeradores/Plantillas/Recolectores/Condicionales/VerificadorLogicoEnum';

export default class FabricaVerificadores {
  public static nuevoComparador(condicion: CondicionDependiente): Verificador {
    return new Comparadores[condicion.comparator](condicion.expected_value, <VerificadorLogicoEnum>condicion.operator, <TiposElementos>condicion.parent_elemento);
  }
}
