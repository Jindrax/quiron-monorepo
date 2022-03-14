import {Formulario} from "@quiron/classes/dist/entities";
import {CRUDEntity} from "../db/models/CRUDEntity";
import {FormularioModel} from "../db/models/FormularioModel/FormularioModel";

export default class Formularios {

    static repo: CRUDEntity<Formulario, FormularioModel> = new CRUDEntity<Formulario, FormularioModel>(FormularioModel);

    static async crear({formulario}: { formulario: Formulario }) {
        await Formularios.repo.createEntity(formulario);
    }

    static async buscar({filtro}: { filtro: any }) {
        try {
            return await Formularios.repo.retrieveEntity(JSON.parse(filtro), ["plantilla", "ot"]);
        } catch (e) {
            throw e;
        }
    }
}