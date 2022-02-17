import {Campo} from "../../Campo";
import {TiposElementos} from "../../../index";

type ValidadorTipo = TiposElementos.firma

export interface Validador{
    campo: Campo
}