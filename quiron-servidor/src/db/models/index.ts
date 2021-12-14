import {RolModel} from "./RolModel";
import {UsuarioModel} from "./UsuarioModel";
import {PlantillaModel} from "./PlantillaModel";
import {CacheModel} from "./CacheModel";
import {ClienteModel} from "./ClienteModel";
import {ContactoModel} from "./ContactoModel";
import {EquipoModel} from "./EquipoModel/EquipoModel";
import {FormularioModel} from "./FormularioModel/FormularioModel";
import {OTModel} from "./OTModel";
import {ServicioModel} from "./ServicioModel/ServicioModel";
import {FormularioTraceModel} from "./Traces/FormularioTraceModel";
import {OTTraceModel, PlantillaTraceModel} from "./Traces";
import {InstitucionModel} from "./InstitucionModel";
import {EquipoAtributoModel} from "./EquipoModel/EquipoAtributoModel";

const entities = [
    UsuarioModel,
    RolModel,
    PlantillaModel,
    PlantillaTraceModel,
    CacheModel,
    ClienteModel,
    InstitucionModel,
    ContactoModel,
    EquipoModel,
    FormularioModel,
    OTModel,
    ServicioModel,
    FormularioTraceModel,
    OTTraceModel,
    EquipoAtributoModel
];
export default entities;