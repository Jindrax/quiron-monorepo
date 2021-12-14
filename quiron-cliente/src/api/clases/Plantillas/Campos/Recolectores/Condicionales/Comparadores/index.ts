import Diferente from './Diferente';
import Igual from './Igual';
import Mayor from './Mayor';
import MayorIgual from './MayorIgual';
import Menor from './Menor';
import MenorIgual from './MenorIgual';
import Otro from "./Otro";

const Comparadores = {
  '=': Igual,
  '<>': Diferente,
  '>': Mayor,
  '>=': MayorIgual,
  '<': Menor,
  '<=': MenorIgual,
  'Otro': Otro
};

export default Comparadores;
